/**
 * WebGL2 폴백 — transform feedback으로 동일한 Drift Field를 재현합니다.
 * 입자 수는 WebGPU 경로보다 축소해서 받습니다 (HANDOFF §4: 3만).
 */
import type { FieldBackend, FieldState } from './types'

const GLSL_NOISE = /* glsl */ `
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  return noise2(p) * 0.65 + noise2(p * 2.13 + vec2(17.7, 9.2)) * 0.35;
}

float potential(vec2 p, float time, float scroll) {
  vec2 q = p * 1.9 + vec2(time * 0.03, scroll * 0.55);
  return fbm(q);
}

vec2 curl(vec2 p, float time, float scroll) {
  float e = 0.02;
  float dx = potential(p + vec2(e, 0.0), time, scroll) - potential(p - vec2(e, 0.0), time, scroll);
  float dy = potential(p + vec2(0.0, e), time, scroll) - potential(p - vec2(0.0, e), time, scroll);
  return vec2(dy, -dx) / (2.0 * e);
}
`

const UPDATE_VS = /* glsl */ `#version 300 es
precision highp float;

in vec2 a_pos;
in vec2 a_vel;
in vec2 a_agelife;

uniform float u_time;
uniform float u_dt;
uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform float u_pointerStrength;
uniform float u_scroll;

out vec2 v_pos;
out vec2 v_vel;
out vec2 v_agelife;

${GLSL_NOISE}

void main() {
  vec2 pos = a_pos;
  vec2 vel = a_vel;
  float age = a_agelife.x;
  float life = a_agelife.y;
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  float fi = float(gl_VertexID);

  age -= u_dt;
  if (age <= 0.0) {
    float h1 = hash12(vec2(fi * 0.6180339, 0.13));
    float h2 = hash12(vec2(fi * 0.7548776, 7.77));
    float h3 = hash12(vec2(fi * 0.2887389, 3.21));
    if (h3 < 0.28) {
      float ang = h1 * 6.2831853;
      float rad = sqrt(h2) * 0.9;
      pos = vec2(-0.25, 0.1) + vec2(cos(ang), sin(ang) * 0.75) * rad;
    } else {
      pos = vec2(h1 * 2.0 - 1.0, h2 * 2.0 - 1.0) * 1.05;
    }
    vel = vec2(0.0);
    life = mix(7.0, 15.0, hash12(vec2(fi, 11.3)));
    age = life;
  }

  vec2 samplePos = vec2(pos.x * aspect, pos.y);
  vel += curl(samplePos, u_time, u_scroll) * (u_dt * 0.12);

  vec2 dp = vec2((pos.x - u_pointer.x) * aspect, pos.y - u_pointer.y);
  float d2 = dot(dp, dp);
  float repel = u_pointerStrength * exp(-d2 * 18.0);
  vel += normalize(dp + vec2(1e-5, 0.0)) * repel * u_dt * 0.9;

  vel *= pow(0.96, u_dt * 60.0);
  pos += vel * u_dt;

  if (pos.x > 1.06) pos.x = -1.06;
  if (pos.x < -1.06) pos.x = 1.06;
  if (pos.y > 1.06) pos.y = -1.06;
  if (pos.y < -1.06) pos.y = 1.06;

  v_pos = pos;
  v_vel = vel;
  v_agelife = vec2(age, life);
  gl_Position = vec4(0.0);
  gl_PointSize = 1.0;
}
`

const UPDATE_FS = /* glsl */ `#version 300 es
precision highp float;
out vec4 o;
void main() { o = vec4(0.0); }
`

const RENDER_VS = /* glsl */ `#version 300 es
precision highp float;

in vec2 a_pos;
in vec2 a_vel;
in vec2 a_agelife;

uniform float u_dpr;

out vec3 v_color;
out float v_alpha;

void main() {
  float speed = length(a_vel);
  vec3 slow = vec3(0.180, 0.227, 0.388);
  vec3 mid = vec3(0.545, 0.616, 1.000);
  vec3 fast = vec3(0.910, 0.922, 1.000);
  float t1 = clamp(speed * 10.0, 0.0, 1.0);
  float t2 = clamp(speed * 5.0 - 0.6, 0.0, 1.0);
  v_color = mix(mix(slow, mid, t1), fast, t2);

  float fadeIn = clamp((a_agelife.y - a_agelife.x) * 1.2, 0.0, 1.0);
  float fadeOut = clamp(a_agelife.x * 1.2, 0.0, 1.0);
  v_alpha = 0.17 * fadeIn * fadeOut;

  gl_Position = vec4(a_pos, 0.0, 1.0);
  gl_PointSize = clamp(1.0 + speed * 16.0, 1.0, 2.0) * u_dpr;
}
`

const RENDER_FS = /* glsl */ `#version 300 es
precision highp float;

in vec3 v_color;
in float v_alpha;
out vec4 o;

void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float a = v_alpha * smoothstep(1.0, 0.3, length(c));
  o = vec4(v_color * a, a);
}
`

function compile(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader {
  const shader = gl.createShader(type)
  if (!shader) throw new Error('createShader failed')
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader)
    gl.deleteShader(shader)
    throw new Error(`shader compile: ${log}`)
  }
  return shader
}

function link(
  gl: WebGL2RenderingContext,
  vs: string,
  fs: string,
  tfVaryings?: string[],
): WebGLProgram {
  const program = gl.createProgram()
  if (!program) throw new Error('createProgram failed')
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, vs))
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, fs))
  // 두 프로그램이 같은 VAO를 공유하도록 attribute 인덱스를 링크 전에 고정
  gl.bindAttribLocation(program, 0, 'a_pos')
  gl.bindAttribLocation(program, 1, 'a_vel')
  gl.bindAttribLocation(program, 2, 'a_agelife')
  if (tfVaryings) gl.transformFeedbackVaryings(program, tfVaryings, gl.INTERLEAVED_ATTRIBS)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program)
    gl.deleteProgram(program)
    throw new Error(`program link: ${log}`)
  }
  return program
}

const STRIDE = 6 * 4 // pos2 + vel2 + age + life

export function createWebGL2Field(canvas: HTMLCanvasElement, maxCount: number): FieldBackend {
  const gl = canvas.getContext('webgl2', {
    antialias: false,
    alpha: false,
    powerPreference: 'low-power',
  })
  if (!gl) throw new Error('no webgl2')

  const updateProgram = link(gl, UPDATE_VS, UPDATE_FS, ['v_pos', 'v_vel', 'v_agelife'])
  const renderProgram = link(gl, RENDER_VS, RENDER_FS)

  const uniforms = {
    time: gl.getUniformLocation(updateProgram, 'u_time'),
    dt: gl.getUniformLocation(updateProgram, 'u_dt'),
    resolution: gl.getUniformLocation(updateProgram, 'u_resolution'),
    pointer: gl.getUniformLocation(updateProgram, 'u_pointer'),
    pointerStrength: gl.getUniformLocation(updateProgram, 'u_pointerStrength'),
    scroll: gl.getUniformLocation(updateProgram, 'u_scroll'),
    dpr: gl.getUniformLocation(renderProgram, 'u_dpr'),
  }

  // 0으로 초기화 → age 0 → 첫 업데이트 패스에서 전원 스폰
  const zero = new Float32Array(maxCount * 6)
  const buffers = [gl.createBuffer(), gl.createBuffer()] as [WebGLBuffer, WebGLBuffer]
  const vaos: WebGLVertexArrayObject[] = []
  for (const buffer of buffers) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_COPY)
    const vao = gl.createVertexArray()
    if (!vao) throw new Error('createVertexArray failed')
    gl.bindVertexArray(vao)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, STRIDE, 0)
    gl.enableVertexAttribArray(1)
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, STRIDE, 8)
    gl.enableVertexAttribArray(2)
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, STRIDE, 16)
    vaos.push(vao)
  }
  gl.bindVertexArray(null)

  const tf = gl.createTransformFeedback()
  gl.clearColor(10 / 255, 11 / 255, 13 / 255, 1)
  gl.blendFunc(gl.ONE, gl.ONE)
  gl.disable(gl.DEPTH_TEST)

  let src = 0
  let width = canvas.width
  let height = canvas.height
  let dpr = 1
  let activeCount = maxCount
  let destroyed = false

  return {
    maxCount,

    resize(w: number, h: number) {
      width = w
      height = h
      dpr = Math.max(1, w / Math.max(1, canvas.clientWidth || w))
    },

    setCount(n: number) {
      activeCount = Math.max(1, Math.min(maxCount, Math.floor(n)))
    },

    frame(dt: number, s: FieldState) {
      if (destroyed) return
      const dst = 1 - src

      // 1) 업데이트 패스 (rasterizer discard + transform feedback)
      gl.useProgram(updateProgram)
      gl.uniform1f(uniforms.time, s.time)
      gl.uniform1f(uniforms.dt, dt)
      gl.uniform2f(uniforms.resolution, width, height)
      gl.uniform2f(uniforms.pointer, s.pointerX, s.pointerY)
      gl.uniform1f(uniforms.pointerStrength, s.pointerStrength)
      gl.uniform1f(uniforms.scroll, s.scroll)

      gl.bindVertexArray(vaos[src])
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf)
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, buffers[dst])
      gl.enable(gl.RASTERIZER_DISCARD)
      gl.beginTransformFeedback(gl.POINTS)
      gl.drawArrays(gl.POINTS, 0, activeCount)
      gl.endTransformFeedback()
      gl.disable(gl.RASTERIZER_DISCARD)
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null)
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null)

      // 2) 렌더 패스 (가산 블렌딩 포인트)
      gl.viewport(0, 0, width, height)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.enable(gl.BLEND)
      gl.useProgram(renderProgram)
      gl.uniform1f(uniforms.dpr, dpr)
      gl.bindVertexArray(vaos[dst])
      gl.drawArrays(gl.POINTS, 0, activeCount)
      gl.disable(gl.BLEND)
      gl.bindVertexArray(null)

      src = dst
    },

    destroy() {
      destroyed = true
      gl.deleteTransformFeedback(tf)
      for (const b of buffers) gl.deleteBuffer(b)
      for (const v of vaos) gl.deleteVertexArray(v)
      gl.deleteProgram(updateProgram)
      gl.deleteProgram(renderProgram)
    },
  }
}

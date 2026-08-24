/**
 * 와이어 오브젝트 WebGL2 폴백 (Safari 18 이하 · Firefox 등 WebGPU 없는 환경).
 * WGSL 경로와 같은 지오메트리·같은 원근·같은 알파 규칙을 GLSL ES 300 으로
 * 옮긴 것입니다. 인덱스 버퍼로 gl.LINES 를 한 번 그립니다.
 */
import { torusKnotWire } from './wire-geometry'
import type { WireBackend, WireState } from './types'

const VS = /* glsl */ `#version 300 es
in vec3 aPos;
uniform float uAngleX;
uniform float uAngleY;
uniform float uAngleZ;
uniform float uAspect;
out float vShade;

const float DIST = 3.2;
const float FOCAL = 2.414;

void main() {
  vec3 p = aPos;
  float cz = cos(uAngleZ), sz = sin(uAngleZ);
  p = vec3(p.x * cz - p.y * sz, p.x * sz + p.y * cz, p.z);
  float cx = cos(uAngleX), sx = sin(uAngleX);
  p = vec3(p.x, p.y * cx - p.z * sx, p.y * sx + p.z * cx);
  float cy = cos(uAngleY), sy = sin(uAngleY);
  p = vec3(p.x * cy + p.z * sy, p.y, -p.x * sy + p.z * cy);

  float z = p.z + DIST;
  float ax = FOCAL / max(uAspect, 1.0);
  float ay = FOCAL * min(uAspect, 1.0);

  gl_Position = vec4(p.x * ax, p.y * ay, 0.0, z);
  vShade = clamp((DIST + 1.0 - z) * 0.5, 0.0, 1.0);
}
`

const FS = /* glsl */ `#version 300 es
precision mediump float;
in float vShade;
uniform float uFade;
out vec4 fragColor;

void main() {
  vec3 near = vec3(0.545, 0.616, 1.0);
  vec3 far = vec3(0.239, 0.290, 0.478);
  vec3 color = mix(far, near, vShade);
  float alpha = mix(0.06, 0.60, vShade) * uFade;
  fragColor = vec4(color * alpha, alpha);
}
`

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)
  if (!sh) throw new Error('shader alloc failed')
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh)
    gl.deleteShader(sh)
    throw new Error(`shader compile failed: ${log}`)
  }
  return sh
}

export function createWebGL2Wire(canvas: HTMLCanvasElement): WireBackend {
  const gl = canvas.getContext('webgl2', {
    alpha: true,
    premultipliedAlpha: true,
    antialias: true,
    depth: false,
  })
  if (!gl) throw new Error('no webgl2 context')

  const geo = torusKnotWire()

  const vs = compile(gl, gl.VERTEX_SHADER, VS)
  const fs = compile(gl, gl.FRAGMENT_SHADER, FS)
  const program = gl.createProgram()
  if (!program) throw new Error('program alloc failed')
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  gl.deleteShader(vs)
  gl.deleteShader(fs)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program)
    gl.deleteProgram(program)
    throw new Error(`program link failed: ${log}`)
  }

  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)

  const vbo = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
  gl.bufferData(gl.ARRAY_BUFFER, geo.positions, gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(program, 'aPos')
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, 0, 0)

  const ibo = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, geo.edges, gl.STATIC_DRAW)
  gl.bindVertexArray(null)

  const uAngleX = gl.getUniformLocation(program, 'uAngleX')
  const uAngleY = gl.getUniformLocation(program, 'uAngleY')
  const uAngleZ = gl.getUniformLocation(program, 'uAngleZ')
  const uAspect = gl.getUniformLocation(program, 'uAspect')
  const uFade = gl.getUniformLocation(program, 'uFade')

  gl.disable(gl.DEPTH_TEST)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

  let aspect = 1
  let destroyed = false

  return {
    resize(w: number, h: number) {
      aspect = Math.max(w, 1) / Math.max(h, 1)
      gl.viewport(0, 0, w, h)
    },

    frame(s: WireState) {
      if (destroyed) return
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)
      gl.uniform1f(uAngleX, s.angleX)
      gl.uniform1f(uAngleY, s.angleY)
      gl.uniform1f(uAngleZ, s.angleZ)
      gl.uniform1f(uAspect, aspect)
      gl.uniform1f(uFade, s.fade)
      gl.bindVertexArray(vao)
      gl.drawElements(gl.LINES, geo.edges.length, gl.UNSIGNED_SHORT, 0)
      gl.bindVertexArray(null)
    },

    destroy() {
      destroyed = true
      gl.deleteBuffer(vbo)
      gl.deleteBuffer(ibo)
      gl.deleteVertexArray(vao)
      gl.deleteProgram(program)
    },
  }
}

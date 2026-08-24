/**
 * Drift Field — WGSL (HANDOFF §4)
 *
 * curl noise 벡터장을 따라 입자가 아주 느리게 표류합니다.
 * 컴퓨트: read_write storage / 렌더: read storage — 같은 버퍼, 다른 바인딩.
 */

const COMMON = /* wgsl */ `
struct Particle {
  pos: vec2f,
  vel: vec2f,
  age: f32,
  life: f32,
}

struct Uniforms {
  time: f32,
  dt: f32,
  resolution: vec2f,
  pointer: vec2f,
  pointer_strength: f32,
  scroll: f32,
  count: f32,
  _pad: f32,
}
`

const NOISE = /* wgsl */ `
fn hash12(p: vec2f) -> f32 {
  var p3 = fract(vec3f(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

fn noise2(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  let a = hash12(i);
  let b = hash12(i + vec2f(1.0, 0.0));
  let c = hash12(i + vec2f(0.0, 1.0));
  let dd = hash12(i + vec2f(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, dd, u.x), u.y);
}

fn fbm(p: vec2f) -> f32 {
  return noise2(p) * 0.65 + noise2(p * 2.13 + vec2f(17.7, 9.2)) * 0.35;
}

fn potential(p: vec2f, time: f32, scroll: f32) -> f32 {
  let q = p * 1.9 + vec2f(time * 0.03, scroll * 0.55);
  return fbm(q);
}

// 스칼라 포텐셜의 회전 성분 → 발산 없는(divergence-free) 장
fn curl(p: vec2f, time: f32, scroll: f32) -> vec2f {
  let e = 0.02;
  let dx = potential(p + vec2f(e, 0.0), time, scroll) - potential(p - vec2f(e, 0.0), time, scroll);
  let dy = potential(p + vec2f(0.0, e), time, scroll) - potential(p - vec2f(0.0, e), time, scroll);
  return vec2f(dy, -dx) / (2.0 * e);
}
`

export const computeWGSL = /* wgsl */ `
${COMMON}
${NOISE}

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<uniform> uni: Uniforms;

@compute @workgroup_size(64)
fn cs_main(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.x;
  if (f32(i) >= uni.count) { return; }
  var p = particles[i];
  let aspect = uni.resolution.x / max(uni.resolution.y, 1.0);

  p.age -= uni.dt;
  if (p.age <= 0.0) {
    // 재배치 — 화면 전체에 고르게. 뭉침 없이 희박하게 유지.
    let h1 = hash12(vec2f(f32(i) * 0.6180339, 0.13));
    let h2 = hash12(vec2f(f32(i) * 0.7548776, 7.77));
    p.pos = vec2f(h1 * 2.0 - 1.0, h2 * 2.0 - 1.0) * 1.05;
    p.vel = vec2f(0.0, 0.0);
    p.life = mix(7.0, 15.0, hash12(vec2f(f32(i), 11.3)));
    p.age = p.life;
  }

  let sample_pos = vec2f(p.pos.x * aspect, p.pos.y);
  p.vel += curl(sample_pos, uni.time, uni.scroll) * (uni.dt * 0.12);

  // 포인터 주변 약한 반발 웰 — 마우스를 따라 필드가 갈라짐
  let dp = vec2f((p.pos.x - uni.pointer.x) * aspect, p.pos.y - uni.pointer.y);
  let d2 = dot(dp, dp);
  let repel = uni.pointer_strength * exp(-d2 * 18.0);
  p.vel += normalize(dp + vec2f(1e-5, 0.0)) * repel * uni.dt * 0.9;

  // 감쇠 0.96/frame 기준을 프레임레이트 독립으로
  p.vel *= pow(0.96, uni.dt * 60.0);
  p.pos += p.vel * uni.dt;

  if (p.pos.x > 1.06) { p.pos.x = -1.06; }
  if (p.pos.x < -1.06) { p.pos.x = 1.06; }
  if (p.pos.y > 1.06) { p.pos.y = -1.06; }
  if (p.pos.y < -1.06) { p.pos.y = 1.06; }

  particles[i] = p;
}
`

export const renderWGSL = /* wgsl */ `
${COMMON}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<uniform> uni: Uniforms;

struct VSOut {
  @builtin(position) clip: vec4f,
  @location(0) uv: vec2f,
  @location(1) color: vec3f,
  @location(2) alpha: f32,
}

const QUAD = array<vec2f, 6>(
  vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
  vec2f(-1.0, 1.0), vec2f(1.0, -1.0), vec2f(1.0, 1.0),
);

// 속도 컬러 램프: #2E3A63 → #8B9DFF → #E8EBFF
const C_SLOW = vec3f(0.180, 0.227, 0.388);
const C_MID  = vec3f(0.545, 0.616, 1.000);
const C_FAST = vec3f(0.910, 0.922, 1.000);

@vertex
fn vs_main(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VSOut {
  let p = particles[ii];
  let corner = QUAD[vi];
  let speed = length(p.vel);

  let size_px = clamp(1.0 + speed * 16.0, 1.0, 1.8);
  let offset = corner * size_px * 2.0 / uni.resolution;

  var out: VSOut;
  out.clip = vec4f(p.pos + offset, 0.0, 1.0);
  out.uv = corner;

  let t1 = clamp(speed * 10.0, 0.0, 1.0);
  let t2 = clamp(speed * 5.0 - 0.6, 0.0, 1.0);
  out.color = mix(mix(C_SLOW, C_MID, t1), C_FAST, t2);

  let fade_in = clamp((p.life - p.age) * 1.2, 0.0, 1.0);
  let fade_out = clamp(p.age * 1.2, 0.0, 1.0);
  out.alpha = 0.12 * fade_in * fade_out;
  return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4f {
  let r = length(in.uv);
  let a = in.alpha * smoothstep(1.0, 0.3, r);
  return vec4f(in.color * a, a);
}
`

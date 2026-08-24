/**
 * 와이어 오브젝트 WGSL. 깊이 버퍼 없이 알파만으로 원근을 만듭니다:
 * 카메라에 가까운 선은 밝은 액센트, 뒤쪽 선은 거의 사라집니다.
 * 출력은 프리멀티플라이드 알파 — 캔버스가 페이지 배경 위에 그대로 얹힙니다.
 */
export const wireWGSL = /* wgsl */ `
struct Uniforms {
  angleX: f32,
  angleY: f32,
  aspect: f32,
  fade: f32,
};

@group(0) @binding(0) var<storage, read> verts: array<vec4f>;
@group(0) @binding(1) var<uniform> u: Uniforms;

struct VOut {
  @builtin(position) pos: vec4f,
  @location(0) shade: f32,
};

const DIST: f32 = 3.4;   // 카메라 거리 (반지름 1 기준)
const FOCAL: f32 = 2.414; // fov 45도

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VOut {
  var p = verts[vi].xyz;

  let cy = cos(u.angleY);
  let sy = sin(u.angleY);
  p = vec3f(p.x * cy + p.z * sy, p.y, -p.x * sy + p.z * cy);

  let cx = cos(u.angleX);
  let sx = sin(u.angleX);
  p = vec3f(p.x, p.y * cx - p.z * sx, p.y * sx + p.z * cx);

  // 캔버스가 세로로 길든 가로로 길든 항상 짧은 쪽에 맞춰 들어갑니다
  let z = p.z + DIST;
  let ax = FOCAL / max(u.aspect, 1.0);
  let ay = FOCAL * min(u.aspect, 1.0);

  var out: VOut;
  out.pos = vec4f(p.x * ax, p.y * ay, 0.5 * z, z);
  out.shade = clamp((DIST + 1.0 - z) * 0.5, 0.0, 1.0);
  return out;
}

@fragment
fn fs_main(in: VOut) -> @location(0) vec4f {
  let near = vec3f(0.545, 0.616, 1.0);   // --accent #8B9DFF
  let far  = vec3f(0.239, 0.290, 0.478); // --accent-dim #3D4A7A
  let color = mix(far, near, in.shade);
  let alpha = mix(0.09, 0.72, in.shade) * u.fade;
  return vec4f(color * alpha, alpha);
}
`

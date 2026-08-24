/**
 * 좌측 패널 와이어 오브젝트의 지오메트리 — (p,q) 토러스 매듭을 따라가는
 * 얇은 관. 세로 스트랜드 + 일정 간격의 링만 그려서 선이 많아지지 않습니다.
 * 프레임은 평행 이동(parallel transport)으로 잡고, 닫힌 곡선이라 끝에서
 * 생기는 비틀림을 균등하게 되돌려 이음매를 맞춥니다. CPU 에서 한 번만.
 */

export type WireGeometry = {
  /** 정점당 x,y,z */
  positions: Float32Array
  /** 간선당 정점 인덱스 두 개 */
  edges: Uint16Array
}

type V3 = [number, number, number]

const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const cross = (a: V3, b: V3): V3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
]
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
const norm = (v: V3): V3 => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1
  return [v[0] / l, v[1] / l, v[2] / l]
}

export type TorusKnotOptions = {
  /** 축을 감는 횟수 */
  p?: number
  /** 관을 감는 횟수 — (2,3)이 세잎매듭 */
  q?: number
  /** 곡선 분할 수 */
  segments?: number
  /** 단면 스트랜드 수 */
  sides?: number
  /** 관 반지름 (곡선 반지름 3 기준) */
  tube?: number
  /** 몇 세그먼트마다 링을 그릴지 */
  ringEvery?: number
}

export function torusKnotWire({
  p = 2,
  q = 3,
  segments = 180,
  sides = 6,
  tube = 0.42,
  ringEvery = 6,
}: TorusKnotOptions = {}): WireGeometry {
  const curve = (t: number): V3 => {
    const r = 2 + Math.cos(q * t)
    return [r * Math.cos(p * t), r * Math.sin(p * t), Math.sin(q * t)]
  }

  const points: V3[] = []
  for (let i = 0; i < segments; i++) {
    points.push(curve((i / segments) * Math.PI * 2))
  }

  const tangents = points.map((_, i) =>
    norm(sub(points[(i + 1) % segments], points[(i - 1 + segments) % segments])),
  )

  // 첫 법선: 접선과 가장 덜 나란한 축에서 시작
  const t0 = tangents[0]
  const seed: V3 = Math.abs(t0[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0]
  const normals: V3[] = [norm(sub(seed, [t0[0] * dot(seed, t0), t0[1] * dot(seed, t0), t0[2] * dot(seed, t0)]))]
  for (let i = 1; i < segments; i++) {
    const prev = normals[i - 1]
    const t = tangents[i]
    const d = dot(prev, t)
    normals.push(norm(sub(prev, [t[0] * d, t[1] * d, t[2] * d])))
  }

  // 한 바퀴 돌아온 법선과 시작 법선의 각도만큼 균등하게 되감아 이음매를 맞춥니다
  const last = normals[segments - 1]
  const d0 = dot(last, t0)
  const closed = norm(sub(last, [t0[0] * d0, t0[1] * d0, t0[2] * d0]))
  const twist = Math.atan2(dot(cross(normals[0], closed), t0), dot(normals[0], closed))

  const positions = new Float32Array(segments * sides * 3)
  let maxLen = 0

  for (let i = 0; i < segments; i++) {
    const t = tangents[i]
    const n = normals[i]
    const a = (-twist * i) / segments
    const ca = Math.cos(a)
    const sa = Math.sin(a)
    // 로드리게스 회전 — 접선축으로 n 을 되감습니다
    const cr = cross(t, n)
    const nd = dot(t, n)
    const rn: V3 = [
      n[0] * ca + cr[0] * sa + t[0] * nd * (1 - ca),
      n[1] * ca + cr[1] * sa + t[1] * nd * (1 - ca),
      n[2] * ca + cr[2] * sa + t[2] * nd * (1 - ca),
    ]
    const b = cross(t, rn)

    for (let j = 0; j < sides; j++) {
      const th = (j / sides) * Math.PI * 2
      const cs = Math.cos(th) * tube
      const sn = Math.sin(th) * tube
      const idx = (i * sides + j) * 3
      const x = points[i][0] + rn[0] * cs + b[0] * sn
      const y = points[i][1] + rn[1] * cs + b[1] * sn
      const z = points[i][2] + rn[2] * cs + b[2] * sn
      positions[idx] = x
      positions[idx + 1] = y
      positions[idx + 2] = z
      maxLen = Math.max(maxLen, Math.hypot(x, y, z))
    }
  }

  // 반지름 1 안에 들어오도록 정규화 — 셰이더의 카메라 거리가 이걸 전제합니다
  const scale = 1 / (maxLen || 1)
  for (let i = 0; i < positions.length; i++) positions[i] *= scale

  const edges: number[] = []
  for (let i = 0; i < segments; i++) {
    const next = (i + 1) % segments
    for (let j = 0; j < sides; j++) {
      edges.push(i * sides + j, next * sides + j)
      if (i % ringEvery === 0) {
        edges.push(i * sides + j, i * sides + ((j + 1) % sides))
      }
    }
  }

  return { positions, edges: Uint16Array.from(edges) }
}

/** 인덱스를 펼쳐 line-list 정점 배열(vec4 정렬)로 만듭니다. WebGPU 경로용. */
export function expandToLineList(geo: WireGeometry): Float32Array {
  const out = new Float32Array(geo.edges.length * 4)
  for (let e = 0; e < geo.edges.length; e++) {
    const v = geo.edges[e] * 3
    out[e * 4] = geo.positions[v]
    out[e * 4 + 1] = geo.positions[v + 1]
    out[e * 4 + 2] = geo.positions[v + 2]
    out[e * 4 + 3] = 1
  }
  return out
}

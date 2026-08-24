/**
 * 정이십면체를 세분해 단위구에 투영한 와이어프레임 지오메트리.
 * subdivisions=1 이면 정점 42 / 간선 120 — 선이 겹쳐 보이지 않으면서
 * 구의 곡률이 읽히는 최소 밀도입니다. CPU 에서 한 번만 만듭니다.
 */

export type WireGeometry = {
  /** 정점당 x,y,z */
  positions: Float32Array
  /** 간선당 정점 인덱스 두 개 */
  edges: Uint16Array
}

function normalize(v: [number, number, number]): [number, number, number] {
  const l = Math.hypot(v[0], v[1], v[2]) || 1
  return [v[0] / l, v[1] / l, v[2] / l]
}

export function icosphereWire(subdivisions = 1): WireGeometry {
  const t = (1 + Math.sqrt(5)) / 2

  const verts: [number, number, number][] = [
    [-1, t, 0],
    [1, t, 0],
    [-1, -t, 0],
    [1, -t, 0],
    [0, -1, t],
    [0, 1, t],
    [0, -1, -t],
    [0, 1, -t],
    [t, 0, -1],
    [t, 0, 1],
    [-t, 0, -1],
    [-t, 0, 1],
  ].map((v) => normalize(v as [number, number, number]))

  let faces: [number, number, number][] = [
    [0, 11, 5],
    [0, 5, 1],
    [0, 1, 7],
    [0, 7, 10],
    [0, 10, 11],
    [1, 5, 9],
    [5, 11, 4],
    [11, 10, 2],
    [10, 7, 6],
    [7, 1, 8],
    [3, 9, 4],
    [3, 4, 2],
    [3, 2, 6],
    [3, 6, 8],
    [3, 8, 9],
    [4, 9, 5],
    [2, 4, 11],
    [6, 2, 10],
    [8, 6, 7],
    [9, 8, 1],
  ]

  // 간선 중점을 공유해야 정점이 중복되지 않습니다
  const midCache = new Map<number, number>()
  const midpoint = (a: number, b: number) => {
    const key = a < b ? a * 65536 + b : b * 65536 + a
    const hit = midCache.get(key)
    if (hit !== undefined) return hit
    const va = verts[a]
    const vb = verts[b]
    verts.push(normalize([(va[0] + vb[0]) / 2, (va[1] + vb[1]) / 2, (va[2] + vb[2]) / 2]))
    const idx = verts.length - 1
    midCache.set(key, idx)
    return idx
  }

  for (let s = 0; s < subdivisions; s++) {
    const next: [number, number, number][] = []
    for (const [a, b, c] of faces) {
      const ab = midpoint(a, b)
      const bc = midpoint(b, c)
      const ca = midpoint(c, a)
      next.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca])
    }
    faces = next
  }

  const edgeSet = new Set<number>()
  for (const [a, b, c] of faces) {
    for (const [x, y] of [
      [a, b],
      [b, c],
      [c, a],
    ]) {
      edgeSet.add(x < y ? x * 65536 + y : y * 65536 + x)
    }
  }

  const positions = new Float32Array(verts.length * 3)
  verts.forEach((v, i) => {
    positions[i * 3] = v[0]
    positions[i * 3 + 1] = v[1]
    positions[i * 3 + 2] = v[2]
  })

  const edges = new Uint16Array(edgeSet.size * 2)
  let i = 0
  for (const key of edgeSet) {
    edges[i++] = Math.floor(key / 65536)
    edges[i++] = key % 65536
  }

  return { positions, edges }
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

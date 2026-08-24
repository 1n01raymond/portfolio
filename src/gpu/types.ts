/** WebGPU / WebGL2 백엔드 공통 인터페이스. 루프는 ParticleField가 돌립니다. */
export type FieldState = {
  time: number
  pointerX: number
  pointerY: number
  pointerStrength: number
  scroll: number
}

/** 와이어 오브젝트의 프레임 상태. 회전각은 루프(WireObject)가 계산합니다. */
export type WireState = {
  /** X축 기울기 (라디안) */
  angleX: number
  /** Y축 요 — 커서가 만듭니다 (라디안) */
  angleY: number
  /** Z축 자전 (라디안) */
  angleZ: number
  /** 등장 페이드 0..1 */
  fade: number
}

export interface WireBackend {
  frame(state: WireState): void
  resize(width: number, height: number): void
  destroy(): void
}

export interface FieldBackend {
  /** 한 프레임: 시뮬레이션 + 렌더 */
  frame(dt: number, state: FieldState): void
  /** 캔버스 버퍼 크기(디바이스 픽셀)가 바뀌었을 때 */
  resize(width: number, height: number): void
  /** 저사양 대응: 그리는 입자 수 축소 */
  setCount(n: number): void
  readonly maxCount: number
  destroy(): void
}

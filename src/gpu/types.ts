/** WebGPU / WebGL2 백엔드 공통 인터페이스. 루프는 ParticleField가 돌립니다. */
export type FieldState = {
  time: number
  pointerX: number
  pointerY: number
  pointerStrength: number
  scroll: number
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

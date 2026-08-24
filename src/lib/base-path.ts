/**
 * public/ 정적 자산을 <a href> 등으로 직접 참조할 때 basePath를 붙입니다.
 * (next/image, next/link는 스스로 처리하므로 이 헬퍼가 필요 없습니다.)
 */
export function withBase(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}

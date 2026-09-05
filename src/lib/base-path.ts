/**
 * public/ 정적 자산과 next/image의 src에 basePath를 붙입니다.
 * next/link의 href에는 Next.js가 자동으로 붙이므로 사용하지 않습니다.
 */
export function withBase(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}

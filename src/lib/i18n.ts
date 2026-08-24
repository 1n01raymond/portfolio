import type { I18n, Lang } from '@/content/resume'

export function t<T>(lang: Lang, value: I18n<T>): T {
  return value[lang]
}

/** ko ↔ en 대응 경로. basePath는 Link/router가 붙이므로 여기서는 순수 경로만 다룹니다. */
export function altPath(pathname: string, to: Lang): string {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  if (to === 'ko') return stripped
  return stripped === '/' ? '/en/' : `/en${stripped}`
}

export function langHome(lang: Lang): string {
  return lang === 'ko' ? '/' : '/en/'
}

export function langPath(lang: Lang, path: string): string {
  return lang === 'ko' ? path : `/en${path}`
}

import type { Lang } from '@/content/resume'

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatMonth(iso: string, lang: Lang): string {
  const [y, m] = iso.split('-')
  if (lang === 'ko') return `${y}.${m}`
  return `${MONTHS_EN[Number(m) - 1]} ${y}`
}

export function formatPeriod(start: string, end: string | null, lang: Lang): string {
  const from = formatMonth(start, lang)
  const to = end ? formatMonth(end, lang) : lang === 'ko' ? '현재' : 'Present'
  return `${from} — ${to}`
}

/** 회사별 시드 그라디언트 색상 (이미지 없는 카드용) */
export function seedGradient(slug: string): { from: string; to: string; angle: number } {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  const hue = 210 + (h % 60) - 30 // 액센트(#8B9DFF, ~230°) 주변에 머무름
  const hue2 = hue + 24
  return {
    from: `hsl(${hue} 32% 14%)`,
    to: `hsl(${hue2} 46% 26%)`,
    angle: 120 + (h % 50),
  }
}

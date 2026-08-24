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

/**
 * 재직 기간의 길이. 일(day)까지 반영해 개월 수를 내림으로 계산한다.
 * 진행 중인 경력은 빌드 시각 기준 — 정적 배포이므로 재배포 때 갱신된다.
 */
export function formatDuration(start: string, end: string | null, lang: Lang): string {
  const [sy, sm, sd] = start.split('-').map(Number)
  const endDate = end ? end.split('-').map(Number) : null
  const now = new Date()
  const [ey, em, ed] = endDate ?? [now.getFullYear(), now.getMonth() + 1, now.getDate()]

  let months = (ey - sy) * 12 + (em - sm)
  if (ed < sd) months -= 1
  months = Math.max(1, months)

  const years = Math.floor(months / 12)
  const rest = months % 12

  if (lang === 'ko') {
    if (years === 0) return `${rest}개월`
    if (rest === 0) return `${years}년`
    return `${years}년 ${rest}개월`
  }
  const y = `${years} ${years === 1 ? 'yr' : 'yrs'}`
  const m = `${rest} ${rest === 1 ? 'mo' : 'mos'}`
  if (years === 0) return m
  if (rest === 0) return y
  return `${y} ${m}`
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

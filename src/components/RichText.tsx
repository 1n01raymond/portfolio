import Link from 'next/link'
import type { Lang } from '@/content/resume'
import { langPath } from '@/lib/i18n'

/**
 * 본문 속 고유명사 강조.
 *
 * 문단 전체는 muted 한 톤으로 흐르고, `[[...]]` 로 감싼 조각만 본문색 +
 * medium 으로 올라옵니다. 처음부터 끝까지 읽지 않는 사람이 회사와 제품
 * 이름만은 집어 가게 하려는 장치라, 한 문단에 두세 개를 넘기지 않습니다.
 *
 *   [[네이버제트]]                 강조만
 *   [[ZEPETO|/work/naverz/]]      강조 + 내부 링크 (ko/en 접두사는 자동)
 *   [[Klaviyo|https://...]]       강조 + 새 탭
 *
 * 마크업 대신 문자열 안의 표시를 쓰는 이유는 콘텐츠가 resume.ts 한 곳에
 * 평문으로 모여 있어야 ko/en 두 벌을 나란히 놓고 고칠 수 있기 때문입니다.
 */
export default function RichText({ lang, text }: { lang: Lang; text: string }) {
  const mark = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g
  const nodes: React.ReactNode[] = []
  let last = 0

  for (let m = mark.exec(text); m !== null; m = mark.exec(text)) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    const [raw, label, href] = m
    const base = 'font-medium text-ink'

    if (!href) {
      nodes.push(
        <span key={m.index} className={base}>
          {label}
        </span>,
      )
    } else if (/^https?:/.test(href)) {
      nodes.push(
        <a
          key={m.index}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`${base} transition-colors hover:text-accent`}
        >
          {label}
        </a>,
      )
    } else {
      nodes.push(
        <Link
          key={m.index}
          href={langPath(lang, href)}
          className={`${base} transition-colors hover:text-accent`}
        >
          {label}
        </Link>,
      )
    }

    last = m.index + raw.length
  }

  if (last < text.length) nodes.push(text.slice(last))
  return <>{nodes}</>
}

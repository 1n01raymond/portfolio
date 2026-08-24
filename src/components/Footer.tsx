import type { Lang } from '@/content/resume'
import { profile } from '@/content/resume'
import { t } from '@/lib/i18n'

/** 소셜 링크는 좌측 패널 한 곳에만 둡니다 — 여기엔 저작권 한 줄만. */
export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="print-hidden border-t border-line/60">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-10 sm:px-8">
        <p className="mono-label text-muted">
          © {new Date().getFullYear()} {t(lang, profile.name)}
        </p>
      </div>
    </footer>
  )
}

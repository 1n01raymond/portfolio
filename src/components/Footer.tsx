import type { Lang } from '@/content/resume'
import { contact, profile, ui } from '@/content/resume'
import { t } from '@/lib/i18n'
import { withBase } from '@/lib/base-path'

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="print-hidden border-t border-line/60">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="mono-label text-muted">
          © {new Date().getFullYear()} {t(lang, profile.name)}
        </p>
        <div className="mono-label flex items-center gap-5">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          {/* 옛 사이트(Knight Lab 타임라인)는 v0-timeline 태그와 /legacy 로 보존 */}
          <a
            href={withBase('/legacy/index.html')}
            className="text-muted/70 transition-colors hover:text-ink"
          >
            {t(lang, ui.legacy)}
          </a>
        </div>
      </div>
    </footer>
  )
}

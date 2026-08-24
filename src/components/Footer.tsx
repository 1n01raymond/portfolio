import type { Lang } from '@/content/resume'
import { contact, profile } from '@/content/resume'
import { t } from '@/lib/i18n'

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
        </div>
      </div>
    </footer>
  )
}

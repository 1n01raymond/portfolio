import Link from 'next/link'
import type { Lang } from '@/content/resume'
import { ui } from '@/content/resume'
import { t, langHome, langPath } from '@/lib/i18n'
import LangToggle from './LangToggle'

export default function Nav({ lang }: { lang: Lang }) {
  return (
    <header className="print-hidden fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 w-full max-w-[1120px] items-center justify-between px-5 sm:px-8">
        <Link
          href={langHome(lang)}
          className="mono-label font-semibold tracking-[0.12em] text-ink transition-colors hover:text-accent"
        >
          SHC
        </Link>
        <div className="flex items-center gap-3 sm:gap-7">
          <Link
            href={`${langHome(lang)}#work`}
            className="mono-label text-muted transition-colors hover:text-ink"
          >
            {t(lang, ui.nav.work)}
          </Link>
          <Link
            href={langPath(lang, '/resume/')}
            className="mono-label text-muted transition-colors hover:text-ink"
          >
            {t(lang, ui.nav.resume)}
          </Link>
          <Link
            href={`${langHome(lang)}#contact`}
            className="mono-label text-muted transition-colors hover:text-ink"
          >
            {t(lang, ui.nav.contact)}
          </Link>
          <LangToggle lang={lang} />
        </div>
      </nav>
    </header>
  )
}

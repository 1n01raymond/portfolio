'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Lang } from '@/content/resume'
import { altPath } from '@/lib/i18n'

export default function LangToggle({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? '/'
  const koHref = altPath(pathname, 'ko')
  const enHref = altPath(pathname, 'en')

  return (
    <div className="mono-label flex items-center gap-1.5" aria-label="Language">
      <Link
        href={koHref}
        aria-current={lang === 'ko' ? 'true' : undefined}
        className={lang === 'ko' ? 'text-accent' : 'text-muted transition-colors hover:text-ink'}
      >
        KO
      </Link>
      <span className="text-line" aria-hidden>
        ·
      </span>
      <Link
        href={enHref}
        aria-current={lang === 'en' ? 'true' : undefined}
        className={lang === 'en' ? 'text-accent' : 'text-muted transition-colors hover:text-ink'}
      >
        EN
      </Link>
    </div>
  )
}

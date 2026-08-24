'use client'

import type { Lang } from '@/content/resume'
import { ui } from '@/content/resume'
import { t } from '@/lib/i18n'

export default function PrintButton({ lang }: { lang: Lang }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print-hidden mono-label rounded-md border border-line bg-surface px-4 py-2 text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {t(lang, ui.actions.savePdf)}
    </button>
  )
}

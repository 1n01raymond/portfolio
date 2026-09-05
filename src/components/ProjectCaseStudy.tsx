import type { Lang, Project } from '@/content/resume'
import { ui } from '@/content/resume'
import { t } from '@/lib/i18n'

type CaseStudy = NonNullable<Project['caseStudies']>[number]

export default function ProjectCaseStudy({
  lang,
  study,
  index,
}: {
  lang: Lang
  study: CaseStudy
  index: number
}) {
  const labels = ui.projectLabels
  const diagram = study.diagram

  return (
    <article id={study.id} aria-labelledby={`${study.id}-title`} className="scroll-mt-24 border-t border-line/70 pt-7">
      <div className="mb-6 flex items-baseline gap-3">
        <span aria-hidden className="mono-label text-accent">{String(index + 1).padStart(2, '0')}</span>
        <h3 id={`${study.id}-title`} className="text-xl leading-snug font-semibold tracking-tight text-ink sm:text-2xl">
          {t(lang, study.title)}
        </h3>
      </div>

      <dl className="space-y-5">
        <div className="grid gap-2 sm:grid-cols-[100px_1fr] sm:gap-6">
          <dt className="mono-label pt-1 font-medium text-muted">{t(lang, labels.context)}</dt>
          <dd className="leading-relaxed text-ink/90">{t(lang, study.context)}</dd>
        </div>
        <div className="grid gap-2 sm:grid-cols-[100px_1fr] sm:gap-6">
          <dt className="mono-label pt-1 font-medium text-muted">{t(lang, labels.approach)}</dt>
          <dd className="space-y-3 leading-relaxed text-ink/90">
            {study.approach.map((step, i) => <p key={i}>{t(lang, step)}</p>)}
          </dd>
        </div>
        {study.outcome && (
          <div className="grid gap-2 sm:grid-cols-[100px_1fr] sm:gap-6">
            <dt className="mono-label pt-1 font-medium text-accent">{t(lang, labels.outcome)}</dt>
            <dd className="border-l-2 border-accent/60 pl-4 leading-relaxed text-ink">
              {t(lang, study.outcome)}
            </dd>
          </div>
        )}
      </dl>

      {diagram && (
        <figure className="mt-7 rounded-xl border border-line/60 bg-surface/35 p-5 sm:p-6">
          <ol className="grid gap-8 sm:grid-flow-col sm:auto-cols-fr">
            {diagram.panels.map((panel, i) => (
              <li key={i} className="relative min-w-0 rounded-lg border border-line/70 bg-bg/60 p-4">
                <h4 className="mb-3 text-sm font-semibold text-accent">{t(lang, panel.title)}</h4>
                <ul className="space-y-2 text-sm leading-relaxed text-ink/90">
                  {panel.items.map((item, j) => <li key={j}>{t(lang, item)}</li>)}
                </ul>
                {i < diagram.panels.length - 1 && (
                  <span aria-hidden className="absolute -bottom-7 left-1/2 text-accent sm:top-1/2 sm:-right-6 sm:bottom-auto sm:left-auto">
                    <span className="sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </span>
                )}
              </li>
            ))}
          </ol>
          <figcaption className="mono-label mt-4 text-muted">{t(lang, diagram.caption)}</figcaption>
        </figure>
      )}
    </article>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Lang } from '@/content/resume'
import { projects, ui } from '@/content/resume'
import { t, langHome, langPath } from '@/lib/i18n'
import { withBase } from '@/lib/base-path'
import ProjectCaseStudy from '@/components/ProjectCaseStudy'

export default function WorkDetailPage({ lang, slug }: { lang: Lang; slug: string }) {
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()
  const relatedProjects = projects.filter((p) => p.featured && p.slug !== slug)
  const labels = ui.projectLabels
  const overview = project.overview

  return (
    <main className="mx-auto w-full max-w-[1120px] px-5 pt-24 pb-24 break-keep sm:px-8">
      <Link
        href={`${langHome(lang)}#work`}
        className="mono-label inline-flex items-center gap-2 py-2 text-muted transition-colors hover:text-accent"
      >
        <span aria-hidden>←</span> {t(lang, ui.actions.back)}
      </Link>

      <header className="mt-6 mb-10">
        <div className="mono-label mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-muted">
          <span>{t(lang, project.company)}</span>
          {project.period && <span>{t(lang, project.period)}</span>}
        </div>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold tracking-tight text-ink">
          {t(lang, project.title)}
        </h1>
        {project.periodNote && (
          <p className="mono-label mt-3 text-muted">{t(lang, project.periodNote)}</p>
        )}
        <p className="mt-5 max-w-[68ch] text-lg leading-relaxed text-muted">
          {t(lang, project.summary)}
        </p>

        {overview && (
          <dl className="mt-8 grid gap-6 border-y border-line/70 py-6 sm:grid-cols-[0.8fr_1fr_1.4fr] sm:gap-8">
            {(['role', 'focus', 'contribution'] as const).map((key) => (
              <div key={key}>
                <dt className="mono-label mb-2 font-medium text-accent">{t(lang, labels[key])}</dt>
                <dd className="text-sm leading-relaxed text-ink/90">
                  {t(lang, overview[key])}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => <span key={s} className="tag">{s}</span>)}
        </div>
        {project.links && (
          <div className="mono-label mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
                {t(lang, link.label)} ↗
              </a>
            ))}
          </div>
        )}
      </header>

      {project.caseStudies && project.caseStudies.length > 0 && (
        <section aria-labelledby="case-studies-heading" className="mb-16">
          <h2 id="case-studies-heading" className="section-title mb-5">
            {t(lang, labels.caseStudies)}
          </h2>
          {project.caseStudies.length > 1 && (
            <nav aria-label={t(lang, labels.caseStudies)} className="mb-10">
              <ol className="flex flex-wrap gap-x-6 gap-y-3">
                {project.caseStudies.map((study, index) => (
                  <li key={study.id}>
                    <a href={`#${study.id}`} className="inline-flex items-baseline gap-2 text-sm text-muted underline-offset-4 hover:text-accent hover:underline">
                      <span aria-hidden className="mono-label text-accent">{String(index + 1).padStart(2, '0')}</span>
                      {t(lang, study.title)}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <div className="max-w-[900px] space-y-12">
            {project.caseStudies.map((study, index) => (
              <ProjectCaseStudy key={study.id} lang={lang} study={study} index={index} />
            ))}
          </div>
        </section>
      )}

      <div className="max-w-[76ch] space-y-10">
        {project.sections.map((section) => (
          <section key={section.heading.en}>
            <h2 className="section-title mb-5">{t(lang, section.heading)}</h2>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-ink/90">
                  <span aria-hidden className="pt-[0.62rem]">
                    <span className="block h-1 w-1 rounded-full bg-accent-dim" />
                  </span>
                  <span>{t(lang, item)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {(project.image || project.gallery?.length) && (
        <section className="mt-16 border-t border-line/60 pt-8">
          <h2 className="section-title mb-6">{t(lang, ui.sections.gallery)}</h2>
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
            {project.image && (
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-line">
                <Image
                  src={withBase(project.image)}
                  alt={t(lang, project.title)}
                  fill
                  sizes="(max-width: 639px) 100vw, 520px"
                  className="object-cover object-top"
                />
              </div>
            )}
            {project.gallery?.filter((shot) => shot.src !== project.image).map((shot) => (
              <figure key={shot.src}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-line">
                  <Image
                    src={withBase(shot.src)}
                    alt={t(lang, shot.caption)}
                    fill
                    sizes="(max-width: 639px) 100vw, 520px"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-muted">
                  {t(lang, shot.caption)}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <nav aria-label={t(lang, labels.moreWork)} className="mt-16 border-t border-line/60 pt-8">
        <h2 className="section-title mb-5">{t(lang, labels.moreWork)}</h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-4">
          {relatedProjects.map((p) => (
            <li key={p.slug}>
              <Link href={langPath(lang, `/work/${p.slug}/`)} className="text-muted transition-colors hover:text-accent">
                {t(lang, p.title)} <span aria-hidden className="ml-2">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Lang } from '@/content/resume'
import { projects, ui } from '@/content/resume'
import { t, langHome } from '@/lib/i18n'
import { seedGradient } from '@/lib/format'

export default function WorkDetailPage({ lang, slug }: { lang: Lang; slug: string }) {
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()
  const g = seedGradient(project.slug)

  return (
    <main className="mx-auto w-full max-w-[1120px] px-5 pt-28 pb-24 sm:px-8">
      {/* 스크롤을 따라오지 않고 상단 내비 바로 아래에 붙어 있는 돌아가기 */}
      <div className="sticky top-[4.5rem] z-40">
        <Link
          href={`${langHome(lang)}#work`}
          className="mono-label inline-flex items-center gap-2 rounded-full border border-line bg-surface/85 px-3.5 py-1.5 text-muted shadow-sm backdrop-blur-md transition-colors hover:border-accent-dim hover:text-ink"
        >
          ← {t(lang, ui.actions.back)}
        </Link>
      </div>

      <header className="mt-8 mb-10">
        <div className="mono-label mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-muted">
          <span>{t(lang, project.company)}</span>
          <span>{t(lang, project.period)}</span>
        </div>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold tracking-tight text-ink">
          {t(lang, project.title)}
        </h1>
        <p className="mt-5 max-w-[68ch] text-lg leading-relaxed text-muted">
          {t(lang, project.summary)}
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="tag"
            >
              {s}
            </span>
          ))}
        </div>
      </header>

      <div className="relative mb-14 aspect-[16/9] overflow-hidden rounded-xl border border-line sm:aspect-[21/9]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${t(lang, project.title)} screenshot`}
            fill
            sizes="(max-width: 1120px) 100vw, 1120px"
            className="object-cover object-top"
            priority
          />
        ) : (
          <div
            aria-hidden
            className="placeholder-noise relative h-full w-full"
            style={{ background: `linear-gradient(${g.angle}deg, ${g.from}, ${g.to})` }}
          >
            <span className="mono-label absolute bottom-5 left-6 tracking-[0.25em] text-ink/40 uppercase">
              {project.slug}
            </span>
          </div>
        )}
      </div>

      <div className="max-w-[68ch] space-y-12">
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

      {project.gallery && project.gallery.length > 0 && (
        <section className="mt-16">
          <h2 className="section-title mb-6">{t(lang, ui.sections.gallery)}</h2>
          <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2">
            {project.gallery.map((shot) => (
              <figure key={shot.src}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-line">
                  <Image
                    src={shot.src}
                    alt={t(lang, shot.caption)}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
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
    </main>
  )
}

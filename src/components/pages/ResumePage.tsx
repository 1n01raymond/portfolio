import type { Lang } from '@/content/resume'
import {
  contact,
  education,
  experience,
  languages,
  misc,
  profile,
  projects,
  skills,
  ui,
} from '@/content/resume'
import { t } from '@/lib/i18n'
import { formatDuration, formatPeriod } from '@/lib/format'
import SurfaceLight from '@/components/SurfaceLight'
import PrintButton from '@/components/PrintButton'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mono-label mb-6 border-b border-line pb-2 text-accent uppercase">{children}</h2>
  )
}

export default function ResumePage({ lang }: { lang: Lang }) {
  return (
    <main className="mx-auto w-full max-w-[860px] px-5 pt-28 pb-24 print:pt-0 print:pb-0 sm:px-8">
      <SurfaceLight />

      {/* ---------------------------------------------- 헤더 */}
      <header className="avoid-break mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-ink">
            {t(lang, profile.name)}
          </h1>
          <p className="mt-2 text-lg text-muted">{t(lang, profile.role)}</p>
          <div className="mono-label mt-5 flex flex-col gap-1 text-[0.78rem] text-muted">
            <a href={`mailto:${contact.email}`} className="hover:text-accent">
              {contact.email}
            </a>
            <span>{t(lang, contact.phone)}</span>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="print-href hover:text-accent"
            >
              github.com/1n01raymond
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="print-href hover:text-accent"
            >
              linkedin.com/in/1n01raymond
            </a>
          </div>
        </div>
        <PrintButton lang={lang} />
      </header>

      {/* ---------------------------------------------- 요약 */}
      <section className="avoid-break mb-14">
        <p className="max-w-[68ch] leading-relaxed text-ink/90">{t(lang, profile.intro)}</p>
      </section>

      {/* ---------------------------------------------- 경력 */}
      <section className="mb-14">
        <SectionHeading>{t(lang, ui.sections.experience)}</SectionHeading>
        <ol className="space-y-6">
          {experience.map((job) => (
            <li key={job.slug} className="avoid-break grid gap-1 sm:grid-cols-[190px_1fr] sm:gap-6">
              <span className="mono-label pt-0.5 text-[0.78rem] text-muted">
                {formatPeriod(job.start, job.end, lang)}
                <span className="mt-0.5 block text-[0.72rem] text-muted/70">
                  {formatDuration(job.start, job.end, lang)}
                </span>
              </span>
              <div>
                <p className="font-medium text-ink">
                  {t(lang, job.company)}
                  <span className="mx-2 text-line" aria-hidden>
                    /
                  </span>
                  <span className="font-normal text-muted">{t(lang, job.title)}</span>
                </p>
                <p className="mono-label mt-0.5 text-[0.75rem] text-muted/80">{t(lang, job.team)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------------------------------------- 프로젝트 요약 */}
      <section className="mb-14">
        <SectionHeading>{t(lang, ui.sections.work)}</SectionHeading>
        <div className="space-y-10">
          {projects.map((p) => (
            <article key={p.slug} className="avoid-break">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium text-ink">
                  {t(lang, p.title)}
                  <span className="mx-2 text-line" aria-hidden>
                    /
                  </span>
                  <span className="font-normal text-muted">{t(lang, p.company)}</span>
                </h3>
                <span className="mono-label text-[0.75rem] text-muted">{t(lang, p.period)}</span>
              </div>
              <p className="print-hidden mt-1.5 max-w-[68ch] text-sm leading-relaxed text-muted">
                {t(lang, p.summary)}
              </p>
              <ul className="print-clamp mt-3 space-y-1.5">
                {p.sections
                  .flatMap((s) => s.items)
                  .slice(0, 5)
                  .map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink/85">
                      <span aria-hidden className="pt-[0.55rem]">
                        <span className="block h-[3px] w-[3px] rounded-full bg-accent-dim" />
                      </span>
                      <span>{t(lang, item)}</span>
                    </li>
                  ))}
              </ul>
              <p className="mono-label mt-2.5 text-[0.72rem] text-muted/80">
                {p.stack.join(' · ')}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------- 스킬 */}
      <section className="mb-14">
        <SectionHeading>{t(lang, ui.sections.skills)}</SectionHeading>
        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.heading.en} className="avoid-break">
              <h3 className="mono-label mb-2 text-[0.75rem] text-muted uppercase">
                {t(lang, group.heading)}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.label} className="grid gap-1 text-sm sm:grid-cols-[190px_1fr] sm:gap-6">
                    <span className="mono-label text-[0.78rem] text-ink">{item.label}</span>
                    <span className="leading-relaxed text-muted">{t(lang, item.detail)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------- 학력 · 외국어 · 기타 */}
      <section className="avoid-break mb-14">
        <SectionHeading>{t(lang, ui.sections.education)}</SectionHeading>
        <ol className="space-y-3">
          {education.map((e) => (
            <li key={e.school.en} className="grid gap-1 text-sm sm:grid-cols-[190px_1fr] sm:gap-6">
              <span className="mono-label pt-0.5 text-[0.78rem] text-muted">
                {t(lang, e.period)}
              </span>
              <div>
                <p className="text-ink">{t(lang, e.school)}</p>
                {t(lang, e.detail) && <p className="text-muted">{t(lang, e.detail)}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="avoid-break mb-14">
        <SectionHeading>{t(lang, ui.sections.languages)}</SectionHeading>
        <ul className="space-y-2">
          {languages.map((l) => (
            <li key={l.label.en} className="grid gap-1 text-sm sm:grid-cols-[190px_1fr] sm:gap-6">
              <span className="mono-label pt-0.5 text-[0.78rem] text-muted">{t(lang, l.label)}</span>
              <span className="text-ink">{t(lang, l.detail)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="avoid-break">
        <SectionHeading>{t(lang, ui.sections.misc)}</SectionHeading>
        <ul className="space-y-2">
          {misc.map((m) => (
            <li key={m.label.en} className="grid gap-1 text-sm sm:grid-cols-[190px_1fr] sm:gap-6">
              <span className="mono-label pt-0.5 text-[0.78rem] text-muted">{t(lang, m.detail)}</span>
              <span className="text-ink">{t(lang, m.label)}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

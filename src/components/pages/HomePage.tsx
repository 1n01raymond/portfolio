import Link from 'next/link'
import Image from 'next/image'
import type { Lang } from '@/content/resume'
import {
  archive,
  contact,
  experience,
  profile,
  projects,
  skills,
  ui,
} from '@/content/resume'
import { t, langPath } from '@/lib/i18n'
import { formatDuration, formatPeriod } from '@/lib/format'
import { withBase } from '@/lib/base-path'
import SideNav from '@/components/SideNav'
import { GitHubMark, LinkedInMark } from '@/components/BrandIcon'
import RichText from '@/components/RichText'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="section-title mb-6 flex items-center gap-4 after:h-px after:flex-1 after:bg-line/50">{children}</h2>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="tag">{children}</span>
  )
}

export default function HomePage({ lang }: { lang: Lang }) {
  const selectedProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
  /** 복무 구간 레일의 끝 — 라벨을 여기 아래에 답니다. */
  const serviceEnd = experience.reduce((last, job, i) => (job.service ? i : last), -1)

  const navItems = [
    { id: 'about', label: t(lang, ui.sections.about) },
    { id: 'work', label: t(lang, ui.sections.work) },
    { id: 'experience', label: t(lang, ui.sections.experience) },
    { id: 'skills', label: t(lang, ui.sections.skills) },
    { id: 'archive', label: t(lang, ui.sections.archive) },
  ]

  return (
    <div className="portfolio-home mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:px-14">
      {/* ------------------------------------------------ 좌측 고정 패널 */}
      <header className="pt-24 pb-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-[800px] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-[clamp(2.25rem,4.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.025em] text-ink">
            {t(lang, profile.name)}
          </h1>
          <p className="mt-3 text-xl font-medium tracking-tight text-ink">
            {t(lang, profile.role)}
          </p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-accent before:h-px before:w-5 before:bg-accent/70">
            {t(lang, profile.specialty)}
          </p>

          <SideNav items={navItems} />
        </div>

        {/* 사이트에서 유일한 소셜 링크 자리 — 푸터에는 두지 않습니다 */}
        <div className="mt-10 lg:mt-0">
          <ul className="mono-label flex flex-wrap items-center gap-x-5 gap-y-3 text-muted">
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="block transition-colors hover:text-accent"
              >
                <GitHubMark className="h-[1.35rem] w-[1.35rem]" />
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="block transition-colors hover:text-accent"
              >
                <LinkedInMark className="h-[1.35rem] w-[1.35rem]" />
              </a>
            </li>
            <li aria-hidden className="h-4 w-px bg-line" />
            <li>
              <Link
                href={langPath(lang, '/resume/')}
                className="transition-colors hover:text-accent"
              >
                {t(lang, ui.nav.resume)} →
              </Link>
            </li>
          </ul>
          <a
            href={`mailto:${contact.email}`}
            className="mono-label mt-4 inline-block py-1 text-accent underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
        </div>
      </header>

      {/* ------------------------------------------------ 우측 스크롤 영역 */}
      <main className="min-w-0 pb-24 break-keep lg:py-24">
        {/* ---------------------------------------------- About */}
        <section id="about" className="scroll-mt-24">
          <SectionTitle>{t(lang, ui.sections.about)}</SectionTitle>
          <div className="space-y-4 leading-relaxed text-muted">
            {profile.about.map((para, i) => (
              <p key={i} className={i === 0 ? 'mb-5 text-lg leading-relaxed font-medium tracking-tight text-ink' : undefined}>
                <RichText lang={lang} text={t(lang, para)} />
              </p>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------- Projects */}
        <section id="work" className="mt-14 scroll-mt-24">
          <SectionTitle>{t(lang, ui.projectLabels.selectedWork)}</SectionTitle>
          <ul className="divide-y divide-line/50">
            {selectedProjects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={langPath(lang, `/work/${p.slug}/`)}
                  className="group -mx-3 grid gap-x-5 gap-y-4 rounded-lg px-3 py-6 transition-colors hover:bg-surface/70 focus-visible:bg-surface/70 sm:grid-cols-[144px_minmax(0,1fr)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded border border-line">
                    {p.image && (
                      <Image
                        src={withBase(p.image)}
                        alt=""
                        fill
                        sizes="(max-width: 639px) calc(100vw - 48px), 144px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <div>
                    <p className="flex flex-wrap items-baseline gap-x-2 text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                      {t(lang, p.title)}
                      <span className="text-sm font-normal text-muted">{t(lang, p.company)}</span>
                      <span aria-hidden className="ml-auto text-base font-normal text-accent transition-transform group-hover:translate-x-1">↗</span>
                    </p>
                    {p.period && <p className="mono-label mt-1 text-muted">
                      {t(lang, p.period)}
                    </p>}
                    {p.periodNote && (
                      <p className="mono-label mt-1 text-muted">{t(lang, p.periodNote)}</p>
                    )}
                    <p className="mt-2 leading-relaxed text-muted">{t(lang, p.summary)}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 5).map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                      {p.stack.length > 5 && (
                        <span className="mono-label px-1 py-0.5 text-[0.7rem] text-muted">
                          +{p.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="section-title mt-10 mb-3">{t(lang, ui.projectLabels.otherWork)}</h3>
          <ul className="divide-y divide-line/50">
            {otherProjects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={langPath(lang, `/work/${p.slug}/`)}
                  className="group block py-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                      {t(lang, p.title)}
                    </h4>
                    <span aria-hidden className="text-muted transition-transform group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mono-label mt-1 text-muted">
                    {t(lang, p.company)}{p.period && <> · {t(lang, p.period)}</>}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(lang, p.summary)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------- Experience */}
        <section id="experience" className="mt-24 scroll-mt-24">
          <SectionTitle>{t(lang, ui.sections.experience)}</SectionTitle>
          {/* 여긴 이력의 뼈대만 — 프로젝트 상세는 Projects 한 곳에서만 엽니다 */}
          <ol className="-mx-3">
            {experience.map((job) => (
              <li
                key={job.slug}
                /* 레일은 음수 마진 쪽 여백에 그려서 날짜 열이 밀리지 않게 합니다 */
                className={job.service ? '-ml-0.5 border-l-2 border-accent/40' : undefined}
              >
                <div className="grid gap-x-6 gap-y-1 p-3 sm:grid-cols-[150px_1fr]">
                  <span className="mono-label pt-1 text-[0.72rem] whitespace-nowrap text-muted">
                    {formatPeriod(job.start, job.end, lang)}
                    <span className="mt-0.5 block text-muted">
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
                      {job.scope && (
                        <span className="mono-label ml-2 inline-block text-[0.68rem] font-normal text-dim">
                          {t(lang, job.scope)}
                        </span>
                      )}
                    </p>
                    <p className="mono-label mt-1 text-[0.72rem] text-muted">
                      {t(lang, job.team)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          {serviceEnd >= 0 && (
            <div className="-ml-3.5 border-l-2 border-accent/40 pt-2.5 pb-1 pl-3">
              <span className="tag">{t(lang, ui.experienceNote)}</span>
            </div>
          )}
        </section>

        {/* ---------------------------------------------- Skills */}
        <section id="skills" className="mt-24 scroll-mt-24">
          <SectionTitle>{t(lang, ui.sections.skills)}</SectionTitle>
          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.heading.en}>
                <h3 className="mono-label mb-2 text-[0.72rem] font-semibold tracking-[0.12em] text-accent uppercase">
                  {t(lang, group.heading)}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="grid gap-x-4 gap-y-0.5 text-sm sm:grid-cols-[152px_1fr]"
                    >
                      <span className="mono-label text-[0.75rem] text-ink">{item.label}</span>
                      <span className="leading-relaxed text-muted">{t(lang, item.detail)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------- Archive */}
        <section id="archive" className="mt-24 scroll-mt-24">
          <SectionTitle>{t(lang, ui.sections.archive)}</SectionTitle>
          <p className="mb-8 max-w-[52ch] text-sm leading-relaxed text-muted">
            {t(lang, ui.archiveNote)}
          </p>
          <ul className="-mx-3">
            {archive.map((item) => (
              <li key={item.slug}>
                <div className="grid grid-cols-[72px_1fr] gap-x-4 gap-y-2 rounded-lg p-3 sm:grid-cols-[96px_1fr] sm:gap-x-6">
                  <div className="relative aspect-[16/10] overflow-hidden rounded border border-line/70 bg-surface">
                    <Image
                      src={withBase(item.image)}
                      alt=""
                      fill
                      sizes="(max-width: 639px) 72px, 96px"
                      className="object-cover object-center opacity-80"
                    />
                  </div>
                  <div>
                    <p className="text-ink/90">
                      {t(lang, item.name)}
                      <span className="mono-label ml-2 text-[0.72rem] text-muted">
                        {item.year}
                      </span>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{t(lang, item.detail)}</p>
                    {item.award && (
                      <p className="mono-label mt-1.5 text-[0.7rem] text-accent">
                        {t(lang, item.award)}
                      </p>
                    )}
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {item.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------- 마무리 */}
        <section id="contact" className="mt-24 scroll-mt-24 border-t border-line/60 pt-10">
          <p className="max-w-[40ch] text-xl leading-snug font-medium tracking-tight text-ink sm:text-2xl">
            {t(lang, ui.closing)}
          </p>
          <p className="mt-3 text-muted">{t(lang, ui.closingNote)}</p>
          <div className="mono-label mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-accent">
            <a
              href={`mailto:${contact.email}`}
              className="transition-opacity hover:opacity-80"
            >
              {contact.email}
            </a>
            <a href={contact.phoneHref} className="transition-opacity hover:opacity-80">
              {t(lang, contact.phone)}
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import type { Lang } from '@/content/resume'
import {
  archive,
  contact,
  experience,
  howIWork,
  profile,
  projects,
  skills,
  ui,
} from '@/content/resume'
import { t, langPath } from '@/lib/i18n'
import { formatDuration, formatPeriod } from '@/lib/format'
import SideNav from '@/components/SideNav'
import { GitHubMark, LinkedInMark } from '@/components/BrandIcon'
import Spotlight from '@/components/Spotlight'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mono-label mb-8 tracking-[0.18em] text-accent uppercase">{children}</h2>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono-label rounded border border-line bg-surface-2/70 px-2 py-0.5 text-[0.7rem] text-muted">
      {children}
    </span>
  )
}

export default function HomePage({ lang }: { lang: Lang }) {
  const navItems = [
    { id: 'about', label: t(lang, ui.sections.about) },
    { id: 'experience', label: t(lang, ui.sections.experience) },
    { id: 'work', label: t(lang, ui.sections.work) },
    { id: 'archive', label: t(lang, ui.sections.archive) },
  ]

  return (
    <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:flex lg:justify-between lg:gap-16 lg:px-14">
      <Spotlight />

      {/* ------------------------------------------------ 좌측 고정 패널 */}
      <header className="pt-28 pb-10 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-28">
        <div>
          <h1 className="text-[clamp(2.25rem,4.4vw,3.25rem)] leading-[1.1] font-semibold tracking-tight text-ink">
            {t(lang, profile.name)}
          </h1>
          <p className="mt-3 text-lg font-medium text-ink/85 sm:text-xl">
            {t(lang, profile.role)}
          </p>
          <p className="mt-5 max-w-[34ch] leading-relaxed text-muted">{t(lang, profile.tagline)}</p>

          <SideNav items={navItems} />
        </div>

        {/* 사이트에서 유일한 소셜 링크 자리 — 푸터에는 두지 않습니다 */}
        <ul className="mono-label mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-muted lg:mt-0">
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
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">
              Email
            </a>
          </li>
          <li>
            <Link
              href={langPath(lang, '/resume/')}
              className="transition-colors hover:text-accent"
            >
              {t(lang, ui.nav.resume)} →
            </Link>
          </li>
        </ul>
      </header>

      {/* ------------------------------------------------ 우측 스크롤 영역 */}
      <main className="pb-24 lg:w-[58%] lg:py-28">
        {/* ---------------------------------------------- About */}
        <section id="about" className="scroll-mt-24">
          <SectionTitle>{t(lang, ui.sections.about)}</SectionTitle>
          <div className="space-y-4 leading-relaxed text-muted">
            <p>{t(lang, profile.intro)}</p>
            <p>
              {t(lang, howIWork[0])} {t(lang, howIWork[1])}
            </p>
            <p>
              {t(lang, howIWork[2])} {t(lang, howIWork[3])}
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {skills.map((group) => (
              <div key={group.heading.en}>
                <h3 className="mono-label mb-2 text-[0.72rem] tracking-[0.16em] text-accent-dim uppercase">
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

        {/* ---------------------------------------------- Experience */}
        <section id="experience" className="mt-24 scroll-mt-24">
          <SectionTitle>{t(lang, ui.sections.experience)}</SectionTitle>
          {/* 여긴 이력의 뼈대만 — 프로젝트 상세는 아래 Selected Work 한 곳에서만 엽니다 */}
          <ol className="dim-list -mx-3">
            {experience.map((job) => (
              <li key={job.slug}>
                <div className="grid gap-x-6 gap-y-1 p-3 sm:grid-cols-[150px_1fr]">
                  <span className="mono-label pt-1 text-[0.72rem] whitespace-nowrap text-muted">
                    {formatPeriod(job.start, job.end, lang)}
                    <span className="mt-0.5 block text-muted/60">
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
                    <p className="mono-label mt-1 text-[0.72rem] text-muted/80">
                      {t(lang, job.team)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------------------------------------------- Selected Work */}
        <section id="work" className="mt-24 scroll-mt-24">
          <SectionTitle>{t(lang, ui.sections.work)}</SectionTitle>
          <ul className="dim-list -mx-3">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={langPath(lang, `/work/${p.slug}/`)}
                  className="group grid gap-x-6 gap-y-3 rounded-lg p-3 transition-colors hover:bg-surface/80 sm:grid-cols-[132px_1fr]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded border border-line">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="140px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-ink transition-colors group-hover:text-accent">
                      {t(lang, p.title)}
                      <span className="mx-2 text-line" aria-hidden>
                        /
                      </span>
                      <span className="font-normal text-muted">{t(lang, p.company)}</span>
                    </p>
                    <p className="mono-label mt-1 text-[0.72rem] text-muted/70">
                      {t(lang, p.period)}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t(lang, p.summary)}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 5).map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                      {p.stack.length > 5 && (
                        <span className="mono-label px-1 py-0.5 text-[0.7rem] text-muted/60">
                          +{p.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------- Archive */}
        <section id="archive" className="mt-24 scroll-mt-24">
          <SectionTitle>{t(lang, ui.sections.archive)}</SectionTitle>
          <p className="mb-8 max-w-[52ch] text-sm leading-relaxed text-muted">
            {t(lang, ui.archiveNote)}
          </p>
          <ul className="dim-list -mx-3">
            {archive.map((item) => (
              <li key={item.slug}>
                <div className="grid gap-x-6 gap-y-2 rounded-lg p-3 sm:grid-cols-[132px_1fr]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded border border-line/70 bg-surface">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="140px"
                      className="object-cover object-center opacity-80"
                    />
                  </div>
                  <div>
                    <p className="text-ink/90">
                      {t(lang, item.name)}
                      <span className="mono-label ml-2 text-[0.72rem] text-muted/70">
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
          <a
            href={`mailto:${contact.email}`}
            className="mono-label mt-5 inline-block text-accent transition-opacity hover:opacity-80"
          >
            {contact.email}
          </a>
        </section>
      </main>
    </div>
  )
}

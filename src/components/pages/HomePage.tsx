import type { Lang } from '@/content/resume'
import { contact, howIWork, profile, projects, skills, ui } from '@/content/resume'
import { t } from '@/lib/i18n'
import ParticleField from '@/components/ParticleField'
import WorkCard from '@/components/WorkCard'

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <main>
      {/* ------------------------------------------------ Hero */}
      <section className="relative flex min-h-[68svh] flex-col justify-center overflow-hidden">
        <ParticleField />
        {/* 헤드라인 가독성 스크림 — 파티클 위, 텍스트 아래 */}
        <div
          aria-hidden
          className="absolute inset-0 z-[5]"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 28% 45%, rgba(10,11,13,0.6), transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 pt-24 pb-16 sm:px-8">
          <p className="mono-label mb-5 text-accent">
            {t(lang, profile.role)}
            <span className="text-muted"> · since {profile.since}</span>
          </p>
          <h1 className="max-w-[16ch] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] font-semibold tracking-tight text-ink">
            {t(lang, profile.name)}
          </h1>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-muted sm:text-xl">
            {t(lang, profile.tagline)}
          </p>
        </div>
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-bg"
        />
      </section>

      {/* ------------------------------------------------ Selected Work */}
      <section id="work" className="mx-auto w-full max-w-[1120px] scroll-mt-20 px-5 py-[clamp(6rem,12vh,10rem)] sm:px-8">
        <h2 className="mono-label mb-10 text-accent uppercase">{t(lang, ui.sections.work)}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <WorkCard key={p.slug} lang={lang} project={p} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ Skills */}
      <section className="border-t border-line/60">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-[clamp(6rem,12vh,10rem)] sm:px-8">
          <h2 className="mono-label mb-10 text-accent uppercase">{t(lang, ui.sections.skills)}</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {skills.map((group) => (
              <div key={group.heading.en}>
                <h3 className="mono-label mb-5 text-muted uppercase">{t(lang, group.heading)}</h3>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.label} className="rounded-lg border border-line bg-surface p-4">
                      <p className="mono-label mb-1 text-ink">{item.label}</p>
                      <p className="text-sm leading-relaxed text-muted">{t(lang, item.detail)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ How I Work */}
      <section className="border-t border-line/60">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-[clamp(6rem,12vh,10rem)] sm:px-8">
          <h2 className="mono-label mb-10 text-accent uppercase">{t(lang, ui.sections.howIWork)}</h2>
          <div className="grid gap-x-14 gap-y-8 md:grid-cols-2">
            {howIWork.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="mono-label pt-1 text-accent-dim">0{i + 1}</span>
                <p className="max-w-[52ch] leading-relaxed text-ink/90">{t(lang, item)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Contact */}
      <section id="contact" className="border-t border-line/60">
        <div className="mx-auto w-full max-w-[1120px] scroll-mt-20 px-5 py-[clamp(6rem,12vh,10rem)] sm:px-8">
          <h2 className="mono-label mb-10 text-accent uppercase">{t(lang, ui.sections.contact)}</h2>
          <p className="mb-8 max-w-[46ch] text-2xl leading-snug font-medium tracking-tight text-ink sm:text-3xl">
            {lang === 'ko'
              ? '새로운 팀과 문제를 찾고 있습니다. 편하게 연락 주세요.'
              : 'Open to new teams and new problems. Get in touch.'}
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="mono-label w-fit text-lg text-accent transition-opacity hover:opacity-80"
            >
              {contact.email}
            </a>
            <div className="mono-label flex gap-6 text-muted">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-ink"
              >
                GitHub ↗
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-ink"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

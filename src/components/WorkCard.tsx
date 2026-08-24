import Link from 'next/link'
import Image from 'next/image'
import type { Lang, Project } from '@/content/resume'
import { ui } from '@/content/resume'
import { t, langPath } from '@/lib/i18n'
import { seedGradient } from '@/lib/format'

export default function WorkCard({ lang, project }: { lang: Lang; project: Project }) {
  const g = seedGradient(project.slug)

  return (
    <Link
      href={langPath(lang, `/work/${project.slug}/`)}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent-dim"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${t(lang, project.title)} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            aria-hidden
            className="placeholder-noise relative h-full w-full"
            style={{
              background: `linear-gradient(${g.angle}deg, ${g.from}, ${g.to})`,
            }}
          >
            <span className="mono-label absolute bottom-4 left-5 text-[0.75rem] tracking-[0.25em] text-ink/40 uppercase">
              {project.slug}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="mono-label flex items-baseline justify-between gap-4 text-muted">
          <span>{t(lang, project.company)}</span>
          <span className="shrink-0">{t(lang, project.period)}</span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          {t(lang, project.title)}
        </h3>
        <p className="text-[0.95rem] leading-relaxed text-muted">{t(lang, project.summary)}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stack.slice(0, 5).map((s) => (
            <span
              key={s}
              className="mono-label rounded border border-line bg-surface-2 px-2 py-0.5 text-[0.72rem] text-muted"
            >
              {s}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="mono-label px-1 py-0.5 text-[0.72rem] text-muted/60">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
        <span className="mono-label pt-1 text-[0.75rem] text-accent opacity-0 transition-opacity group-hover:opacity-100">
          {t(lang, ui.actions.viewProject)} →
        </span>
      </div>
    </Link>
  )
}

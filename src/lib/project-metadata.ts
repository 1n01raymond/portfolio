import type { Metadata } from 'next'
import type { Lang, Project } from '@/content/resume'
import { site } from '@/config/site'
import { withBase } from '@/lib/base-path'
import { langPath } from '@/lib/i18n'

export function projectMetadata(project: Project, lang: Lang): Metadata {
  const title = `${project.title[lang]} — ${site.title[lang]}`
  const description = project.summary[lang]
  const path = `/work/${project.slug}/`
  const absoluteUrl = (path: string) => new URL(withBase(path), site.url).toString()
  const url = absoluteUrl(langPath(lang, path))
  const images = project.image
    ? [{
        url: absoluteUrl(project.image),
        alt: lang === 'ko' ? `${project.title.ko} 대표 이미지` : `${project.title.en} project image`,
      }]
    : []

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ko: absoluteUrl(langPath('ko', path)),
        en: absoluteUrl(langPath('en', path)),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.title[lang],
      type: 'website',
      locale: lang === 'ko' ? 'ko_KR' : 'en_US',
      alternateLocale: lang === 'ko' ? ['en_US'] : ['ko_KR'],
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  }
}

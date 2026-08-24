import type { Metadata } from 'next'
import WorkDetailPage from '@/components/pages/WorkDetailPage'
import { projects } from '@/content/resume'
import { site } from '@/config/site'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title.ko} — ${site.title.ko}`,
    description: project.summary.ko,
    alternates: {
      canonical: `/work/${slug}/`,
      languages: { ko: `/work/${slug}/`, en: `/en/work/${slug}/` },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <WorkDetailPage lang="ko" slug={slug} />
}

import type { Metadata } from 'next'
import WorkDetailPage from '@/components/pages/WorkDetailPage'
import { projects } from '@/content/resume'
import { projectMetadata } from '@/lib/project-metadata'

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
  return projectMetadata(project, 'en')
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <WorkDetailPage lang="en" slug={slug} />
}

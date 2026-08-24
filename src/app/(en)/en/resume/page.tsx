import type { Metadata } from 'next'
import ResumePage from '@/components/pages/ResumePage'
import { site } from '@/config/site'

export const metadata: Metadata = {
  title: `Resume — ${site.title.en}`,
  description: site.description.en,
  alternates: {
    canonical: '/en/resume/',
    languages: { ko: '/resume/', en: '/en/resume/' },
  },
}

export default function Page() {
  return <ResumePage lang="en" />
}

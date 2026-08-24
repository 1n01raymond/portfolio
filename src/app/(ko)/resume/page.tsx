import type { Metadata } from 'next'
import ResumePage from '@/components/pages/ResumePage'
import { site } from '@/config/site'

export const metadata: Metadata = {
  title: `이력서 — ${site.title.ko}`,
  description: site.description.ko,
  alternates: {
    canonical: '/resume/',
    languages: { ko: '/resume/', en: '/en/resume/' },
  },
}

export default function Page() {
  return <ResumePage lang="ko" />
}

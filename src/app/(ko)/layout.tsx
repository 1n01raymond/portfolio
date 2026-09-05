import type { Metadata } from 'next'
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import '../globals.css'
import { fontVariables } from '../fonts'
import { site } from '@/config/site'
import { withBase } from '@/lib/base-path'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(withBase('/'), site.url),
  title: site.title.ko,
  description: site.description.ko,
  alternates: {
    canonical: '/',
    languages: { ko: '/', en: '/en/' },
  },
  openGraph: {
    title: site.title.ko,
    description: site.description.ko,
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={fontVariables} data-scroll-behavior="smooth">
      <body>
        <Nav lang="ko" />
        {children}
        <Footer lang="ko" />
      </body>
    </html>
  )
}

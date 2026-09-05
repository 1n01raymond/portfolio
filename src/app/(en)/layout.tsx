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
  title: site.title.en,
  description: site.description.en,
  alternates: {
    canonical: '/en/',
    languages: { ko: '/', en: '/en/' },
  },
  openGraph: {
    title: site.title.en,
    description: site.description.en,
    type: 'website',
    locale: 'en_US',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} data-scroll-behavior="smooth">
      <body>
        <Nav lang="en" />
        {children}
        <Footer lang="en" />
      </body>
    </html>
  )
}

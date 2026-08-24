import { Inter_Tight, JetBrains_Mono, Nanum_Gothic } from 'next/font/google'

export const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

/**
 * 한글 본문. 라틴 문자는 Inter Tight 가 먼저 잡으므로 한글에만 적용됩니다.
 * next/font 가 아는 subset 은 'latin' 뿐이지만, 구글이 내려주는 CSS 에
 * 한글 unicode-range 조각이 모두 들어 있어 한글도 함께 셀프호스팅됩니다.
 */
export const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-nanum-gothic',
  display: 'swap',
})

export const fontVariables = `${interTight.variable} ${jetbrainsMono.variable} ${nanumGothic.variable}`

import { Inter, Noto_Sans_KR } from 'next/font/google'

/** 라틴 본문 겸 제목. 사이트 전체가 이 한 벌로 갑니다. */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

/**
 * 한글 본문. 라틴 문자는 Inter 가 먼저 잡으므로 한글에만 적용됩니다.
 * Inter 와 골격·자폭이 맞는 모던 고딕이라 섞여도 티가 나지 않습니다.
 * next/font 가 아는 subset 은 'latin' 뿐이지만, 구글이 내려주는 CSS 에
 * 한글 unicode-range 조각이 모두 들어 있어 한글도 함께 셀프호스팅됩니다.
 */
export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

export const fontVariables = `${inter.variable} ${notoSansKr.variable}`

/**
 * 웹폰트. 라틴은 Inter, 한글은 Noto Sans KR 이고 globals.css 의 --font-sans 가
 * 이 순서로 씁니다. Noto Sans KR 은 Inter 와 골격·자폭이 맞는 모던 고딕이라
 * 섞여도 티가 나지 않습니다.
 *
 * next/font/google 대신 Fontsource 의 정적 굵기 파일을 씁니다. 구글은 두 폰트
 * 모두 굵기와 관계없이 가변 폰트 한 벌을 내려주는데, Chrome 이 가변 폰트를
 * PDF 에 Type3 윤곽선으로 넣어 이력서 PDF 의 글자가 뭉개지고 자간이 흔들렸습니다.
 * 정적 파일은 일반 TrueType 으로 들어갑니다.
 *
 * 사이트에서 쓰는 굵기만 불러옵니다: Inter 400·500·600·700, Noto Sans KR 400·500·700.
 */
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/noto-sans-kr/400.css'
import '@fontsource/noto-sans-kr/500.css'
import '@fontsource/noto-sans-kr/700.css'

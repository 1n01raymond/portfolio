/**
 * 도메인·OG·메타를 한 곳에 모읍니다. 도메인이 바뀌면 이 파일만 고치세요.
 */
export const site = {
  // TODO: Vercel Import 후 실제 배포 URL로 교체
  url: 'https://portfolio-1n01raymond.vercel.app',
  title: {
    ko: '최순형 — Unity 프로그래머',
    en: 'Soonhyung Choi — Unity Programmer',
  },
  description: {
    ko: '동시에 100명이 붙는 모드도, 그 아래 서버와 인프라도 같은 손으로 만드는 Unity 프로그래머.',
    en: 'Unity programmer. The mode that holds 100 players at once, and the server and infrastructure under it, come from the same pair of hands.',
  },
} as const

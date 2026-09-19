/**
 * 도메인·OG·메타를 한 곳에 모읍니다. 도메인이 바뀌면 이 파일만 고치세요.
 */
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL
const defaultOrigin = process.env.DEPLOY_TARGET === 'gh-pages'
  ? 'https://1n01raymond.github.io'
  : vercelDomain
    ? `https://${vercelDomain}`
    : 'http://localhost:3000'

export const site = {
  // 직접 지정하는 값은 경로를 제외한 origin입니다. basePath는 별도로 적용합니다.
  url: process.env.NEXT_PUBLIC_SITE_URL || defaultOrigin,
  title: {
    ko: '최순형 — Software Engineer',
    en: 'Soonhyung Choi — Software Engineer',
  },
  description: {
    ko: '소프트웨어 엔지니어 최순형. TypeScript·React 웹 플랫폼과 Unity 클라이언트, WebGL 런타임과 AI 제작 도구를 개발합니다.',
    en: 'Soonhyung Choi, Software Engineer. I build TypeScript and React web platforms, Unity clients, WebGL runtimes and AI authoring tools.',
  },
} as const

# portfolio

최순형(Soonhyung Choi) — Unity 프로그래머 포트폴리오.

Next.js(App Router, 정적 export) + Tailwind CSS v4 + TypeScript.
히어로의 "Drift Field" 파티클은 TypeGPU/WebGPU로 렌더링하고,
WebGPU가 없으면 WebGL2 transform feedback → 정적 CSS 그라디언트로
단계적으로 폴백합니다.

## 구조

| 경로 | 내용 |
|---|---|
| `/` · `/en` | 랜딩 (한국어 / 영어) |
| `/work/<slug>` | 프로젝트 상세 |
| `/resume` | 인쇄용 이력서 (라이트 서피스, A4 2쪽) |
| `/legacy/index.html` | 2019년 이전 버전 (그대로 보존, `v0-timeline` 태그) |

모든 본문 텍스트는 `src/content/resume.ts` 한 파일에서 관리합니다.
파티클 필드는 `src/gpu/`(WGSL·GLSL)와 `src/components/ParticleField.tsx`에 있습니다.

## 명령

```bash
npm run dev     # 개발 서버
npm run build   # 정적 export (out/)
npm run lint
```

GitHub Pages용 서브패스 빌드는 `DEPLOY_TARGET=gh-pages npm run build`
(basePath `/portfolio`).

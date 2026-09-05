# portfolio

최순형(Soonhyung Choi) — Software Engineer · Unity.

Next.js(App Router, 정적 export) + Tailwind CSS v4 + TypeScript.
대표 작업과 기술 사례를 중심으로 구성한 한·영 포트폴리오입니다.

## 구조

| 경로 | 내용 |
|---|---|
| `/` · `/en` | 랜딩 (한국어 / 영어) |
| `/work/<slug>` | 프로젝트 상세 |
| `/resume` | 인쇄용 이력서 (라이트 서피스, A4 2쪽) |
| `/legacy/index.html` | 2019년 이전 버전 (그대로 보존, `v0-timeline` 태그) |

모든 본문 텍스트는 `src/content/resume.ts` 한 파일에서 관리합니다.
`featured`로 홈의 대표 작업을 고르고, `overview`와 `caseStudies`로
역할·기술 사례·개념도를 구성합니다.

## 명령

```bash
npm run dev     # 개발 서버
npm run build   # 정적 export (out/)
npm run lint
```

GitHub Pages용 서브패스 빌드는 `DEPLOY_TARGET=gh-pages npm run build`
(basePath `/portfolio`).

## Vercel 프로젝트 설정

- Application / Framework Preset: **Next.js**
- Root Directory: 저장소 루트 (`./`)
- Build Command, Output Directory, Install Command: 프리셋 기본값 유지 (Override 끄기)
- `DEPLOY_TARGET=gh-pages`는 Vercel에 설정하지 않습니다.

프리셋이 `package.json`의 `build` 명령과 `output: 'export'` 설정을 사용합니다.
Git 연동 시 배포 대상 브랜치에 푸시된 커밋이 배포되며 로컬 변경은 포함되지 않습니다.

## 공유 미리보기 주소

프로젝트 상세는 프로젝트별 제목·설명·대표 이미지로 Open Graph와 Twitter
미리보기를 생성합니다. 주소는 빌드할 때 결정됩니다.

- `NEXT_PUBLIC_SITE_URL`: 직접 지정할 배포 origin (예: `https://example.com`, 경로 제외).
- GitHub Pages 빌드: `https://1n01raymond.github.io`에 `/portfolio` 경로를 적용.
- Vercel 빌드: 시스템 환경변수 `VERCEL_PROJECT_PRODUCTION_URL`의 운영 도메인 사용.
- 배포 설정이 없는 로컬 빌드: `http://localhost:3000` 사용.

Vercel에서 시스템 환경변수 자동 노출을 끈 경우에는 `NEXT_PUBLIC_SITE_URL`을
지정해야 합니다. GitHub Pages에는 `out/`의 정적 빌드 결과물을 배포해야 하며,
저장소 소스를 Jekyll로 게시하는 설정만으로는 앱이 배포되지 않습니다.

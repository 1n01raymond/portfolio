/**
 * 최순형 포트폴리오 — 콘텐츠 단일 소스
 *
 * 사이트의 모든 텍스트는 이 파일에만 있습니다. 컴포넌트에 문자열을 하드코딩하지 마세요.
 * 출처: Notion "👨🏻‍💻 최순형 포트폴리오" (293a13aa-e320-4e1e-ab90-fc868179c85b), 2026-08-24 기준.
 *
 * TODO(verify) 표시는 사용자 확인이 필요한 항목입니다.
 */

export type Lang = 'ko' | 'en'
export type I18n<T = string> = Record<Lang, T>

/* ------------------------------------------------------------------ */
/* 프로필                                                               */
/* ------------------------------------------------------------------ */

export const profile = {
  name: { ko: '최순형', en: 'Soonhyung Choi' } satisfies I18n,

  role: {
    ko: 'Software Engineer',
    en: 'Software Engineer',
  } satisfies I18n,

  specialty: {
    ko: 'Frontend Platform · Unity',
    en: 'Frontend Platform · Unity',
  } satisfies I18n,

  /** 이력서 상단 요약 한 문단. 랜딩의 About 은 아래 `about` 을 씁니다. */
  intro: {
    ko: 'TypeScript·React 기반 웹 플랫폼과 Unity 클라이언트, 서버 및 라이브 운영을 경험한 소프트웨어 엔지니어입니다. 현재 네이버제트에서 WebPETO와 GenWorld R&D를 중심으로 웹 개발을 맡고 있으며, ZEPETO Studio·SDK와 Windows·macOS 출시에도 참여했습니다. 이전에는 킹갓캐슬의 초기 개발부터 출시·운영을 메인 프로그래머로 담당하고, 좀비고등학교의 콘텐츠·서버·운영 시스템을 개발했습니다.',
    en: 'Software engineer experienced in TypeScript and React web platforms, Unity clients, servers and live operations. At NAVER Z, I focus on web development for WebPETO and GenWorld R&D, and have also contributed to ZEPETO Studio and SDK development and the Windows and macOS release. Previously, I was the main programmer for King God Castle from initial development through launch and live operations, and developed content, servers and operations systems for Zombie High.',
  } satisfies I18n,

  /**
   * 랜딩 About — 전문 분야를 짧게 소개한 뒤 실제 업무와 경험으로 이어집니다.
   *
   * `[[이름]]` 은 본문색으로 올라오는 강조, `[[이름|/work/slug/]]` 는 강조 +
   * 프로젝트 상세 링크입니다 (RichText.tsx). 훑는 사람이 회사와 제품 이름만은
   * 집어 가게 하려는 장치라, 한 문단에 두세 개까지만 답니다.
   */
  about: [
    {
      ko: 'TypeScript·React 기반 웹 플랫폼과 Unity 클라이언트를 개발합니다. 클라이언트·서버 개발부터 출시와 라이브 운영까지 맡아왔습니다.',
      en: 'I build TypeScript and React web platforms and Unity clients, with experience spanning client and server development, launch and live operations.',
    },
    {
      ko: '현재 [[네이버제트]]에서 [[ZEPETO|/work/naverz/]]의 WebPETO와 GenWorld R&D를 중심으로 웹 개발을 맡고, 크리에이터용 Studio·SDK를 개발합니다.',
      en: 'At [[NAVER Z]], I focus on web development for WebPETO and GenWorld R&D and build creator-facing Studio and SDK tools for [[ZEPETO|/work/naverz/]].',
    },
    {
      ko: 'ZEPETO의 실시간 멀티플레이 월드를 개발·운영했고, Windows·macOS 출시를 맡았습니다. 현재 LLM 기반 AI NPC와 월드 생성 R&D에도 참여하고 있습니다.',
      en: 'I built and operated real-time multiplayer worlds for ZEPETO and worked on its Windows and macOS release. I also work on LLM-based R&D for AI NPCs and world generation.',
    },
    {
      ko: '이전에는 [[어썸피스]]에서 [[좀비고등학교|/work/zombiehigh/]]의 100인 서바이벌 모드와 통합 계정 시스템을 만들었습니다. 이후 [[킹갓캐슬|/work/kinggodcastle/]] 팀으로 옮겨 첫 빌드부터 출시, 글로벌 라이브 서비스까지 메인 프로그래머로 맡았습니다.',
      en: 'At [[Awesomepiece]], I built the 100-player survival mode and unified account system for [[Zombie High|/work/zombiehigh/]]. I then moved to the [[King God Castle|/work/kinggodcastle/]] team as main programmer, from the first build through launch and global live service.',
    },
  ] satisfies I18n[],
}

export const contact = {
  email: '1n01raymond@gmail.com',
  /** 표기는 언어별로, 링크는 국제 표기 하나로 */
  phone: { ko: '010-8131-7338', en: '+82 10-8131-7338' } satisfies I18n,
  phoneHref: 'tel:+821081317338',
  portfolio: 'https://portfolio-1n01raymonds-projects.vercel.app',
  linkedin: 'https://www.linkedin.com/in/1n01raymond/',
  github: 'https://github.com/1n01raymond',
}

/* ------------------------------------------------------------------ */
/* 경력                                                                 */
/* ------------------------------------------------------------------ */

export type Experience = {
  slug: string
  company: I18n
  team: I18n
  title: I18n
  scope?: I18n
  start: string // YYYY-MM-DD
  end: string | null // null = 현재
  current?: boolean
  /**
   * 현역 산업기능요원 복무 기간에 속한 재직. 지정업체 안에서만 옮길 수
   * 있던 시기라 재직이 짧게 끊깁니다. 목록에서 연속한 구간을 하나로 묶어
   * 보여주려고 데이터에 둡니다 (HomePage 의 복무 괄호).
   */
  service?: boolean
}

export const experience: Experience[] = [
  {
    slug: 'naverz',
    company: { ko: '네이버제트', en: 'NAVER Z' },
    team: { ko: 'World → Unity', en: 'World → Unity' },
    title: { ko: 'Unity 프로그래머', en: 'Unity Programmer' },
    scope: { ko: '웹 · Unity', en: 'Web · Unity' },
    start: '2023-01-16',
    end: null,
    current: true,
  },
  {
    slug: 'metaz',
    company: { ko: '메타지', en: 'MetaZ' },
    team: { ko: 'Tidal Flats Studio', en: 'Tidal Flats Studio' },
    title: { ko: '리드 게임 프로그래머', en: 'Lead Game Programmer' },
    scope: { ko: '클라이언트 · 서버', en: 'Client · Server' },
    start: '2022-08-01',
    end: '2023-01-07',
  },
  {
    slug: 'awesomepiece',
    company: { ko: '어썸피스', en: 'Awesomepiece' },
    team: { ko: '좀비고 팀 → 킹갓캐슬 팀', en: 'Zombie High → King God Castle' },
    title: { ko: '리드 프로그래머', en: 'Lead Programmer' },
    scope: { ko: '클라이언트 · 서버', en: 'Client · Server' },
    start: '2018-01-29',
    end: '2022-04-01',
  },
  {
    slug: 'krafton',
    service: true,
    company: { ko: '크래프톤', en: 'KRAFTON' },
    team: {
      ko: 'P.CREW 팀 · 펍지랩스에서 법인 전환 (동일 팀)',
      en: 'P.CREW · corporate change from PUBG Labs (same team)',
    },
    title: { ko: '프로그래머', en: 'Programmer' },
    scope: { ko: '클라이언트 · 서버', en: 'Client · Server' },
    start: '2017-11-05',
    end: '2018-01-23',
  },
  {
    slug: 'pubglabs',
    service: true,
    company: { ko: '펍지랩스', en: 'PUBG Labs' },
    team: { ko: 'P.CREW 팀', en: 'P.CREW' },
    title: { ko: '프로그래머', en: 'Programmer' },
    scope: { ko: '클라이언트 · 서버', en: 'Client · Server' },
    start: '2017-02-01',
    // 종료일 = 크래프톤으로 법인 전환된 날. 같은 팀에서 소속 법인만 바뀜.
    end: '2017-11-05',
  },
  {
    slug: 'patigames',
    service: true,
    company: { ko: '넥스쳐 (파티게임즈)', en: 'Nexture (Pati Games)' },
    team: { ko: '커피팀 → 몰디브팀', en: 'Coffee → Maldives' },
    title: { ko: '프로그래머', en: 'Programmer' },
    scope: { ko: '클라이언트 · 서버', en: 'Client · Server' },
    start: '2015-12-07',
    end: '2017-02-01',
  },
  {
    slug: 'maxonsoft',
    service: true,
    company: { ko: '맥스온소프트', en: 'MaxonSoft' },
    team: { ko: 'WHO 팀', en: 'WHO' },
    title: { ko: '프로그래머', en: 'Programmer' },
    scope: { ko: '클라이언트', en: 'Client' },
    start: '2014-06-09',
    end: '2015-12-08',
  },
]

/* ------------------------------------------------------------------ */
/* 프로젝트                                                             */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string
  /** 홈에서 자세히 소개할 대표 작업 */
  featured?: boolean
  company: I18n
  /** 이 프로젝트를 소개할 대표 타이틀 */
  title: I18n
  /** 정확한 프로젝트 참여기간을 아는 경우에만 표시. 회사 재직기간은 experience에 둡니다. */
  period?: I18n
  /** 회사 재직기간과 프로젝트 참여 순서 등 기간 표기에 필요한 맥락 */
  periodNote?: I18n
  /** 카드에 걸리는 한 줄 요약 */
  summary: I18n
  /** 대표 이미지 앞에서 읽을 역할·과제·담당 범위 */
  overview?: { role: I18n; focus: I18n; contribution: I18n }
  /** 확인된 사실로 구성한 기술 사례. 수치나 결과가 불명확하면 outcome은 생략 */
  caseStudies?: {
    id: string
    title: I18n
    context: I18n
    approach: I18n[]
    outcome?: I18n
    diagram?: {
      caption: I18n
      panels: { title: I18n; items: I18n[] }[]
    }
  }[]
  /** 이력서와 PDF에 공통으로 표시할 대표 성과. 상세 본문 순서와 별도로 선정 */
  resumeHighlights: I18n[]
  /** 업무 목록과 별개로 필요한 서비스 맥락. 화면과 인쇄에 동일하게 표시 */
  resumeContext?: I18n
  /** 경력 목록에는 남기되 긴 이력서 프로젝트 목록에서 제외할 때 사용 */
  resumeVisible?: boolean
  links?: { label: I18n; href: string }[]
  /** 모노 태그로 렌더 */
  stack: string[]
  /** 상세 페이지 본문. 그룹 제목 + 불릿 */
  sections: { heading: I18n; items: I18n[] }[]
  /** public/projects/ 아래 경로. 없으면 그라디언트 플레이스홀더로 대체 */
  image?: string
  /** 상세 페이지 하단 갤러리. 대표 이미지 외의 장면들 */
  gallery?: { src: string; caption: I18n }[]
}

export const projects: Project[] = [
  {
    slug: 'naverz',
    featured: true,
    company: { ko: '네이버제트', en: 'NAVER Z' },
    title: { ko: 'ZEPETO', en: 'ZEPETO' },
    period: { ko: '2023.01 — 현재', en: 'Jan 2023 — Present' },
    summary: {
      ko: 'WebPETO의 웹·WebGL 초기 로딩 최적화와 React 전환, GenWorld AI 제작 도구 R&D, ZEPETO SDK 및 Windows·macOS 출시 대응.',
      en: 'Web and WebGL loading optimisation and React migration for WebPETO, GenWorld AI authoring R&D, ZEPETO SDK development and Windows/macOS release support.',
    },
    overview: {
      role: { ko: '소프트웨어 엔지니어 · 웹·Unity', en: 'Software Engineer · Web & Unity' },
      focus: {
        ko: '브라우저에서 기존 앱의 아바타·상점 경험을 제공하고, AI가 만든 월드를 실행·확인·수정하는 제작 환경 개발.',
        en: 'Bringing the app’s avatar and shop experience to the browser, and building tools to run, inspect and revise AI-authored worlds.',
      },
      contribution: {
        ko: 'React UI·서버 상태 관리, JavaScript–Unity 브리지, WebGL 빌드 경량화와 로딩 순서 개선, TypeScript 기반 제작 도구·MCP 연동을 개발했습니다. 기존 Studio·SDK와 PC 클라이언트 출시 업무도 담당했습니다.',
        en: 'Developed React interfaces and server-state handling, JavaScript–Unity bridges, smaller WebGL builds and staged loading, plus TypeScript authoring tools and MCP integration. Also worked on Studio, SDKs and the PC client release.',
      },
    },
    caseStudies: [
      {
        id: 'webpeto-loading',
        title: { ko: 'WebPETO — 아바타 첫 화면까지의 로딩 경로 개선', en: 'WebPETO — improving the path to the first avatar render' },
        context: {
          ko: '웹 상단의 아바타 뷰어에 범용 텍스처 편집기용 기능과 리소스가 포함돼 있었습니다. Unity 초기화와 캐릭터 데이터·부가 리소스 로딩도 첫 화면을 보여주는 경로에 걸려 있어, 다운로드 용량과 표시 순서를 함께 개선했습니다.',
          en: 'The embedded avatar viewer carried features and resources from a general-purpose texture editor. Unity startup, character data and optional content also sat on the path to the first render, so I addressed both download size and loading order.',
        },
        approach: [
          {
            ko: '텍스처 편집·UV·디버그 UI와 불필요한 패키지를 제거하고, 선택 리소스를 초기 빌드에서 제외했습니다. SDK 리소스의 중복 포함을 제거하고 Brotli 압축, IL2CPP 크기 우선 설정과 코드 스트리핑을 적용했습니다.',
            en: 'Removed texture-editing, UV and debug interfaces and unnecessary packages, and excluded optional resources from the initial build. Removed duplicate SDK resources and applied Brotli compression, size-focused IL2CPP output and code stripping.',
          },
          {
            ko: '로그인 화면에서 유휴 시간과 로그인 의도를 활용해 빌드 파일을 미리 받고 런타임을 준비했습니다. 캐시된 캐릭터를 먼저 표시한 뒤 최신 응답과 비교해 필요한 경우에만 갱신하고, 배경·액세서리 등 부가 리소스는 첫 표시 이후로 미뤘습니다.',
            en: 'Preloaded build files and prepared the runtime during login, using idle time and login intent. Rendered cached character data first, refreshed only when the latest response differed, and deferred optional backgrounds and accessories until after the initial render.',
          },
          {
            ko: 'SDK가 리플렉션으로 생성하는 타입은 link.xml로 보존하고 WebGL 셰이더 폴백을 유지했습니다. 데이터 절약 모드에서는 자동 사전 로딩을 생략하고, 초기화·메타데이터 전달·콘텐츠 로드 단계에 성능 마커를 남겼습니다.',
            en: 'Preserved SDK types created through reflection with link.xml and retained WebGL shader fallbacks. Skipped automatic preloading in data-saving mode and instrumented runtime startup, metadata delivery and content loading.',
          },
        ],
        outcome: {
          ko: '2026년 6월 최적화 기록 기준, 초기 WebGL 압축 산출물(data·wasm·framework) 합계를 약 13.29MB에서 7.64MB로 약 43% 줄였습니다. 첫 표시와 후속 콘텐츠 갱신을 분리했으며, 수치는 로딩 시간이나 전체 페이지 용량이 아닌 해당 빌드 파일의 전송 용량 기준입니다.',
          en: 'The June 2026 optimisation reduced the combined compressed WebGL data, wasm and framework files from about 13.29 MB to 7.64 MB, approximately 43%. Separated the initial render from later content updates; the figure measures those build files, not elapsed loading time or total page weight.',
        },
      },
      {
        id: 'webpeto-react',
        title: { ko: 'WebPETO — 기존 앱과 WebGL을 연결하는 React UI', en: 'WebPETO — React interfaces connecting app behaviour and WebGL' },
        context: {
          ko: '기존 Android 앱의 API·이동 규칙·아바타 표현을 웹에서도 이어가면서, DOM 기반 화면을 React로 점진적으로 옮겨야 했습니다.',
          en: 'The web prototype needed to preserve the Android app’s APIs, navigation rules and avatar rendering while incrementally moving DOM-based interfaces to React.',
        },
        approach: [
          {
            ko: 'React 앱 셸과 상점 화면을 분리하고 Redux Toolkit·RTK Query로 상태와 API 조회를 구성했습니다. 기존 화면과 새 화면이 공유하는 상품 판별·표시·구매 로직은 공통 모듈로 추출했습니다.',
            en: 'Separated the React app shell and shop surface, using Redux Toolkit and RTK Query for state and API access. Extracted shared product, display and purchase logic for both legacy and React interfaces.',
          },
          {
            ko: '웹이 라우팅·입력·UI를 관리하고 Unity가 아바타 렌더링을 맡도록 경계를 나눴습니다. SendMessage와 준비·로드 콜백으로 캐릭터 메타데이터와 카메라 상태를 전달하고, hash·직접 URL 이동을 공통 scheme 해석 경로로 연결했습니다.',
            en: 'Kept routing, input and interfaces in the web layer and avatar rendering in Unity. Connected character metadata and camera state through SendMessage and readiness/load callbacks, and routed hash and direct-URL navigation through a shared scheme parser.',
          },
          {
            ko: '기존 화면을 비교용 폴백으로 유지하고 라우트별 스모크·스크린샷 검증을 구성해 단계적으로 전환했습니다. 일부 화면과 동작은 여전히 이관 중인 내부 프로토타입입니다.',
            en: 'Retained legacy interfaces as comparison fallbacks and used route-level smoke checks and screenshots during the migration. This remains an internal prototype with some interfaces and actions still being migrated.',
          },
        ],
      },
      {
        id: 'web-lab-auth',
        title: { ko: 'Web Lab — 여러 웹 서비스와 개발 도구의 로그인 연동', en: 'Web Lab — shared sign-in for web services and developer tools' },
        context: {
          ko: 'WebPETO·월드 Player·AI 제작 포털을 하나의 실험실에서 제공하면서, 서비스마다 다른 세션 방식과 Unity Editor·CLI 등 브라우저 밖 도구의 로그인 경로를 연결해야 했습니다.',
          en: 'WebPETO, world players and AI authoring portals shared one lab but used different session models. Developer tools such as Unity Editor and CLI clients also needed a sign-in integration path.',
        },
        approach: [
          {
            ko: 'Node.js 기반 공통 로그인 허브를 두고, 인증 후 원래 서비스로 돌아가 각 서비스의 세션을 이어주는 흐름을 구현했습니다. 로그인 실패·만료·로그아웃과 서비스별 진입 경로를 함께 다뤘습니다.',
            en: 'Built a shared Node.js sign-in hub that returned users to the originating service and established its session. Handled failed sign-in, expiry, sign-out and service-specific entry paths.',
          },
          {
            ko: '다른 origin의 웹앱과 Unity Editor·CLI에는 OAuth 2.0 authorization code + PKCE를 적용했습니다. 등록된 redirect URI와 요청 권한을 검증하고, 상위 계정 토큰을 클라이언트에 직접 노출하지 않도록 세션 경계를 설계했습니다.',
            en: 'Applied OAuth 2.0 authorization code and PKCE to other-origin web apps, Unity Editor and CLI clients. Validated registered redirect URIs and scopes, and designed the session boundary to avoid exposing the upstream account token directly to clients.',
          },
          {
            ko: '세션 종료와 클라이언트 등록 해지를 토큰 무효화에 연결하고, 계약 테스트와 로그인 흐름의 종단 점검을 구성했습니다.',
            en: 'Linked session termination and client deregistration to token invalidation, with contract tests and end-to-end checks for the sign-in flow.',
          },
        ],
      },
      {
        id: 'genworld-authoring',
        title: { ko: 'GenWorld — AI 제작·실행·피드백을 잇는 웹 도구', en: 'GenWorld — connecting AI authoring, execution and feedback' },
        context: {
          ko: 'AI가 작성한 월드 코드를 빠르게 실행하면서, 사용자가 변경 내용과 실행 실패 원인을 웹에서 확인할 수 있는 제작 환경이 필요했습니다.',
          en: 'The authoring environment needed to run AI-written world code quickly while showing users what changed and why an execution failed.',
        },
        approach: [
          {
            ko: 'React·TypeScript 편집기와 MCP 도구를 소스 저장→실행→입력·화면·오류 관찰→수정 흐름으로 연결했습니다. 미리 빌드한 Unity WebGL Player에서 코드를 교체해 월드 수정마다 Unity를 다시 빌드하지 않도록 구성했습니다.',
            en: 'Connected the React and TypeScript editor with MCP tools for saving, running, observing input/screens/errors and revising code. Reused a prebuilt Unity WebGL Player so world-code changes did not require another Unity build.',
          },
          {
            ko: '별도 origin의 sandbox iframe에 실행을 격리하고 메시지 발신 프레임·origin·nonce를 검사했습니다. 프레임 외부 watchdog으로 응답 중단을 감지하고, 문제가 생긴 실행을 종료한 뒤 새 프레임으로 복구하도록 구현했습니다.',
            en: 'Isolated execution in a sandboxed iframe on a separate origin and validated the sender frame, origin and nonce. Used a watchdog outside the frame to detect stalled execution, terminate it and recover in a fresh frame.',
          },
          {
            ko: '소스 버전별 변경 설명·작성자·파일 diff와 실행·입력·관측 기록을 웹에서 함께 표시했습니다. 로딩·실패·연결 끊김을 구분해 안내하고, Vitest·Unity 배치 테스트와 실제 Chrome 실행으로 코드 교체와 무한 루프 종료·복구를 확인했습니다.',
            en: 'Displayed version messages, authors, file diffs and execution/input/observation records together. Distinguished loading, failure and disconnection states, and checked code replacement and infinite-loop termination/recovery through Vitest, Unity batch tests and real Chrome runs.',
          },
        ],
        outcome: {
          ko: '별도 Unity 빌드 없이 코드 수정과 재실행을 반복하고, 웹에서 변경 내역과 실행 결과를 확인하는 R&D 흐름을 구현했습니다. 생성 코드의 실행 범위는 소유자 전용 저작 미리보기이며, 공개 월드 출시와는 구분합니다.',
          en: 'Implemented an R&D workflow for repeated code edits and execution without rebuilding Unity, with changes and results visible in the web interface. Generated code runs only in owner-specific authoring previews, separately from public world releases.',
        },
      },
      {
        id: 'zepetofield-jobs',
        title: { ko: 'ZepetoField — 오래 걸리는 생성 작업의 상태와 재시작 처리', en: 'ZepetoField — managing long-running generation jobs and restarts' },
        context: {
          ko: '자연어로 게임을 생성하는 포털에서 여러 사용자의 요청을 받되, Unity 프로젝트를 동시에 빌드해 작업 파일이 충돌하거나 요청 재전송으로 같은 게임을 중복 생성하지 않도록 해야 했습니다.',
          en: 'The prompt-to-game portal needed to accept requests from multiple users without concurrent builds colliding in the same Unity project or retries generating the same game twice.',
        },
        approach: [
          {
            ko: '요청별 idempotency key로 중복 접수를 방지하고, 사용자별 작업 조회와 활성 작업 수 제한을 구성했습니다. 웹에는 대기 순서·생성 단계·완료·실패 상태를 제공하고 작업 상태를 파일에 영속화했습니다.',
            en: 'Used per-request idempotency keys to prevent duplicate submissions, scoped job queries to their owners and limited active jobs. Exposed queue position, generation stage, completion and failure in the portal, with persisted job state.',
          },
          {
            ko: '공유 Unity 프로젝트의 빌드는 직렬로 실행하고, 워커 슬롯을 늘릴 때는 별도 프로젝트 루트에 작업을 배정하도록 구성했습니다. 서버 재시작 시 실행 중이던 작업은 중단 상태로 복구해 자동 중복 실행을 피했습니다.',
            en: 'Serialised builds within a shared Unity project and assigned additional worker slots to separate project roots. On server restart, recovered previously running jobs as interrupted instead of automatically executing them again.',
          },
        ],
        outcome: {
          ko: '프롬프트 입력·생성 진행 상태·결과 카탈로그·WebGL 플레이를 연결한 PoC를 구현했습니다. GenWorld의 미리 빌드한 Player 재사용 방식과 달리, 이 파이프라인은 생성한 게임마다 Unity 씬과 WebGL 빌드를 산출합니다.',
          en: 'Implemented a PoC connecting prompt entry, generation progress, a result catalogue and WebGL play. This pipeline builds a Unity scene and WebGL output for each generated game; GenWorld separately reuses a prebuilt Player.',
        },
      },
      {
        id: 'pc-release',
        title: { ko: 'Windows·macOS 출시 대응', en: 'Supporting the Windows and macOS release' },
        context: {
          ko: 'ZEPETO의 지원 범위를 Windows·macOS로 확장하는 PC 출시 작업에 참여했습니다.',
          en: 'Contributed to ZEPETO’s PC release, extending platform support to Windows and macOS.',
        },
        approach: [
          {
            ko: 'Unity 클라이언트의 PC 크로스플랫폼 지원을 맡았습니다.',
            en: 'Worked on cross-platform PC support in the Unity client.',
          },
          {
            ko: 'Windows·macOS 환경에서 발생한 런타임 이슈를 분석하고 해결했습니다.',
            en: 'Investigated and resolved runtime issues on Windows and macOS.',
          },
        ],
      },
    ],
    resumeHighlights: [
      {
        ko: 'WebPETO 초기 WebGL 압축 빌드 약 43% 축소(13.29→7.64MB, 2026.06) — 리소스·의존성 정리, 캐시 우선 표시·부가 콘텐츠 지연 로딩',
        en: 'Reduced WebPETO’s compressed WebGL build by ~43% (13.29→7.64 MB, Jun 2026); pruned resources/dependencies, rendered cached data first and deferred optional content',
      },
      {
        ko: 'React·RTK Query 기반 웹 UI·API 상태 관리, JavaScript–Unity 브리지 및 OAuth·PKCE 기반 공통 로그인 연동',
        en: 'React/RTK Query interfaces and API state, JavaScript–Unity bridges and shared OAuth/PKCE sign-in integration',
      },
      {
        ko: 'GenWorld·ZepetoField R&D — TypeScript·MCP 제작 도구, 실행 격리·복구, 사용자별 생성 작업 큐·중복 요청 방지',
        en: 'GenWorld/ZepetoField R&D: TypeScript/MCP authoring tools, execution isolation/recovery, per-user generation queues and request deduplication',
      },
      {
        ko: 'ZEPETO Studio·SDK 모듈 개발 및 Windows·macOS 출시 — 크로스플랫폼 지원과 런타임 이슈 해결',
        en: 'Developed ZEPETO Studio/SDK modules and supported the Windows/macOS release, resolving cross-platform runtime issues',
      },
    ],
    stack: ['TypeScript', 'React', 'Redux Toolkit', 'RTK Query', 'Vite', 'Webpack', 'Node.js', 'Unity3D', 'C#', 'WebGL', 'MCP', 'Vitest', 'Windows/macOS'],
    image: '/projects/zepeto.webp',
    sections: [
      {
        heading: { ko: 'Web Lab · 프로젝트 범위', en: 'Web Lab · Project Scope' },
        items: [
          {
            ko: 'WebPETO — 기존 모바일 앱의 홈·상점·피드·프로필을 웹으로 옮긴 프로토타입과 아바타 WebGL 뷰어',
            en: 'WebPETO — a web prototype of the mobile app’s home, shop, feed and profile, with a WebGL avatar viewer',
          },
          {
            ko: 'NewWorld Package WebGL Player — NewWorld 패키지의 브라우저 실행, 월드 입장·매치메이킹·릴레이 연동 R&D',
            en: 'NewWorld Package WebGL Player — R&D on browser execution, world entry, matchmaking and relay integration for NewWorld packages',
          },
          {
            ko: 'ZepetoField — 자연어 기반 게임 설계·Unity 빌드·결과 카탈로그·브라우저 플레이를 연결한 PoC',
            en: 'ZepetoField — a PoC connecting prompt-based game design, Unity builds, a result catalogue and browser play',
          },
          {
            ko: 'Prop Atlas — 월드 제작용 프롭 카탈로그 검색 도구',
            en: 'Prop Atlas — a searchable prop catalogue for world authoring',
          },
          {
            ko: 'GenWorld — AI와 사용자가 코드를 수정하고 실행 결과·오류·변경 기록을 확인하는 웹 제작 환경',
            en: 'GenWorld — a web authoring environment where AI and users revise code and inspect execution results, errors and change history',
          },
          {
            ko: 'ZS Runtime Test — 생성한 TypeScript를 서버에서 컴파일하고 격리된 WebGL 런타임에 부착하는 실험',
            en: 'ZS Runtime Test — an experiment compiling generated TypeScript on the server and attaching it to an isolated WebGL runtime',
          },
        ],
      },
      {
        heading: { ko: '웹 플랫폼', en: 'Web Platform' },
        items: [
          {
            ko: 'WebPETO의 React 앱 셸·상점 UI와 API 상태 관리, 기존 DOM 화면의 점진적 이관',
            en: 'React app shell, shop interfaces and API state management for WebPETO, with incremental migration from legacy DOM interfaces',
          },
          {
            ko: '아바타 WebGL 빌드 경량화·초기 로딩 경로 개선 및 웹–Unity 메타데이터·카메라 연동',
            en: 'Smaller avatar WebGL builds, improved initial loading and web–Unity metadata/camera integration',
          },
          {
            ko: 'GenWorld의 React·TypeScript 편집기, MCP 코드 제작·관찰 도구와 AI 변경 기록 UI 개발',
            en: 'React and TypeScript editor, MCP code-authoring/observation tools and AI change-history interfaces for GenWorld',
          },
        ],
      },
      {
        heading: { ko: '주요 성과', en: 'Highlights' },
        items: [
          {
            ko: 'LLM 기반 AI NPC(Companion) R&D',
            en: 'LLM-based AI NPC (Companion) R&D',
          },
          {
            ko: 'LLM 기반 AI 월드 생성 R&D',
            en: 'LLM-based AI world generation R&D',
          },
          {
            ko: "ZEPETO 'Slime Party' 월드 — 실시간 멀티플레이 기반 캐주얼 콘텐츠 개발 및 유지보수",
            en: "ZEPETO 'Slime Party' world — built and maintained real-time multiplayer casual content",
          },
          {
            ko: "ZEPETO 'MyHome' 월드 — 유저 커스터마이징·소셜 기능 중심의 신규 기능 개발 및 운영",
            en: "ZEPETO 'MyHome' world — new features and live operation centred on user customisation and social play",
          },
        ],
      },
      {
        heading: { ko: '플랫폼 · 개발 도구', en: 'Platform & Tooling' },
        items: [
          { ko: 'ZEPETO Studio 개발', en: 'ZEPETO Studio' },
          { ko: 'ZEPETO SDK 모듈 개발', en: 'ZEPETO SDK modules' },
          { ko: 'ZEPETO 월드 템플릿 제작', en: 'ZEPETO world templates' },
          { ko: 'ZEPETO WebGL 빌드 구현', en: 'ZEPETO WebGL build' },
          { ko: '사내 공용 에셋 리소스 라이브러리 구축', en: 'Internal shared asset resource library' },
          { ko: 'LLM 기반 코드 리뷰 도구 개발', en: 'LLM-based code review tool' },
        ],
      },
      {
        heading: { ko: '클라이언트 엔지니어링', en: 'Client Engineering' },
        items: [
          {
            ko: 'Unity 기반 YouTube Player — 월드 내 동영상 스트리밍 기능 구현 및 최적화',
            en: 'Unity-based YouTube player — in-world video streaming, implemented and optimised',
          },
          {
            ko: '모바일 네이티브-Unity 연동 — iOS/Android 네이티브 시스템과 Unity 사이의 이슈 분석 및 해결',
            en: 'Mobile native ↔ Unity bridge — diagnosed and fixed issues across the iOS/Android native boundary',
          },
        ],
      },
    ],
  },

  {
    slug: 'brickisland',
    company: { ko: '개인 프로젝트', en: 'Personal Project' },
    title: { ko: '브릭아일랜드', en: 'BrickIsland' },
    period: { ko: '2025.03 — 현재', en: 'Mar 2025 — Present' },
    summary: {
      ko: '수상레저 현장의 운영자·코치·회원·대형 디스플레이를 하나의 실시간 웹 서비스로 연결한 멀티 디바이스 PWA.',
      en: 'A multi-device PWA connecting operators, coaches, members and large displays in a real-time water sports venue service.',
    },
    overview: {
      role: { ko: '기획·설계·개발·운영', en: 'Product, architecture, development & operations' },
      focus: {
        ko: '현장 대기열과 회원·티켓·탑승 기록을 여러 역할과 디바이스에서 일관되게 관리.',
        en: 'Consistent queue, member, ticket and ride record management across roles and devices.',
      },
      contribution: {
        ko: 'Next.js·React·TypeScript 기반 전체 서비스와 API를 개발하고 Supabase Realtime, PWA, Vercel 배포를 구성.',
        en: 'Built the full Next.js, React and TypeScript service and APIs with Supabase Realtime, PWA support and Vercel deployment.',
      },
    },
    caseStudies: [
      {
        id: 'multi-device-operations',
        title: { ko: '여러 현장 화면을 하나의 운영 상태로', en: 'One operating state across venue screens' },
        context: {
          ko: '운영자·코치·회원과 대형 화면이 서로 다른 UI를 사용하면서도 같은 대기열 상태를 빠르게 공유해야 했습니다.',
          en: 'Operators, coaches, members and large displays use different interfaces while sharing the same queue state.',
        },
        approach: [
          {
            ko: '역할별 화면을 분리하고 공통 데이터 흐름을 React Query 훅으로 구성했습니다.',
            en: 'Separated role-specific interfaces and organised shared data flows with React Query hooks.',
          },
          {
            ko: 'Supabase Realtime 변경 알림과 폴백 조회를 조합해 여러 디바이스의 상태를 갱신했습니다.',
            en: 'Combined Supabase Realtime change notifications with fallback polling to refresh state across devices.',
          },
          {
            ko: '대형 화면용 뷰어에 Screen Wake Lock을 적용하고 화면 복귀 시 잠금을 다시 요청하도록 구성했습니다.',
            en: 'Applied Screen Wake Lock to the large-display viewer and reacquired it when the page became visible again.',
          },
        ],
      },
    ],
    resumeHighlights: [
      {
        ko: '운영자·코치·회원·대형 디스플레이용 화면을 하나의 Next.js·React·TypeScript 서비스로 개발',
        en: 'Built operator, coach, member and large-display interfaces as one Next.js, React and TypeScript service',
      },
      {
        ko: 'Supabase Realtime과 React Query를 결합해 여러 디바이스의 대기열 상태 동기화',
        en: 'Synchronised queue state across devices with Supabase Realtime and React Query',
      },
      {
        ko: 'PWA와 Screen Wake Lock을 적용해 모바일 및 장시간 실행되는 현장 뷰어 환경 지원',
        en: 'Supported mobile use and long-running venue displays with PWA and Screen Wake Lock',
      },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase Realtime', 'React Query', 'PWA', 'Vercel'],
    links: [
      { label: { ko: '서비스', en: 'Live service' }, href: 'https://brick-island.vercel.app' },
      { label: { ko: 'GitHub', en: 'GitHub' }, href: 'https://github.com/1n01raymond/BrickIsland' },
    ],
    sections: [
      {
        heading: { ko: '현장 운영 제품', en: 'Venue Operations Product' },
        items: [
          {
            ko: '여러 대기열의 생성·정렬·일시정지·다음 순번 처리와 탑승 완료·결제 기록 관리',
            en: 'Queue creation, ordering, pausing and next-rider flows, plus ride completion and payment records',
          },
          {
            ko: '회원별 티켓 내역과 카카오 로그인 기반 마이페이지, 운영자용 관리 화면 개발',
            en: 'Member ticket records, Kakao-login member pages and operator administration interfaces',
          },
          {
            ko: '모바일 현장 조작 화면과 TV·대형 디스플레이용 실시간 대기열 뷰어 제공',
            en: 'Mobile venue controls and a real-time queue viewer for TVs and large displays',
          },
        ],
      },
    ],
  },

  {
    slug: 'metaz',
    company: { ko: '메타지', en: 'MetaZ' },
    title: { ko: 'Fidelion — Tidal Flats Studio', en: 'Fidelion — Tidal Flats Studio' },
    period: { ko: '2022.08 — 2023.01', en: 'Aug 2022 — Jan 2023' },
    summary: {
      ko: '리드 게임 프로그래머로서 Fidelion IP 기반 신규 프로젝트의 Unity 클라이언트와 Nest.js 서버 개발을 주도.',
      en: 'Led the Unity client and Nest.js server for a new title on the Fidelion IP, as Lead Game Programmer.',
    },
    resumeHighlights: [
      {
        ko: 'Fidelion IP 기반 신규 프로젝트의 리드 게임 프로그래머로 개발 주도',
        en: 'Led development of a new title on the Fidelion IP as Lead Game Programmer',
      },
      {
        ko: 'Unity 클라이언트와 Nest.js 서버 설계·구현 (사업 종료로 프로젝트 중단)',
        en: 'Designed and implemented the Unity client and Nest.js server (project discontinued when the business closed)',
      },
    ],
    stack: ['Unity3D', 'C#', 'Nest.js', 'TypeScript'],
    image: '/projects/fidelion.webp',
    sections: [
      {
        heading: { ko: '역할', en: 'Role' },
        items: [
          {
            ko: 'Tidal Flats Studio(MetaZ) 리드 게임 프로그래머로 신규 프로젝트 개발 주도',
            en: 'Lead Game Programmer at Tidal Flats Studio (MetaZ), driving development of a new title',
          },
          {
            ko: 'Unity3D 클라이언트와 Nest.js 서버를 함께 설계·구현',
            en: 'Designed and implemented both the Unity3D client and the Nest.js server',
          },
          {
            ko: 'Fidelion: 라이엇 게임즈 아트 디렉터 출신 임호교 디렉터가 이끈 포스트아포칼립스 IP 프로젝트',
            en: 'Fidelion: a post-apocalyptic IP project directed by Hokyo Lim, formerly art director at Riot Games',
          },
          {
            ko: '회사가 사업을 정리하면서 프로젝트 중단',
            en: 'The project was discontinued when the company wound down',
          },
        ],
      },
    ],
  },

  {
    slug: 'kinggodcastle',
    featured: true,
    company: { ko: '어썸피스', en: 'Awesomepiece' },
    title: { ko: '킹갓캐슬', en: 'King God Castle' },
    periodNote: {
      ko: '좀비고 팀 근무 후 킹갓캐슬 팀으로 이동',
      en: 'Moved to the King God Castle team after working on Zombie High',
    },
    summary: {
      ko: '메인 프로그래머로 신규 개발부터 출시, 글로벌 라이브 서비스까지 담당한 모바일 전략 RPG.',
      en: 'A mobile strategy RPG I took from first build through launch into global live service, as main programmer.',
    },
    overview: {
      role: { ko: '메인 프로그래머 · 클라이언트·서버', en: 'Main Programmer · Client & Server' },
      focus: {
        ko: '첫 빌드부터 출시 이후 글로벌 라이브 서비스까지 게임 개발과 운영.',
        en: 'Game development and operations from the first build through launch and global live service.',
      },
      contribution: {
        ko: 'Unity 클라이언트와 Java Spring Boot 서버, 핵심 게임 시스템, 리소스 패치 및 빌드·배포 자동화 구현.',
        en: 'Unity client, Java Spring Boot server, core game systems, resource patching and build/deployment automation.',
      },
    },
    caseStudies: [
      {
        id: 'release-tooling',
        title: { ko: '게임 개발과 함께 만든 패치·배포 도구', en: 'Patching and deployment alongside game development' },
        context: {
          ko: '메인 프로그래머로 클라이언트·서버 개발부터 출시 이후 라이브 서비스까지 맡으며, 리소스 패치와 빌드·배포 환경도 함께 구축했습니다.',
          en: 'As main programmer from client and server development through live service, I also built the resource patching and build/deployment tools.',
        },
        approach: [
          {
            ko: 'GCP 기반 에셋 번들 리소스 패치 시스템을 구현했습니다.',
            en: 'Implemented an asset bundle resource patching system on GCP.',
          },
          {
            ko: 'Jenkins·Slack·Python을 연결한 자동 빌드·배포 봇을 제작했습니다.',
            en: 'Built an automated build and deployment bot connecting Jenkins, Slack and Python.',
          },
        ],
      },
    ],
    resumeHighlights: [
      {
        ko: '메인 프로그래머로 Unity 클라이언트·Java Spring Boot 서버 개발부터 출시, 글로벌 라이브 서비스까지 담당',
        en: 'Main programmer from Unity client and Java Spring Boot server development through launch and global live service',
      },
      {
        ko: 'GCP 에셋 번들 패치 시스템과 Jenkins·Slack·Python 기반 빌드·배포 자동화 구축',
        en: 'Built GCP asset bundle patching and automated builds and deployment with Jenkins, Slack and Python',
      },
    ],
    stack: ['Unity3D', 'C#', 'Java (Spring Boot)', 'GCP', 'Jenkins', 'Python'],
    image: '/projects/kinggodcastle.webp',
    sections: [
      {
        heading: { ko: '신규 개발부터 라이브까지', en: 'From Zero to Live' },
        items: [
          {
            ko: '모바일 게임 킹갓캐슬의 메인 프로그래머로 신규 개발부터 출시, 라이브 서비스까지 담당',
            en: 'Main programmer on King God Castle, from first build through launch and into live service',
          },
          {
            ko: 'Unity3D 클라이언트 + Java Spring Boot 서버로 전체 콘텐츠 제작 및 서비스 운영',
            en: 'Built all content and ran the service on a Unity3D client with a Java Spring Boot server',
          },
          {
            ko: '캐릭터·스킬·몬스터 전투 시스템, 상점, 길드, 우편 등 핵심 게임 시스템 전반 구현',
            en: 'Implemented core systems throughout — character/skill/monster combat, shop, guild, mail',
          },
          {
            ko: 'GCP 미국 리전 이전으로 글로벌 서비스 안정화 및 성능 개선',
            en: 'Moved to a GCP US region, stabilising and speeding up global service',
          },
        ],
      },
    ],
  },

  {
    slug: 'zombiehigh',
    featured: true,
    company: { ko: '어썸피스', en: 'Awesomepiece' },
    title: { ko: '좀비고등학교', en: 'Zombie High' },
    resumeContext: {
      ko: '최대 동시접속자 13만 명을 기록한 모바일 게임',
      en: 'Mobile game with a peak of 130,000 concurrent players',
    },
    periodNote: {
      ko: '좀비고 팀에서 근무한 뒤 킹갓캐슬 팀으로 이동',
      en: 'Worked on the Zombie High team before moving to King God Castle',
    },
    summary: {
      ko: '최대 동시접속자 13만 명을 기록한 게임의 라이브 서비스. 리드 프로그래머로 콘텐츠 개발, 서버 최적화와 통합 계정 시스템을 담당.',
      en: 'Live service for a game that reached 130,000 peak concurrent players. As Lead Programmer, I worked on content, server optimisation and unified accounts.',
    },
    overview: {
      role: { ko: '리드 프로그래머 · 클라이언트·서버', en: 'Lead Programmer · Client & Server' },
      focus: {
        ko: '라이브 서비스의 성능·동시성 문제 대응과 신규 멀티플레이 콘텐츠 개발.',
        en: 'Performance and concurrency issues in live service, alongside new multiplayer content.',
      },
      contribution: {
        ko: '100인 동기화 구조, 통합 계정 설계·구현, Java 서버 프로파일링·데드락 해결 및 인프라 이전.',
        en: '100-player synchronisation, unified account design and implementation, Java profiling, deadlock resolution and infrastructure migration.',
      },
    },
    caseStudies: [
      {
        id: 'java-gc',
        title: { ko: 'GC 정지 시간 개선을 위한 라이브 프로파일링', en: 'Profiling live servers to reduce GC pauses' },
        context: {
          ko: 'Java 서버의 GC로 인한 멈춤 시간을 줄이기 위해 ZGC 전환을 진행했습니다. 상황이 다양하고 서비스가 계속 운영 중이어서, 분석 과정이 라이브 서버에 주는 영향을 최소화하는 것이 중요한 제약이었습니다.',
          en: 'Worked on a move to ZGC to reduce Java server GC pauses. With varied conditions in an active live service, minimising the impact of analysis on production was an important constraint.',
        },
        approach: [
          {
            ko: '다양한 라이브 상황에서 반복적으로 프로파일링하며 Java 서버의 동작과 성능을 분석했습니다.',
            en: 'Repeatedly profiled Java server behaviour and performance across varied live conditions.',
          },
          {
            ko: '서비스에 미치는 영향을 고려하며 분석을 진행하고, GC pause를 줄이기 위한 ZGC 전환 작업을 맡았습니다.',
            en: 'Accounted for the impact on live service during analysis and worked on the ZGC transition to reduce GC pauses.',
          },
        ],
      },
      {
        id: 'live-deadlocks',
        title: { ko: '덤프 분석으로 대응한 멀티스레드 데드락', en: 'Investigating multithreaded deadlocks with dumps' },
        context: {
          ko: '멀티스레드 Java 서버를 운영하며 여러 상황에서 발생하는 데드락에 대응했습니다.',
          en: 'Handled deadlocks arising in varied situations while operating a multithreaded Java server.',
        },
        approach: [
          {
            ko: 'Jmap·Jstack 등 JVM 진단 도구로 문제 상황의 정보를 수집하고, 스레드 덤프를 분석했습니다.',
            en: 'Gathered diagnostic information with JVM tools including Jmap and Jstack, and analysed thread dumps.',
          },
          {
            ko: '덤프 분석으로 확인한 원인을 수정하며, 서로 다른 운영 상황에서 발생하는 데드락을 해결했습니다.',
            en: 'Fixed causes identified through dump analysis and resolved deadlocks encountered in different live conditions.',
          },
        ],
      },
      {
        id: 'unified-accounts',
        title: { ko: '분리된 로그인 계정을 하나의 대표 계정으로', en: 'Bringing separate logins under one primary account' },
        context: {
          ko: '이메일·Google·Facebook 로그인이 각각 별도 계정이었고, 계정 하나에 캐릭터 하나가 연결된 구조였습니다.',
          en: 'Email, Google and Facebook logins were separate accounts, each associated with one character.',
        },
        approach: [
          {
            ko: '기존 계정을 대표 계정 아래 연결하고, 여러 캐릭터를 만들어 선택해 접속하는 통합 계정 시스템을 설계·개발했습니다.',
            en: 'Designed and built unified accounts that link existing accounts under a primary account and let users create and select multiple characters.',
          },
          {
            ko: '본인인증 요구가 강화되던 시기에 NCP 기반 휴대폰 본인인증을 대표 계정 생성의 필수 절차로 적용하고, 계정 복구를 지원했습니다.',
            en: 'As identity verification requirements grew, required NCP-based phone verification when creating a primary account and added account recovery support.',
          },
        ],
        outcome: {
          ko: '로그인 방식마다 나뉜 계정을 대표 계정 아래 묶고, 다중 캐릭터 선택과 계정 복구를 지원하는 구조로 전환했습니다.',
          en: 'Replaced accounts separated by login method with a primary-account model supporting multiple characters and account recovery.',
        },
        diagram: {
          caption: {
            ko: '계정 모델 변경 전후 — 로그인 계정과 캐릭터 관계의 개념도',
            en: 'Before and after: a conceptual view of the account and character relationship',
          },
          panels: [
            {
              title: { ko: '이전', en: 'Before' },
              items: [
                { ko: '이메일 계정 → 캐릭터 1개', en: 'Email account → one character' },
                { ko: 'Google 계정 → 캐릭터 1개', en: 'Google account → one character' },
                { ko: 'Facebook 계정 → 캐릭터 1개', en: 'Facebook account → one character' },
              ],
            },
            {
              title: { ko: '통합 후', en: 'After' },
              items: [
                { ko: '휴대폰 본인인증을 거친 대표 계정', en: 'Primary account with phone identity verification' },
                { ko: '기존 이메일·Google·Facebook 계정 연결', en: 'Linked existing email, Google and Facebook accounts' },
                { ko: '복수 캐릭터 생성·선택 및 계정 복구', en: 'Multiple character creation/selection and account recovery' },
              ],
            },
          ],
        },
      },
      {
        id: 'cloud-migration',
        title: { ko: '운영 조건에 맞춘 IDC → NCP → GCP 이전', en: 'Moving from IDC to NCP to GCP as operating needs changed' },
        context: {
          ko: 'IDC 서버를 클라우드로 옮기면서 비용을 고려해 NCP를 선택했습니다. 이후 NCP 운영 중 겪은 문제들로 대안을 검토했고, GCP 한국 리전 개설을 계기로 이전했습니다.',
          en: 'Chose NCP for its cost when moving the servers from an IDC to the cloud. Operational issues on NCP prompted consideration of alternatives, and the opening of a GCP region in Korea provided an opportunity to move.',
        },
        approach: [
          {
            ko: 'IDC에서 NCP로 서버 환경을 이전했습니다.',
            en: 'Migrated the server environment from the IDC to NCP.',
          },
          {
            ko: '이후 GCP 한국 리전으로 이전하고, 변경된 서버 환경의 운영과 안정화에 대응했습니다.',
            en: 'Subsequently migrated to GCP’s Korea region and handled operations and stabilisation in the new environment.',
          },
        ],
        diagram: {
          caption: {
            ko: '서버 운영 환경의 이동과 선택 배경',
            en: 'Server environment migrations and the reasons for each move',
          },
          panels: [
            {
              title: { ko: 'IDC', en: 'IDC' },
              items: [{ ko: '기존 서버 운영 환경', en: 'Original server environment' }],
            },
            {
              title: { ko: 'NCP', en: 'NCP' },
              items: [{ ko: '클라우드 이전 시 비용을 고려해 선택', en: 'Selected for cost when moving to the cloud' }],
            },
            {
              title: { ko: 'GCP', en: 'GCP' },
              items: [{ ko: 'NCP 운영 문제와 한국 리전 개설을 계기로 이전', en: 'Moved following NCP operational issues and the Korea region opening' }],
            },
          ],
        },
      },
    ],
    resumeHighlights: [
      {
        ko: '동시 100명 서바이벌 서커스 구현 — Unity·Java Netty 기반 동기화 구조 설계 및 네트워크 부하 최적화',
        en: 'Implemented 100-player Survival Circus with Unity and Java Netty — sync architecture and network load optimisation',
      },
      {
        ko: '이메일·구글·페이스북 계정을 대표 계정 하나로 묶는 통합 계정 시스템 설계·개발 — 다중 캐릭터 및 계정 복구 지원',
        en: 'Designed and built unified accounts merging email, Google and Facebook logins, with multiple characters and account recovery',
      },
      {
        ko: 'Java 서버 GC pause 감소를 위한 라이브 프로파일링과 ZGC 전환',
        en: 'Profiled live Java servers and transitioned to ZGC to reduce GC pauses',
      },
      {
        ko: '멀티스레드 서버 덤프 분석을 통한 데드락 원인 파악·수정',
        en: 'Identified and fixed multithreaded server deadlocks through dump analysis',
      },
      {
        ko: '비용·운영 조건을 고려한 IDC → NCP → GCP 서버 환경 이전 및 안정화',
        en: 'Migrated and stabilised servers from IDC to NCP to GCP, considering cost and operating conditions',
      },
      {
        ko: 'Python·Django 기반 웹 운영 도구 개발',
        en: 'Developed web-based operations tools with Python and Django',
      },
    ],
    stack: [
      'Unity3D',
      'C#',
      'Java (Netty)',
      'Lua',
      'MySQL',
      'Redis',
      'ActiveMQ',
      'NCP',
      'GCP',
      'Django',
      'Go',
    ],
    image: '/projects/zombiehigh.webp',
    gallery: [
      {
        src: '/projects/zombiehigh-elfhigh.webp',
        caption: {
          ko: '5주년 초대형 업데이트 엘프고등학교. 원소 기반 마법 전투를 얹은 RPG 어드벤처',
          en: 'Elf High School, the fifth-anniversary update — an RPG adventure with elemental magic combat.',
        },
      },
      {
        src: '/projects/zombiehigh-flower.webp',
        caption: {
          ko: '4주년 업데이트 플라워 판타지아. 축제 맵과 시즌 수집 콘텐츠 오픈',
          en: 'Flower Fantasia, the fourth-anniversary update — a festival map with seasonal collection content.',
        },
      },
      {
        src: '/projects/zombiehigh-circus.webp',
        caption: {
          ko: '2020년 9월 출시한 100인 서바이벌 모드 서바이벌 서커스. 5라운드 라스트 맨 스탠딩과 대기열 매칭 구현',
          en: 'Survival Circus, the 100-player mode launched in September 2020 — five last-man-standing rounds with queue matchmaking.',
        },
      },
    ],
    sections: [
      {
        heading: { ko: '게임 서비스 & 콘텐츠 개발', en: 'Live Service & Content' },
        items: [
          {
            ko: '모바일 게임 좀비고등학교 라이브 서비스 운영 및 신규 콘텐츠 제작',
            en: 'Ran live service and built new content for the mobile game Zombie High',
          },
          {
            ko: '4주년 플라워 판타지아, 5주년 엘프고등학교, 학교생활 — 기념 초대형 업데이트 개발',
            en: 'Shipped the flagship anniversary updates — Flower Fantasia (4th), Elf High (5th), School Life',
          },
          {
            ko: 'Unity3D 클라이언트 + Java Netty 소켓 서버 기반 멀티플레이 콘텐츠 개발',
            en: 'Built multiplayer content on a Unity3D client with a Java Netty socket server',
          },
          {
            ko: '100인 서바이벌 모드 서바이벌 서커스 등 동시 100명 멀티플레이 구현 — 네트워크 부하 최적화 및 동기화 구조 설계',
            en: 'Implemented 100-player concurrent multiplayer, including the Survival Circus mode — network load optimisation and sync architecture',
          },
          {
            ko: 'Java·Lua 스크립트를 활용한 몬스터 AI, 퀘스트 및 게임 플레이 시스템 제작',
            en: 'Built monster AI, quests and gameplay systems in Java and Lua',
          },
          { ko: 'MMR 기반 매칭 서버 개발 및 운영', en: 'Developed and operated an MMR-based matchmaking server' },
          {
            ko: 'ActiveMQ를 활용한 채팅 및 친구 커뮤니티 시스템 개발',
            en: 'Built chat and friend/community systems on ActiveMQ',
          },
        ],
      },
      {
        heading: { ko: '최적화 & 문제 해결', en: 'Optimisation & Debugging' },
        items: [
          {
            ko: 'Android 성능 프로파일링(Simpleperf, FlameGraph) 및 최적화',
            en: 'Android performance profiling (Simpleperf, FlameGraph) and optimisation',
          },
          {
            ko: 'MySQL 프로시저 작성 및 긴급 데이터 핸들링',
            en: 'Wrote MySQL procedures and handled emergency data operations',
          },
        ],
      },
      {
        heading: { ko: '인프라 & 운영 시스템', en: 'Infrastructure & Ops Tooling' },
        items: [
          {
            ko: 'Jenkins + Slack 연동 자동 빌드·배포 파이프라인 구축',
            en: 'Set up an automated build/deploy pipeline with Jenkins and Slack',
          },
          {
            ko: 'Log4j, Firebase, Elasticsearch를 통한 실시간 로그 수집·분석',
            en: 'Real-time log collection and analysis via Log4j, Firebase and Elasticsearch',
          },
          { ko: 'Python·Django 기반 웹 운영 도구 개발', en: 'Developed web-based operations tools with Python and Django' },
          { ko: 'C# WinForms 기반 쿠폰 자동 생성 툴 제작', en: 'Built a coupon generation tool in C# WinForms' },
          { ko: 'Redis 자동 백업·복구 Python 스크립트 작성', en: 'Wrote Python scripts for automated Redis backup and restore' },
          { ko: 'Go 기반 악성 환불 유저 제재 시스템 개발', en: 'Built a refund-abuse sanction system in Go' },
          { ko: 'JWT 인증 기반 CS 페이지 개발', en: 'Built a JWT-authenticated customer support page' },
        ],
      },
    ],
  },

  {
    slug: 'krafton',
    company: { ko: '크래프톤 · 펍지랩스', en: 'KRAFTON · PUBG Labs' },
    title: { ko: '포켓크루', en: 'Pocket Crew' },
    period: { ko: '2017.02 — 2018.01', en: 'Feb 2017 — Jan 2018' },
    summary: {
      ko: '신규 모바일 게임의 UI·전투·AI 구현과 Flask 기반 서버 연동, 빌드 자동화.',
      en: 'UI, combat and AI for a new mobile title, with a Flask backend and automated builds.',
    },
    resumeHighlights: [
      {
        ko: 'Unity 클라이언트 UI·전투·AI 구현 및 Python Flask 서버 기반 게임 콘텐츠 개발·연동',
        en: 'Implemented Unity UI, combat and AI, with game content development and integration on a Python Flask server',
      },
      {
        ko: 'Python·Flask 기반 웹 운영 도구 개발 및 Docker·Jenkins 기반 자동 빌드·테스트 시스템 구축',
        en: 'Developed web-based operations tools with Python and Flask, and automated builds and tests with Docker and Jenkins',
      },
    ],
    stack: ['Unity3D', 'C#', 'Python (Flask)', 'Docker', 'Jenkins'],
    image: '/projects/pocketcrew.webp',
    sections: [
      {
        heading: { ko: '게임 개발', en: 'Game Development' },
        items: [
          { ko: '모바일 게임 포켓크루 신규 개발 참여', en: 'Contributed to the new mobile title Pocket Crew' },
          {
            ko: 'Unity3D 클라이언트에서 UI·전투 시스템·AI 구현',
            en: 'Implemented UI, combat systems and AI on the Unity3D client',
          },
          {
            ko: 'Python Flask 기반 웹 서버를 활용한 게임 콘텐츠 제작 및 연동',
            en: 'Built and wired game content against a Python Flask web server',
          },
        ],
      },
      {
        heading: { ko: '운영 & 자동화', en: 'Ops & Automation' },
        items: [
          { ko: 'Python·Flask 기반 웹 운영 도구 개발', en: 'Developed web-based operations tools with Python and Flask' },
          {
            ko: 'Docker + Jenkins를 활용한 자동 빌드·테스트 시스템 구축',
            en: 'Set up automated build and test with Docker and Jenkins',
          },
        ],
      },
    ],
  },

  {
    slug: 'vanillatactics',
    company: { ko: '넥스쳐 (파티게임즈)', en: 'Nexture (Pati Games)' },
    title: { ko: '바닐라택틱스', en: 'Vanilla Tactics' },
    period: { ko: '2015.12 — 2017.02', en: 'Dec 2015 — Feb 2017' },
    summary: {
      ko: '신작 모바일 게임의 UI·전투·AI 등 핵심 콘텐츠와 쉐이더를 구현. 공개 이후 회사 사정으로 중단.',
      en: 'Core content — UI, combat, AI — and shaders for a new mobile title, shelved after its public reveal.',
    },
    resumeHighlights: [
      {
        ko: 'Unity 클라이언트·C# 웹 서버로 UI·전투·AI 구현 및 아트팀과 협업한 쉐이더 개발',
        en: 'Implemented UI, combat and AI on a Unity client and C# web server, and developed shaders with the art team',
      },
      {
        ko: 'Unity 클라이언트와 C# 웹 서버에서 데이터 모델·게임 로직을 공유하고, 공통 로직으로 클라이언트의 게임 진행 결과를 서버에서 검증',
        en: 'Shared data models and game logic between the Unity client and C# web server, using the shared logic to validate client gameplay results on the server',
      },
      {
        ko: 'MongoDB·Redis 데이터 저장·캐싱 구조 설계 및 Jenkins 자동 빌드 파이프라인 구축',
        en: 'Designed MongoDB and Redis storage and caching, and built a Jenkins automated build pipeline',
      },
    ],
    stack: ['Unity3D', 'C#', 'HLSL', 'MongoDB', 'Redis', 'Jenkins'],
    image: '/projects/vanilla-tactics.webp',
    sections: [
      {
        heading: { ko: '게임 개발', en: 'Development' },
        items: [
          { ko: '모바일 게임 바닐라택틱스 신규 개발', en: 'Developed the new mobile title Vanilla Tactics' },
          {
            ko: 'Unity3D 클라이언트 및 C# 기반 웹 서버로 UI·전투·AI 등 핵심 콘텐츠 구현',
            en: 'Implemented core content — UI, combat, AI — on a Unity3D client with a C# web server',
          },
          {
            ko: '클라이언트와 서버가 데이터 모델·게임 로직을 공유하도록 구성하고, 공통 로직을 활용해 클라이언트의 게임 진행 결과를 서버에서 검증',
            en: 'Shared data models and game logic across client and server, and used the common logic for server-side validation of client gameplay results',
          },
          { ko: '아트팀과 협업하여 Unity 쉐이더 코드 작성', en: 'Wrote Unity shader code in collaboration with the art team' },
          {
            ko: '2016년 신작 라인업 발표에서 공개, 이후 회사 사정으로 프로젝트 중단',
            en: 'Revealed in the 2016 new-title line-up; the project was later shelved for company reasons',
          },
        ],
      },
      {
        heading: { ko: '운영 & 인프라', en: 'Ops & Infrastructure' },
        items: [
          { ko: 'Jenkins 기반 자동 빌드 파이프라인 구축', en: 'Built an automated build pipeline on Jenkins' },
          {
            ko: 'MongoDB + Redis를 활용한 데이터 저장 및 캐싱 구조 설계',
            en: 'Designed the storage and caching layer with MongoDB and Redis',
          },
        ],
      },
    ],
  },

  {
    slug: 'ilovecoffee',
    resumeVisible: false,
    company: { ko: '넥스쳐 (파티게임즈)', en: 'Nexture (Pati Games)' },
    title: { ko: '아이러브커피', en: 'I Love Coffee' },
    period: { ko: '2015.12 — 2017.02', en: 'Dec 2015 — Feb 2017' },
    summary: {
      ko: 'Cocos2d-X 기반 라이브 서비스 운영. 시즌 테마와 이벤트·UI 콘텐츠를 제작·유지보수.',
      en: 'Live service on a Cocos2d-X client — seasonal themes and event/UI content, built and maintained.',
    },
    resumeHighlights: [
      {
        ko: 'Cocos2d-X 기반 모바일 게임 라이브 서비스 운영',
        en: 'Ran live service for the Cocos2d-X mobile game',
      },
      {
        ko: 'Lua 스크립트로 시즌 테마·이벤트·UI 콘텐츠 제작 및 유지보수',
        en: 'Built and maintained seasonal themes, events and UI content with Lua scripting',
      },
    ],
    stack: ['Cocos2d-X', 'Lua'],
    image: '/projects/ilovecoffee.webp',
    gallery: [
      {
        src: '/projects/ilovecoffee-themes.webp',
        caption: {
          ko: '아이러브커피의 시즌 테마 꾸미기 아이템. Cocos2d-X와 Lua로 이벤트·UI 콘텐츠 제작·유지보수',
          en: "I Love Coffee's seasonal decoration themes — event and UI content built and maintained on Cocos2d-X with Lua.",
        },
      },
    ],
    sections: [
      {
        heading: { ko: '라이브 서비스', en: 'Live Service' },
        items: [
          { ko: '모바일 게임 아이러브커피 라이브 서비스 운영', en: 'Ran live service for the mobile game I Love Coffee' },
          {
            ko: 'Cocos2d-X 클라이언트 및 Lua 스크립트를 활용해 UI/이벤트 콘텐츠 제작 및 유지보수',
            en: 'Built and maintained UI and event content on a Cocos2d-X client with Lua scripting',
          },
        ],
      },
    ],
  },

  {
    slug: 'maxonsoft',
    resumeVisible: false,
    company: { ko: '맥스온소프트', en: 'MaxonSoft' },
    title: { ko: '월드 히어로즈 온라인', en: 'World Heroes Online' },
    period: { ko: '2014.06 — 2015.12', en: 'Jun 2014 — Dec 2015' },
    summary: {
      ko: 'PC 온라인 게임의 UI·전투 시스템과 Windows 패치 런처 개발.',
      en: 'UI and combat systems for a PC online game, plus a Windows patch launcher.',
    },
    resumeHighlights: [
      {
        ko: 'Unity 기반 PC 온라인 게임 UI·전투 시스템 구현 및 아트팀과 협업한 쉐이더 개발',
        en: 'Implemented UI and combat for a Unity PC online game and developed shaders with the art team',
      },
      {
        ko: 'C# 기반 Windows 패치 런처 개발',
        en: 'Built the Windows patch launcher in C#',
      },
    ],
    stack: ['Unity3D', 'C#', 'HLSL', 'WinForms'],
    image: '/projects/worldheroes.webp',
    sections: [
      {
        heading: { ko: '주요 업무', en: 'Highlights' },
        items: [
          { ko: 'PC 게임 월드 히어로즈 온라인 신규 개발 참여', en: 'Contributed to the new PC title World Heroes Online' },
          {
            ko: 'Unity3D 클라이언트를 활용해 UI·전투 시스템 등 콘텐츠 구현',
            en: 'Implemented content including UI and combat systems on the Unity3D client',
          },
          { ko: '아트팀과 협업하여 Unity 쉐이더 코드 제작', en: 'Wrote Unity shader code in collaboration with the art team' },
          { ko: 'C# 기반 Windows 패치 런처 개발', en: 'Built the Windows patch launcher in C#' },
        ],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* 스킬                                                                 */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  heading: I18n
  items: { label: string; detail: I18n }[]
}

export const skills: SkillGroup[] = [
  {
    heading: { ko: 'Web & Platform', en: 'Web & Platform' },
    items: [
      {
        label: 'TypeScript / React',
        detail: {
          ko: 'WebPETO·GenWorld R&D, Next.js App Router, TanStack React Query, PWA',
          en: 'WebPETO and GenWorld R&D, Next.js App Router, TanStack React Query, PWA',
        },
      },
      {
        label: 'Build & Runtime',
        detail: {
          ko: 'Vite, Webpack, WebGL, Windows/macOS, iOS/Android 네이티브 연동',
          en: 'Vite, Webpack, WebGL, Windows/macOS and iOS/Android native integration',
        },
      },
    ],
  },
  {
    heading: { ko: 'Client', en: 'Client' },
    items: [
      {
        label: 'Unity3D / C#',
        detail: {
          ko: '실시간 멀티플레이, Addressables, 렌더링·메모리 최적화, 에디터 툴링',
          en: 'Real-time multiplayer, Addressables, rendering and memory optimisation, editor tooling',
        },
      },
      {
        label: 'Cross-Platform',
        detail: {
          ko: 'iOS/Android 네이티브 연동, Windows/macOS 출시, WebGL 빌드, C++ 플러그인',
          en: 'iOS/Android native bridging, Windows/macOS releases, WebGL builds, C++ plugins',
        },
      },
    ],
  },
  {
    heading: { ko: 'Server & Infra', en: 'Server & Infra' },
    items: [
      {
        label: 'Realtime Server',
        detail: {
          ko: 'Java Netty 소켓 서버 — 동시 100명 멀티플레이, 매칭·랭킹, 채팅(ActiveMQ) / Java 서버 통신에 Protocol Buffers 활용',
          en: 'Java Netty socket servers — 100-player multiplayer, matchmaking/ranking, chat (ActiveMQ) / Protocol Buffers for Java server communication',
        },
      },
      {
        label: 'Backend & Data',
        detail: {
          ko: 'C# 웹 서버, Spring Boot, Nest.js, Django·Flask, Node.js, Go / MySQL, Redis, MongoDB',
          en: 'C# web servers, Spring Boot, Nest.js, Django/Flask, Node.js, Go / MySQL, Redis, MongoDB',
        },
      },
      {
        label: 'Cloud & Delivery',
        detail: {
          ko: 'GCP, NCP, AWS, Docker, Firebase / Jenkins 기반 빌드·배포 자동화',
          en: 'GCP, NCP, AWS, Docker, Firebase / Jenkins build and deploy automation',
        },
      },
    ],
  },
  {
    heading: { ko: 'Performance & LiveOps', en: 'Performance & LiveOps' },
    items: [
      {
        label: 'Profiling',
        detail: {
          ko: 'Simpleperf·FlameGraph, Unity Profiler, JVM GC 튜닝(ZGC 전환)',
          en: 'Simpleperf/FlameGraph, Unity Profiler, JVM GC tuning (ZGC migration)',
        },
      },
      {
        label: 'Operations',
        detail: {
        ko: '운영 도구 개발, 장애 대응, 긴급 데이터 처리, 로그 분석(Log4j, Elasticsearch)',
          en: 'Internal ops tools, incident response, emergency data handling, log analysis (Log4j, Elasticsearch)',
        },
      },
    ],
  },
  {
    heading: { ko: 'Platform & AI', en: 'Platform & AI' },
    items: [
      {
        label: 'LLM Applications',
        detail: {
          ko: 'AI NPC(Companion)·AI 월드 생성 R&D, LLM 기반 코드 리뷰 도구',
          en: 'AI NPC (Companion) and AI world generation R&D, LLM-based code review tooling',
        },
      },
      {
        label: 'Creator Platform',
        detail: {
          ko: 'ZEPETO Studio, SDK 모듈, 월드 템플릿, 사내 공용 에셋 라이브러리',
          en: 'ZEPETO Studio, SDK modules, world templates, internal shared asset library',
        },
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* 학력 · 기타                                                          */
/* ------------------------------------------------------------------ */

export const education = [
  {
    school: { ko: '인하대학교', en: 'Inha University' },
    detail: { ko: '소프트웨어융합공학 · 학점 4.29/4.5', en: 'Software Convergence Engineering · GPA 4.29/4.5' },
    period: { ko: '2018.03 — 2022.02', en: 'Mar 2018 — Feb 2022' },
  },
  {
    school: { ko: 'NHN NEXT', en: 'NHN NEXT' },
    detail: { ko: '', en: '' },
    period: { ko: '2014.03 — 2018.02', en: 'Mar 2014 — Feb 2018' },
  },
  {
    school: {
      ko: '한국디지털미디어고등학교 · 해킹방어과',
      en: 'Korea Digital Media High School · Hacking & Security',
    },
    detail: { ko: '', en: '' },
    period: { ko: '2011.03 — 2014.02', en: 'Mar 2011 — Feb 2014' },
  },
]

export const languages = [
  {
    label: { ko: '영어', en: 'English' },
    detail: {
      ko: 'TOEIC 950 (LC 490 · RC 460) · 2021.02.21 응시',
      en: 'TOEIC 950 (LC 490 · RC 460), taken Feb 21, 2021',
    },
  },
]

export const misc = [
  {
    label: { ko: '현역 산업기능요원 복무', en: 'Industrial Technical Personnel (military service)' },
    detail: { ko: '2015.01 — 2017.11', en: 'Jan 2015 — Nov 2017' },
  },
  {
    label: { ko: '정보처리산업기사', en: 'Industrial Engineer Information Processing' },
    detail: { ko: '2017.05.26', en: '26 May 2017' },
  },
  {
    label: { ko: '프로그래밍기능사', en: 'Craftsman Programming' },
    detail: { ko: '2013.07.04', en: '4 Jul 2013' },
  },
]

/* ------------------------------------------------------------------ */
/* 아카이브 — 취업 이전 학생 시절 작업. 이력서에는 넣지 않습니다.          */
/* 출처: 2019년 타임라인 사이트(public/legacy) 원문.                     */
/* ------------------------------------------------------------------ */

export type ArchiveItem = {
  slug: string
  name: I18n
  year: string
  detail: I18n
  stack: string[]
  award?: I18n
  image: string
}

export const archive: ArchiveItem[] = [
  {
    slug: 'blossomera',
    name: { ko: 'BlossoMera', en: 'BlossoMera' },
    year: '2014',
    detail: {
      ko: '사진 속 꽃을 분석해 어떤 꽃인지 알려주는 안드로이드 앱',
      en: 'An Android app that analyses a photo of a flower and names the species',
    },
    stack: ['Android', 'Java'],
    image: '/archive/blossomera.webp',
  },
  {
    slug: 'baekui',
    name: { ko: '백의 (白衣)', en: 'Baek-ui (白衣)' },
    year: '2013',
    detail: {
      ko: '홍화가 지배하는 세상의 이야기를 따라가며 미션을 수행하는 플랫포머',
      en: 'A story-driven platformer set in a world ruled by the red flower',
    },
    stack: ['PC', 'DirectX', 'C++'],
    award: {
      ko: '글로벌 게임제작 경진대회 청소년 인디부문 장려상',
      en: 'Encouragement Award, Global Game Making Competition (youth indie division)',
    },
    image: '/archive/baekui.webp',
  },
  {
    slug: 'fightofkites',
    name: { ko: 'Fight of Kites : 연싸움', en: 'Fight of Kites' },
    year: '2012',
    detail: {
      ko: '연과 함께 달리며 바람 에너지를 모아 겨루는 연싸움 게임',
      en: 'A kite-fighting game where you run with the kite and gather wind energy',
    },
    stack: ['Android', 'Unity3D', 'C#'],
    award: {
      ko: 'SK 특성화고 앱 경진대회 장려상',
      en: 'Encouragement Award, SK vocational high school app competition',
    },
    image: '/archive/fightofkites.webp',
  },
  {
    slug: 'spinsoccer',
    name: { ko: 'SpinSoccer', en: 'SpinSoccer' },
    year: '2012',
    detail: {
      ko: '빙글빙글 돌아가며 서로 튕겨내는 축구 게임',
      en: 'A soccer game where spinning players bounce each other off the pitch',
    },
    stack: ['PC', 'Web', 'C# XNA', 'Box2D'],
    image: '/archive/spinsoccer.webp',
  },
  {
    slug: 'lebeok',
    name: { ko: '레벽', en: 'Lebeok' },
    year: '2012',
    detail: {
      ko: '왼손으로 레이저를 피하면서 오른손으로 벽돌을 깨는 멀티태스킹 게임',
      en: 'A multitasking game: dodge lasers with the left hand, break bricks with the right',
    },
    stack: ['PC', 'C# XNA'],
    image: '/archive/lebeok.webp',
  },
  {
    slug: 'dencode',
    name: { ko: 'DEncode', en: 'DEncode' },
    year: '2011',
    detail: {
      ko: '문자열 Base64 인코딩·디코딩과 각종 수치 변환을 해주는 iOS 앱',
      en: 'An iOS utility for Base64 encoding/decoding and numeric conversion',
    },
    stack: ['iOS', 'Objective-C'],
    image: '/archive/dencode.webp',
  },
  {
    slug: 'ggracing',
    name: { ko: 'GGRacing', en: 'GGRacing' },
    year: '2011',
    detail: {
      ko: '무작위로 뽑힌 고양이들이 서로 싸우며 트랙을 완주하는 레이싱 게임',
      en: 'A racing game where randomly drawn cats brawl their way around the track',
    },
    stack: ['PC', 'DirectX', 'C++'],
    image: '/archive/ggracing.webp',
  },
]

/* ------------------------------------------------------------------ */
/* UI 문자열                                                            */
/* ------------------------------------------------------------------ */

export const ui = {
  projectLabels: {
    selectedWork: { ko: 'Selected Work', en: 'Selected Work' },
    otherWork: { ko: 'More Work', en: 'More Work' },
    role: { ko: '역할', en: 'Role' },
    focus: { ko: '핵심 과제', en: 'Focus' },
    contribution: { ko: '담당 범위', en: 'Contribution' },
    caseStudies: { ko: 'Engineering Notes', en: 'Engineering Notes' },
    context: { ko: '문제와 배경', en: 'Context' },
    approach: { ko: '판단과 구현', en: 'Approach' },
    outcome: { ko: '확인된 결과', en: 'Outcome' },
    moreWork: { ko: '다른 프로젝트 보기', en: 'Explore more work' },
  },
  nav: {
    work: { ko: '프로젝트', en: 'Work' },
    resume: { ko: '이력서', en: 'Resume' },
    contact: { ko: '연락처', en: 'Contact' },
  },
  /**
   * 섹션 제목은 두 언어 모두 영어입니다. 한 화면에서 'About / 경력 /
   * Selected Work' 처럼 섞이면 어느 쪽도 아니게 읽혀서, 라벨은 영어로
   * 통일하고 본문만 언어를 따릅니다.
   */
  sections: {
    about: { ko: 'About', en: 'About' },
    work: { ko: 'Projects', en: 'Projects' },
    archive: { ko: 'Archive', en: 'Archive' },
    skills: { ko: 'Skills', en: 'Skills' },
    contact: { ko: 'Contact', en: 'Contact' },
    experience: { ko: 'Experience', en: 'Experience' },
    gallery: { ko: 'Screenshots', en: 'Screenshots' },
    education: { ko: 'Education', en: 'Education' },
    languages: { ko: 'Languages', en: 'Languages' },
    misc: { ko: 'Other', en: 'Other' },
  },
  actions: {
    savePdf: { ko: 'PDF로 저장', en: 'Save as PDF' },
    viewProject: { ko: '자세히 보기', en: 'View project' },
    back: { ko: '돌아가기', en: 'Back' },
    present: { ko: '현재', en: 'Present' },
  },
  /**
   * 경력 목록 바로 아래 한 줄. 2015-2017 의 짧은 재직들은 회사를 고른
   * 결과가 아니라 지정업체 제도의 결과라, 그 질문이 생기는 자리에서
   * 사실만 답합니다. 변명하지 않습니다 — 기간과 제도 이름이면 충분합니다.
   */
  /** 복무 괄호에 붙는 라벨. 어느 줄이 묶이는지는 괄호가 이미 보여줍니다. */
  experienceNote: {
    ko: '현역 산업기능요원 복무 · 2015.01 — 2017.11',
    en: 'Military service · industrial technical personnel · Jan 2015 — Nov 2017',
  },

  archiveNote: {
    ko: '학생 시절(2011–2014), 혼자 또는 팀으로 만든 것들',
    en: 'Student work, 2011–2014 — on my own or in small teams',
  },
  closing: {
    ko: '새로운 팀과 새로운 문제를 찾고 있습니다.',
    en: 'Open to new teams and new problems.',
  },

  /** 마무리 문장 아래 한 줄. 위 문장과 붙이지 않습니다. */
  closingNote: {
    ko: '편하게 연락 주세요.',
    en: 'Get in touch.',
  },
}

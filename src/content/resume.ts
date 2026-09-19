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
    ko: 'TypeScript·React 기반 웹 플랫폼과 Unity 클라이언트, 서버 및 라이브 운영을 경험한 소프트웨어 엔지니어입니다. 현재 네이버제트에서 ZEPETO 앱을 브라우저로 옮기는 WebPETO·WebGL 런타임과, AI가 쓴 월드 코드를 실행·격리·공유하는 GenWorld R&D를 맡고 있습니다. 그 전에는 Unity 클라이언트의 월드 내 YouTube 플레이어·다중 초대 출시, NewWorld Windows·macOS 지원, ZEPETO Studio·SDK 개발을 맡았습니다. 이전에는 킹갓캐슬의 개발·출시·운영을 메인 프로그래머로 담당하고, 좀비고등학교의 콘텐츠·서버·운영 시스템을 개발했습니다.',
    en: 'Software engineer across TypeScript/React web platforms, Unity clients, servers and live operations. At NAVER Z, I work on WebPETO and the WebGL runtimes that bring the ZEPETO app to the browser and on GenWorld R&D for running AI-written world code, after shipping in-world features in the Unity client. Previously, main programmer for King God Castle from development through live operations, and built content, server and ops systems for Zombie High.',
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
      ko: '현재 [[네이버제트]]에서 [[ZEPETO|/work/naverz/]] 앱을 브라우저로 옮기는 WebPETO와 아바타·마이룸·월드 WebGL 런타임, 그리고 AI 코딩 앱이 월드 코드를 쓰고 사용자가 브라우저에서 실행·검토·공유하는 GenWorld R&D를 맡고 있습니다.',
      en: 'At [[NAVER Z]], I work on WebPETO and the avatar, MyRoom and world WebGL runtimes that bring the [[ZEPETO|/work/naverz/]] app to the browser, and on GenWorld R&D, where AI coding apps write world code that users run, review and share in the browser.',
    },
    {
      ko: 'ZEPETO Unity 클라이언트에서는 월드 내 YouTube 플레이어와 다중 초대를 출시하고 NewWorld의 Windows·macOS 지원을 맡았습니다. 실시간 멀티플레이 월드를 개발·운영했고, LLM 기반 AI NPC와 월드 생성 R&D도 진행했습니다.',
      en: 'In the ZEPETO Unity client I shipped the in-world YouTube player and multi-user invites and brought NewWorld to Windows and macOS. I have built and operated real-time multiplayer worlds, and run LLM-based R&D on AI NPCs and world generation.',
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
    title: { ko: '소프트웨어 엔지니어 · 웹·Unity', en: 'Software Engineer · Web & Unity' },
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
    /**
     * 사례가 많은 프로젝트에서 묶음 제목. 같은 group 이 연속으로 이어지면
     * 상세 페이지가 그 앞에 소제목을 한 번 그립니다 (WorkDetailPage).
     */
    group?: I18n
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
      ko: 'ZEPETO 앱을 브라우저로 옮기는 WebPETO와 아바타·마이룸·월드 WebGL 런타임, AI가 쓴 월드 코드를 실행·격리·공유하는 GenWorld, Unity 클라이언트의 월드 기능 출시와 NewWorld의 Windows·macOS 지원.',
      en: 'WebPETO and the avatar, MyRoom and world WebGL runtimes that bring the ZEPETO app to the browser, GenWorld for running, isolating and sharing AI-written world code, and Unity client world features with NewWorld on Windows and macOS.',
    },
    overview: {
      role: { ko: '소프트웨어 엔지니어 · 웹·Unity', en: 'Software Engineer · Web & Unity' },
      focus: {
        ko: '기존 앱의 아바타·상점·마이룸·월드 경험을 브라우저에서 제공하고, AI가 만든 월드를 안전하게 실행·검토·공유하는 제작 환경을 만드는 것.',
        en: 'Bringing the app’s avatar, shop, MyRoom and world experiences to the browser, and building an environment that runs, inspects and shares AI-authored worlds safely.',
      },
      contribution: {
        ko: 'React·RTK Query UI와 API 상태 관리, JavaScript–Unity 브리지, WebGL 빌드 경량화와 로딩 경로 개선, 원본 Unity 런타임의 WebGL 이식, MCP 서버·OAuth 연결 도구·격리 실행 런타임을 개발했습니다. Unity 클라이언트에서는 월드 내 YouTube 플레이어·다중 초대·NewWorld PC 지원을 출시하고 SDK 모듈의 PC 대응을 맡았습니다.',
        en: 'Developed React and RTK Query interfaces with API state, JavaScript–Unity bridges, smaller WebGL builds with staged loading, WebGL ports of the original Unity runtimes, and an MCP server, OAuth connector and isolated execution runtime. In the Unity client, shipped the in-world YouTube player, multi-user invites and NewWorld on PC, and adapted SDK modules for PC.',
      },
    },
    caseStudies: [
      /* ---------------------------------------------- Web Platform */
      {
        id: 'webpeto-loading',
        group: { ko: 'Web Platform — WebPETO · WebGL 런타임', en: 'Web Platform — WebPETO & WebGL runtimes' },
        title: { ko: 'WebPETO — 아바타 첫 화면까지의 로딩 경로 개선', en: 'WebPETO — improving the path to the first avatar render' },
        context: {
          ko: '웹 상단의 아바타 뷰어는 ZEPETO Studio용 범용 텍스처 편집기 빌드를 그대로 쓰고 있어 편집 기능과 리소스를 함께 내려받았습니다. Unity 초기화와 캐릭터 데이터·부가 리소스 로딩도 첫 화면을 보여주는 경로에 걸려 있어, Unity 빌드와 웹 클라이언트 양쪽에서 다운로드 용량과 표시 순서를 함께 개선했습니다.',
          en: 'The avatar viewer at the top of the page reused a general-purpose texture-editor build made for ZEPETO Studio, so editing features and their resources were downloaded too. Unity startup, character data and optional content also sat on the path to the first render, so I addressed download size and loading order on both the Unity build and the web client.',
        },
        approach: [
          {
            ko: 'Unity 쪽에서는 텍스처 편집·UV·디버그 UI와 불필요한 패키지·씬을 제거해 아바타 뷰어 전용 빌드로 전환했습니다. Brotli 압축, IL2CPP 크기 우선 코드 생성과 코드 스트리핑을 적용하고, SDK가 리플렉션으로 생성하는 타입은 link.xml로 보존했습니다. 빌드 파이프라인이 8MB짜리 SDK 내부 리소스를 데이터 아카이브에 중복으로 넣던 회귀를 찾아 막고, WebGL2·Safari에서 실패하는 셰이더는 런타임 폴백으로 대체했습니다.',
            en: 'On the Unity side, removed texture-editing, UV and debug interfaces plus unnecessary packages and scenes, turning the build into a dedicated avatar viewer. Applied Brotli compression, size-focused IL2CPP code generation and code stripping, preserving SDK types created through reflection with link.xml. Found and stopped a pipeline regression that baked an 8 MB internal SDK resource into the data archive twice, and added runtime fallbacks for shaders that fail on WebGL2 and Safari.',
          },
          {
            ko: '웹 클라이언트에서는 로그인 화면의 유휴 시간과 로그인 의도를 이용해 빌드 파일을 미리 받고 런타임을 준비했습니다. 캐시된 캐릭터를 먼저 표시한 뒤 최신 응답과 다를 때만 갱신하고, 배경·액세서리 등 선택 슬롯은 첫 표시 이후로 미뤘습니다. 데이터 절약 모드에서는 자동 사전 로딩을 생략하고, 빌드 버전을 캐시 키로 써 재배포 뒤에도 브라우저 캐시가 맞게 동작하도록 했습니다.',
            en: 'On the web client, used idle time and login intent on the sign-in screen to prefetch build files and prepare the runtime. Rendered cached character data first, refreshed only when the latest response differed, and deferred optional slots such as backgrounds and accessories until after the initial render. Skipped automatic preloading in data-saving mode and keyed the browser cache by build version so redeploys stayed consistent.',
          },
          {
            ko: '초기 WASM 힙을 32MB에서 128MB로 늘려 힙 확장 정지를 없애고, SendMessage 큐 때문에 생기던 마우스 입력 지터는 목표 프레임을 60fps로 올려 해결했습니다. 초기화·메타데이터 전달·콘텐츠 로드 단계에 성능 마커를 남겨 측정했습니다. Unity를 Three.js로 대체하는 PoC(에셋 번들→GLB 변환 서버)도 만들어 비교했지만, 콜드 로딩 4~8초 대 Unity 1.2초와 셰이더·텍스처 재구현 부담을 근거로 Unity 유지를 결정하고 문서화했습니다.',
            en: 'Raised the initial WASM heap from 32 MB to 128 MB to remove heap-growth stalls, and fixed mouse-input jitter caused by SendMessage queuing by targeting 60 fps. Instrumented runtime startup, metadata delivery and content loading. Also built a Three.js replacement PoC with an asset-bundle-to-GLB conversion server, but measured 4–8 s cold loads against 1.2 s on Unity and documented the decision to keep Unity given the shader and texture re-implementation cost.',
          },
        ],
        outcome: {
          ko: '2026년 5월 작업 기준(6월 기록), 초기 WebGL 압축 산출물(data·wasm·framework) 합계를 약 13.29MB에서 7.64MB로 약 42% 줄였고, 첫 gzip 산출물 17.2MB와 비교하면 절반 이하입니다. 테스트 서버에서 측정한 콜드 로그인 클릭→아바타 표시 시간은 약 2.6초에서 1.2초(중앙값)로 줄었습니다. 수치는 해당 빌드 파일의 전송 용량과 테스트 환경 기준이며, 서비스 지표가 아닙니다.',
          en: 'As of the May 2026 work (recorded in June), the combined compressed WebGL data, wasm and framework files fell from about 13.29 MB to 7.64 MB, roughly 42%, and to under half of the original 17.2 MB gzip artefact. Cold time from login click to avatar reveal on a test server dropped from about 2.6 s to a 1.2 s median. These figures measure build files and a test environment, not production metrics.',
        },
      },
      {
        id: 'webpeto-react',
        group: { ko: 'Web Platform — WebPETO · WebGL 런타임', en: 'Web Platform — WebPETO & WebGL runtimes' },
        title: { ko: 'WebPETO — Android 앱을 명세로 삼은 React 전환과 백엔드 어댑터', en: 'WebPETO — React migration and a backend adapter with the Android app as the spec' },
        context: {
          ko: 'DOM 기반으로 시작한 상점 프로토타입을 홈·피드·프로필·메시지·라이브·클럽 등 앱의 비월드 화면 전반으로 넓히면서, 기존 Android 앱의 API·문구·딥링크·이동 규칙을 그대로 따라야 했습니다. 브라우저는 모바일 클라이언트로 인증되지 않았고, Unity WebGL은 cross-origin isolation을 요구했습니다.',
          en: 'A DOM-based shop prototype grew into the app’s non-world surfaces — home, feed, profile, messages, live, clubs — and had to follow the Android app’s APIs, copy, deep links and navigation rules. The browser could not authenticate as the mobile client, and Unity WebGL required cross-origin isolation.',
        },
        approach: [
          {
            ko: 'React 19 앱 셸과 Redux Toolkit·RTK Query 상태 계층을 피처 플래그 뒤에 두고 화면을 단계적으로 옮겼습니다. 기존 API 모듈은 queryFn으로 감싸 재사용하고, 모듈 전역 상태는 useSyncExternalStore 브리지로 연결했으며, 라우트마다 ErrorBoundary를 두어 한 화면의 실패가 앱 전체로 퍼지지 않게 했습니다. 변경 뒤에는 전체 재조회 대신 서버 확인 응답으로 캐시를 패치했고, 기존 화면은 비교용 폴백으로 남겼습니다.',
            en: 'Placed a React 19 app shell and a Redux Toolkit/RTK Query state layer behind feature flags and moved surfaces incrementally. Reused existing API modules through queryFn, bridged module-level state with useSyncExternalStore, and wrapped each route in an ErrorBoundary so one failing surface could not take down the app. Patched caches from server acknowledgements instead of blanket refetches, and kept legacy surfaces as comparison fallbacks.',
          },
          {
            ko: 'Android 앱을 실행 가능한 명세로 삼았습니다. strings.xml에서 문자열 테이블을 생성하는 파이프라인, 원시 hex 색상을 디자인 토큰으로 바꾸는 치환, 앱 scheme 딥링크·공유 URL·직접 경로를 하나의 해석 경로로 처리하는 파서를 만들고, 하드코딩 문구나 누락 키가 있으면 실패하는 smoke 검사로 강제했습니다.',
            en: 'Treated the Android app as the executable spec: a pipeline generating the string table from strings.xml, replacement of raw hex colours with design tokens, and a parser routing app-scheme deep links, share URLs and direct paths through one path, all enforced by smoke checks that fail on hard-coded copy or missing keys.',
          },
          {
            ko: 'Vite 개발·프리뷰 서버를 백엔드 어댑터로 구성했습니다. 한 라우트 맵으로 실서비스·RC·개발 환경 프록시를 전환하고 모바일 클라이언트 헤더를 주입하며, COOP·COEP·CORP 헤더와 Unity 파일용 Content-Encoding·immutable 캐시 헤더를 처리했습니다. 웹이 라우팅·입력·UI를, Unity가 아바타 렌더링을 맡도록 경계를 나누고 SendMessage와 준비·로드 콜백으로 캐릭터 메타데이터·카메라 상태를 전달했습니다.',
            en: 'Configured the Vite dev and preview server as a backend adapter: one route map switching production, RC and dev proxies with mobile-client header injection, plus COOP/COEP/CORP headers and Content-Encoding and immutable cache headers for Unity files. Kept routing, input and interfaces in the web layer and avatar rendering in Unity, passing character metadata and camera state through SendMessage and readiness/load callbacks.',
          },
        ],
        outcome: {
          ko: '20여 개 라우트를 React로 전환하고 홈을 React 기본 화면으로 바꿨습니다(2026.06). 일부 화면은 여전히 이관 중인 내부 프로토타입이며, 공개 서비스가 아닙니다.',
          en: 'Converted more than 20 routes to React and made the React home the default (June 2026). Some surfaces are still migrating; this remains an internal prototype, not a public service.',
        },
      },
      {
        id: 'webpeto-qa',
        group: { ko: 'Web Platform — WebPETO · WebGL 런타임', en: 'Web Platform — WebPETO & WebGL runtimes' },
        title: { ko: 'WebPETO — 인증된 WebGL 앱을 위한 QA 하네스와 단일 호스트 배포', en: 'WebPETO — a QA harness and single-host releases for an authenticated WebGL app' },
        context: {
          ko: '인증이 필요한 20여 개 라우트와 Unity 캔버스, 실제 결제·선물 같은 변경 동작이 있는 앱을 단위 테스트 프레임워크 없이 빠르게 바꿔야 했습니다. 배포는 Windows 호스트 한 대에서 이뤄져 잘못된 릴리스를 빨리 되돌릴 수 있어야 했습니다.',
          en: 'The app had more than 20 authenticated routes, a Unity canvas and real mutations such as purchases and gifts, and had to change quickly without a unit-test framework. Releases ran on a single Windows host, so a bad release had to be reversible fast.',
        },
        approach: [
          {
            ko: '빌드 전 게이트로 정적·런타임 계약을 검사하는 Node smoke 검사를 두고, Playwright로 전체 라우트를 iPhone Safari 에뮬레이션·safaridriver 기반 실제 Safari·Windows Chromium에서 스캔했습니다. 스캔은 기본 읽기 전용이고, 변경 프로브는 읽기 확인과 실행 확인 두 플래그를 함께 켜야만 동작합니다.',
            en: 'Added Node smoke checks over static and runtime contracts as a pre-build gate, and Playwright scans of every route in iPhone Safari emulation, real Safari via safaridriver and Windows Chromium. Scans are read-only by default; mutation probes run only when a read-back flag and a confirm flag are both set.',
          },
          {
            ko: '실행마다 요약·콘솔·네트워크 기록·스크린샷을 산출물로 남기고 앱 안의 리포트 페이지에서 볼 수 있게 했습니다. 릴리스 게이트는 커밋 SHA나 배포 시각이 다르면 리포트를 stale로 표시하고, CI는 PR마다 smoke·타입 검사·빌드를 실행합니다.',
            en: 'Recorded a summary, console and network logs and screenshots per run and rendered them in an in-app report page. The release gate marks reports stale when the commit SHA or deploy time mismatches, and CI runs smoke, typecheck and build on every PR.',
          },
          {
            ko: '배포는 타임스탬프 릴리스 디렉터리를 만들고 정적 서빙 설정을 바꿔 전환하며, HTTPS 헬스체크가 실패하면 자동으로 이전 설정으로 되돌립니다. 최근 릴리스 5개만 보존합니다.',
            en: 'Releases create a timestamped directory and switch the static serving configuration, rolling back automatically when the HTTPS health check fails and keeping the last five releases.',
          },
        ],
        outcome: {
          ko: '라우트 정의 30개, 계약 모듈 1,272개를 갖췄고, 2026년 6월 마지막 점검에서 대상 라우트 5개가 오류 없이 통과했습니다.',
          en: 'Reached 30 route definitions and 1,272 contract modules; the final June 2026 run passed all five target routes with no errors.',
        },
      },
      {
        id: 'web-lab-auth',
        group: { ko: 'Web Platform — WebPETO · WebGL 런타임', en: 'Web Platform — WebPETO & WebGL runtimes' },
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
        id: 'myroom-webgl',
        group: { ko: 'Web Platform — WebPETO · WebGL 런타임', en: 'Web Platform — WebPETO & WebGL runtimes' },
        title: { ko: 'MyRoom WebGL — 원본 Unity 런타임을 브라우저로 옮기고 동일함을 증명하기', en: 'MyRoom WebGL — porting the original Unity runtime to the browser and proving parity' },
        context: {
          ko: 'ZEPETO 마이룸을 웹에서 보여주려면 glTF 변환 뷰어를 새로 만들거나 앱의 원본 Unity 런타임을 WebGL로 올려야 했습니다. 처음 시도한 glTF 프록시 방식은 렌더링을 재현할 수 없어 폐기하고, 원본 런타임을 옮기되 원본과 같다는 것을 기계적으로 증명하는 쪽을 택했습니다.',
          en: 'Showing MyRoom on the web meant either building a new glTF viewer or running the app’s original Unity runtime in WebGL. The first glTF proxy attempt could not reproduce the rendering and was dropped in favour of porting the original runtime while proving, mechanically, that it stayed the original.',
        },
        approach: [
          {
            ko: '앱 릴리스의 커밋을 고정하고 파일 단위 3-way 머지로 WebGL 어댑터만 추가했습니다. 모든 차이를 바이트 동일·의미 동일·의도된 웹 어댑터·원본 버그 수정·알려진 부채로 분류하는 드리프트 매니페스트와, 설명되지 않은 차이가 하나라도 있으면 실패하는 검증기, SHA-256 프로비넌스 기록을 만들었습니다.',
            en: 'Pinned the app release commit and added only WebGL adapters through per-file three-way merges. Built a drift manifest classifying every difference as byte-identical, semantically equivalent, intentional web adapter, canonical bug fix or known debt, with verifiers that fail on any unexplained difference and SHA-256 provenance records.',
          },
          {
            ko: 'Safari(ANGLE-on-Metal)에서 생기는 검은 프레임·조명 타일 결손·CSG 벽 구멍 아티팩트·아웃라인과 퍼 셰이더 실패를 원인별로 수정했습니다. WebGL이 읽지 못하는 LZMA 번들은 LZ4로 바꾸고, 호스팅 텍스처 용량과 동시 디코드 제한, CJK 폰트 포인터 재매핑, 종료 시 화이트스크린을 처리했습니다.',
            en: 'Fixed Safari (ANGLE-on-Metal) black frames, dropped light tiles, CSG wall-hole artefacts and outline/fur shader failures cause by cause. Replaced LZMA bundles WebGL cannot read with LZ4, capped hosted texture sizes and concurrent decodes, remapped CJK font pointers and fixed a white screen on exit.',
          },
          {
            ko: '브라우저에 gRPC가 없어 다인 홈파티에는 WebSocket 릴레이 계약을 설계하고, 재접속을 스테이징 루트·델타 저널·순수 리듀서로 구성한 원자적 트랜잭션으로 만들었습니다. 승인된 백엔드가 없으면 실패로 닫히도록 했습니다.',
            en: 'With no gRPC in the browser, designed a WebSocket relay contract for multi-user rooms and made reconnection an atomic transaction built from a staging root, a delta journal and a pure reducer, failing closed without an approved backend.',
          },
        ],
        outcome: {
          ko: '약 한 달(2026.06–07) 만에 실제 계정으로 방 렌더링과 방문이 동작하는 WebGL 빌드를 얻었습니다. 공통 933개 파일 중 833개를 바이트 동일로 유지했고, Node 테스트 412건과 Unity 에디터 검증기로 검증합니다. 외부 검증과 15건의 패리티 부채가 남은 내부 R&D입니다.',
          en: 'In about a month (Jun–Jul 2026), produced a WebGL build that renders and visits real rooms with real accounts. Kept 833 of 933 shared files byte-identical, verified by 412 Node tests and Unity Editor verifiers. External verification and 15 parity debts remain; this is internal R&D.',
        },
      },
      {
        id: 'world-webgl',
        group: { ko: 'Web Platform — WebPETO · WebGL 런타임', en: 'Web Platform — WebPETO & WebGL runtimes' },
        title: { ko: '월드 WebGL — gRPC 클라이언트를 브라우저에서 실행하기 위한 릴레이와 시작 성능', en: 'World WebGL — a relay and startup performance for running a gRPC client in the browser' },
        context: {
          ko: 'ZEPETO 월드 클라이언트는 gRPC 스트림, LZMA 어드레서블, 대용량 번들에 의존해 브라우저에서 바로 실행되지 않았습니다. 2주 R&D로 로그인·월드 입장·멀티플레이 이동·보이스가 동작하는 알파 테스트 빌드를 목표로 했습니다.',
          en: 'The ZEPETO world client depended on gRPC streams, LZMA addressables and large bundles that cannot run in a browser. The goal of a two-week R&D spike was an alpha build with login, world entry, multiplayer movement and voice.',
        },
        approach: [
          {
            ko: '원본 RPC 계층은 유지하고 전송만 WebSocket↔gRPC 릴레이로 바꿨습니다. 번들은 LZMA를 제거하고 타깃 플랫폼을 WebGL로 재작성하는 트랜스코더로 변환하고 맵 단위로 트리밍했습니다.',
            en: 'Kept the original RPC layer and swapped only the transport for a WebSocket-to-gRPC relay. Converted bundles with a transcoder that strips LZMA and rewrites the target platform to WebGL, trimming them per map.',
          },
          {
            ko: '세션→토큰→입장→맵 로드→이동 스트림→플레이 루프까지 단계별 Playwright 스모크와 콜드·웜·메모리 게이트를 두고 최적화를 반복했습니다. 에셋 임포트·씬 최적화, 폰트·StreamingAssets 범위 축소, 서비스 워커와 Brotli 사이드카를 적용했습니다. 외부 프리뷰는 루프백 전용 프록시, 격리 헤더, 테스트 계정 잠금으로 보호했습니다.',
            en: 'Iterated against a staged Playwright smoke ladder — session, token, entry, map load, movement stream, play loop — and cold, warm and memory gates. Applied asset-import and scene optimisation, narrower font and StreamingAssets scopes, a service worker and Brotli sidecars. Protected the external preview with a loopback-only proxy, isolation headers and a test-account lock.',
          },
        ],
        outcome: {
          ko: '로컬 측정 기준 콜드 진입 32.1초→6.6초, 전송량 208MB→53MB, 22→60fps, WASM 힙 487→248MiB로 개선했고, 실제 세션이 전 단계를 통과하며 두 클라이언트가 같은 방에서 이동하는 것을 확인했습니다. 고사양 기준 서비스 게이트는 충족했지만 저사양·프로덕션 게이트는 미달인 알파 단계입니다.',
          en: 'Local measurements improved cold entry from 32.1 s to 6.6 s, transfer from 208 MB to 53 MB, 22 to 60 fps and WASM heap from 487 to 248 MiB; real sessions pass every stage and two clients move in the same room. The high-end service gate was met while low-end and production gates remain unmet, so this is alpha.',
        },
      },

      /* ---------------------------------------------- AI Authoring R&D */
      {
        id: 'genworld-authoring',
        group: { ko: 'AI Authoring R&D — GenWorld · ZepetoField · AI NPC', en: 'AI Authoring R&D — GenWorld, ZepetoField & AI NPC' },
        title: { ko: 'GenWorld — AI가 쓴 월드 코드를 브라우저에서 실행·격리·공유하는 제작 환경', en: 'GenWorld — running, isolating and sharing AI-written world code in the browser' },
        context: {
          ko: 'ZEPETO 월드 제작에는 Unity와 Studio 툴체인이 필요했습니다. AI 코딩 앱이 실제 ZEPETO Script(TypeScript)를 작성하고, 비개발자가 Unity 설치 없이 브라우저에서 실행 결과를 보고 변경 내역을 검토·수정·공유할 수 있는 환경을 목표로 했습니다. 임의의 생성 코드를 안전하게 실행하고 무한 루프 같은 실패에서 복구하는 것이 핵심 과제였습니다.',
          en: 'Creating a ZEPETO world required the Unity and Studio toolchain. The goal was an environment where AI coding apps write real ZEPETO Script (TypeScript) and non-developers, without installing Unity, watch it run in the browser and review, fix and share the changes. Running arbitrary generated code safely and recovering from failures such as infinite loops was the core problem.',
        },
        approach: [
          {
            ko: 'React·Vite 편집기, Hono API, MCP 서버(33개 도구, stdio·Streamable HTTP, OAuth 2.0 PKCE·동적 클라이언트 등록), 자가 갱신 로컬 연결 도구로 이뤄진 npm 워크스페이스 모노레포를 설계했습니다. 미리 빌드한 Unity 2022.3 WebGL Player가 서버에서 컴파일한 TypeScript를 런타임에 로드하므로 월드 수정마다 Unity를 다시 빌드하지 않습니다.',
            en: 'Designed an npm-workspace monorepo of a React/Vite editor, a Hono API, an MCP server (33 tools over stdio and Streamable HTTP with OAuth 2.0 PKCE and dynamic client registration) and a self-updating local connector. A prebuilt Unity 2022.3 WebGL Player loads server-compiled TypeScript at runtime, so world changes never require another Unity build.',
          },
          {
            ko: '생성 코드의 AST 허용 목록만으로는 격리가 되지 않는다는 점을 확인하고, opaque origin sandbox iframe과 코드 설치 전 CSP 네트워크 차단, 발신 프레임·origin·nonce 검증으로 경계를 세션 단위로 옮겼습니다. iframe 교체만으로는 폭주한 렌더러가 복구되지 않아 Playwright 기반 서버 Chromium 실행(10초 heartbeat watchdog, 프로세스 종료·재생성)과 사용자 Chrome을 DevTools Protocol로 구동하는 로컬 실행 경로를 추가했고, 브라우저 실행은 about:blank 이동과 nonce 폐기로 복구하도록 고쳤습니다.',
            en: 'Confirmed that an AST allowlist alone gave no isolation and moved the boundary to the session: an opaque-origin sandboxed iframe, a CSP network lock applied before code install, and sender-frame, origin and nonce checks. Because replacing the iframe could not recover a runaway renderer, added a server Chromium runtime driven by Playwright (10 s heartbeat watchdog, kill and respawn) and a local transport driving the user’s Chrome over the DevTools Protocol, and fixed in-browser recovery by navigating the frame to about:blank and discarding late messages by nonce.',
          },
          {
            ko: '제안→적용 흐름을 SQLite 리비전 원장(idempotency key, head compare-and-set, 역패치, append-only 되돌리기)에 기록하고 버전별 AI 작업 기록과 라인 diff를 편집기에 표시했습니다. WebGL에서 생성 코드가 동작하지 않던 원인이 엔진·관리 코드 두 스트리퍼임을 찾아 link.xml로 114개 어셈블리를 보존했습니다. 해시 기반 불변 릴리스와 스테이징 DB 복원·롤백, Grafana·Prometheus·Loki 모니터링을 갖추고, Vitest 약 1,200건·Playwright+axe e2e·Unity EditMode·계약 퍼징을 단일 CI 게이트로 묶었습니다.',
            en: 'Recorded propose-to-apply in a SQLite revision ledger (idempotency keys, head compare-and-set, inverse patches, append-only reverts) and showed per-version AI activity with line diffs in the editor. Traced generated code failing in WebGL to two independent strippers and preserved 114 assemblies via link.xml. Ran it with hash-named immutable releases, staging DB restore and rollback, Grafana/Prometheus/Loki monitoring, and one CI gate combining about 1,200 Vitest tests, Playwright with axe e2e, Unity EditMode tests and contract fuzzing.',
          },
        ],
        outcome: {
          ko: '반복당 Unity 빌드 0회로 코드 수정과 재실행을 반복하고, 링크 공유와 사내 둘러보기 목록까지 갖춘 서비스로 사내에 배포했습니다(2026.09, 단독 개발). 실제 Chrome에서 무한 루프 종료·복구를 확인했으며, AI 작성 코드는 공개 월드 출시가 아닌 비정본 미리보기로 유지합니다.',
          en: 'Iterates on code and re-runs it with zero Unity builds, and is deployed internally as a service with link sharing and an internal Discover listing (Sep 2026, solo). Infinite-loop termination and recovery are verified in real Chrome, and AI-written code stays a non-canonical preview rather than a public world release.',
        },
      },
      {
        id: 'zepetofield-jobs',
        group: { ko: 'AI Authoring R&D — GenWorld · ZepetoField · AI NPC', en: 'AI Authoring R&D — GenWorld, ZepetoField & AI NPC' },
        title: { ko: 'ZepetoField — 프롬프트로 만드는 게임 포털의 생성 작업 큐와 병렬 빌드', en: 'ZepetoField — generation queues and parallel builds for a prompt-to-game portal' },
        context: {
          ko: '자연어로 게임을 생성하는 포털이 여러 사용자의 요청을 받되, 공유 Unity 프로젝트를 동시에 빌드해 작업 파일이 충돌하거나 요청 재전송으로 같은 게임을 중복 생성하지 않아야 했습니다. 사용자가 늘면서 잡 큐의 읽기 경로가 병목이 되었습니다.',
          en: 'The prompt-to-game portal had to accept requests from many users without concurrent builds colliding in a shared Unity project or retries generating the same game twice. As usage grew, the job queue’s read path became the bottleneck.',
        },
        approach: [
          {
            ko: '요청별 idempotency key로 중복 접수를 막고, 사용자별 활성 작업 3개·전체 24개 제한과 공정성 순환을 두었습니다. 웹에는 대기 순서와 8단계 생성 진행·완료·실패 상태를 제공하고 작업 상태를 파일에 영속화했습니다. 서버 재시작 시 실행 중이던 작업은 중단 상태로 복구해 자동 중복 실행을 피했습니다.',
            en: 'Prevented duplicate submissions with per-request idempotency keys, limited active jobs to 3 per user and 24 overall with fairness rotation, exposed queue position and eight generation stages in the portal, and persisted job state. On restart, recovered running jobs as interrupted instead of re-executing them.',
          },
          {
            ko: '부하 테스트에서 상태 조회마다 잡 디렉터리를 다시 읽는 O(N²) 경로를 찾아, 기동 시 한 번 로드하는 인메모리 인덱스와 write-through 저장으로 바꿨습니다. Unity 빌드는 클론 프로젝트 풀로 2개 워커가 병렬 실행하고 게시 전용 메인 루트는 mkdir 락으로 보호했습니다. 직접 빌드가 포털 산출물을 덮어쓰는 문제는 서버 측 자기복구 가드로, 고아 프로세스가 포트를 점유하는 문제는 supervisor 정리로 해결했습니다.',
            en: 'Load tests exposed an O(N²) path that re-read the job directory on every status poll; replaced it with an in-memory index loaded once at startup with write-through saves. Ran Unity builds on two workers from a clone-project pool with a publish-only main root guarded by a mkdir lock, added a server-side self-healing guard against raw builds overwriting the portal, and cleaned up orphaned processes in the supervisor.',
          },
          {
            ko: '포털을 MCP 서버(stdio·Streamable HTTP, OAuth 2.1/PKCE)로도 노출해 AI 코딩 앱에서 게임 생성을 요청할 수 있게 했습니다.',
            en: 'Also exposed the portal as an MCP server (stdio and Streamable HTTP with OAuth 2.1/PKCE) so AI coding apps can request generation.',
          },
        ],
        outcome: {
          ko: '잡 3,000개·폴러 60명 부하에서 조회 호출당 572ms→2.58ms(약 222배), 실서버 p95 59ms→21ms로 개선하고 병렬 빌드 2슬롯을 확보했습니다. 프롬프트 입력·진행 상태·결과 카탈로그·WebGL 플레이를 연결한 사내망 PoC로, 생성한 게임마다 Unity 씬과 WebGL 빌드를 산출하는 점이 미리 빌드한 Player를 재사용하는 GenWorld와 다릅니다.',
          en: 'Under 3,000 jobs and 60 pollers, status calls fell from 572 ms to 2.58 ms (about 222×) and live p95 from 59 ms to 21 ms, with two parallel build slots. It is an internal-network PoC connecting prompt entry, progress, a result catalogue and WebGL play; unlike GenWorld’s prebuilt Player, it produces a Unity scene and WebGL build per generated game.',
        },
      },
      {
        id: 'world-art-direction',
        group: { ko: 'AI Authoring R&D — GenWorld · ZepetoField · AI NPC', en: 'AI Authoring R&D — GenWorld, ZepetoField & AI NPC' },
        title: { ko: '프롬프트 기반 월드 아트 디렉션 — LLM은 의도만, 배치는 결정론으로', en: 'Prompt-driven world art direction — the LLM decides intent, placement stays deterministic' },
        context: {
          ko: '프롬프트 한 줄로 ZEPETO 월드의 분위기와 소품 배치를 만들되, LLM이 존재하지 않는 에셋 ID를 지어내거나 실행마다 다른 결과를 내어 씬을 깨는 일이 없어야 했습니다. 사내 에셋 레지스트리에는 권리·의존성 정보가 완전하지 않았습니다.',
          en: 'A single prompt had to produce a ZEPETO world’s look and prop placement without the LLM inventing asset IDs or breaking scenes with a different result on every run. The internal asset registry also lacked complete rights and dependency data.',
        },
        approach: [
          {
            ko: 'Unity Editor 전용 도구로 설계해 LLM은 엄격한 의도 스키마만 채우고, 결정론적 리졸버가 스타일 카탈로그의 실제 템플릿·룩 레시피를 고르며, 배치 시드는 프롬프트 해시에서 뽑아 LLM의 비결정성이 배치를 바꾸지 못하게 했습니다. 매칭되지 않은 표현은 숨기지 않고 보고합니다.',
            en: 'Designed it as a Unity Editor-only tool where the LLM fills only a strict intent schema, a deterministic resolver picks real templates and look recipes from a style catalogue, and the placement seed derives from the prompt hash so LLM nondeterminism cannot alter placement. Unmatched terms are reported rather than hidden.',
          },
          {
            ko: '1만 1천여 개 사내 에셋 레지스트리를 연동하되 권리·의존성·폴리곤 게이트를 클라이언트에서 걸고, 이름 검색이 침실에 피규어를 넣는 문제는 비전 LLM으로 썸네일을 검수해 보수적으로 걸러냈습니다. 구역 제약 배치와 헤드리스 미리보기 캡처로 원본 씬을 저장하지 않고 결과를 확인했습니다.',
            en: 'Integrated an internal registry of over 11,000 assets behind client-side rights, dependency and triangle gates, and vetted thumbnails with a vision LLM to stop name search placing figurines in bedrooms. Zone-constrained placement and headless preview captures let results be checked without saving the source scene.',
          },
        ],
        outcome: {
          ko: 'EditMode 테스트 41건이 통과하는 도구로 정리하고, 사내 에셋만으로 구성한 월드를 ZepetoField 파이프라인에 연결해 종단 생성까지 확인했습니다(2026.08, 사내 PoC).',
          en: 'Delivered a tool with 41 passing EditMode tests and connected an asset-native world to the ZepetoField pipeline end to end (Aug 2026, internal PoC).',
        },
      },
      {
        id: 'ai-npc',
        group: { ko: 'AI Authoring R&D — GenWorld · ZepetoField · AI NPC', en: 'AI Authoring R&D — GenWorld, ZepetoField & AI NPC' },
        title: { ko: 'AI NPC — 셀프호스팅 LLM으로 마이룸에 상주하는 캐릭터 만들기', en: 'AI NPC — a resident MyRoom character on a self-hosted LLM' },
        context: {
          ko: '마이룸에 상주하며 대화하고 스스로 움직이는 NPC를 만들되, 8B급 셀프호스팅 모델의 1~3초 응답 지연과 지시 불이행 속에서도 자연스러워야 했습니다. Unity 팀에 전달할 기술 탐색 과제였습니다.',
          en: 'The goal was an NPC that lives in MyRoom, talks and moves on its own, and still feels natural despite the 1–3 s latency and instruction-following gaps of a self-hosted 8B-class model. It was a technical exploration for the Unity team.',
        },
        approach: [
          {
            ko: 'FastAPI 서버와 Ollama로 서빙한 Qwen3-8B 위에, Unity가 방·플레이어 상태 스냅샷과 이벤트(대화·유휴 틱·입장·셀피)를 보내면 의도·대사·이동 대상·제스처·시선을 JSON으로 돌려주는 양방향 프로토콜을 설계했습니다. 매 프레임 LLM을 부를 수 없어 이벤트 트리거와 5~25초 유휴 루프를 섞은 하이브리드 구조로 지연을 숨겼습니다.',
            en: 'On a FastAPI server with Qwen3-8B served through Ollama, designed a bidirectional protocol where Unity sends room and player snapshots plus events (chat, idle ticks, joins, selfies) and receives intent, speech, movement target, gesture and gaze as JSON. Since the LLM cannot run per frame, hid latency with a hybrid of event triggers and a 5–25 s idle loop.',
          },
          {
            ko: '모델의 thinking 출력으로 빈 응답이 나오는 문제, 규칙 무시, 반복 대사, 소품 이름 불일치를 각각 관용적 JSON 파서·검증기와 후처리, 온도·few-shot 샘플링과 n-gram 반복 가드, 4단계 이름 매칭과 아이템 이름 캐시로 풀었습니다. 관계 단계별 프롬프트와 60여 개 2차 시나리오(무드 관성, 의도적 무행동)로 기계적인 느낌을 줄였습니다.',
            en: 'Addressed empty replies from the model’s thinking output, ignored rules, repetitive lines and prop-name mismatches with a tolerant JSON parser plus validators and post-processing, temperature and few-shot sampling with an n-gram repetition guard, and four-level name matching with an item-name cache. Relationship-stage prompts and about 60 secondary scenarios with mood inertia and deliberate inaction reduced the mechanical feel.',
          },
          {
            ko: 'LLM으로 합성한 학습 데이터 1만여 건으로 Unsloth QLoRA 파인튜닝과 GGUF 배포를 실험했지만 제한된 상황에서 과적합이 확인되어, 프롬프트와 후처리 전략을 유지하는 결론을 문서화했습니다. 결정 타임라인 대시보드와 행동 패턴 편집 UI를 함께 만들었습니다.',
            en: 'Experimented with Unsloth QLoRA fine-tuning and GGUF deployment on about 10,000 LLM-synthesised samples, found overfitting in the constrained setting, and documented the decision to stay with prompting and post-processing. Also built a decision-timeline dashboard and a behaviour-pattern editor.',
          },
        ],
        outcome: {
          ko: '자율 행동이 동작하는 NPC 서버와 Unity 연동을 사내 서버에서 시연하고, 파인튜닝 과적합과 TTS 지연·품질 한계 같은 부정 결과까지 정리한 기술 탐색 결과를 공유했습니다(2026.03–04, 출시 아님).',
          en: 'Demonstrated a working autonomous NPC server with Unity integration on an internal server and shared the exploration results, including negative findings on fine-tuning overfitting and TTS latency and quality (Mar–Apr 2026, not shipped).',
        },
      },

      /* ---------------------------------------------- Unity Client */
      {
        id: 'world-youtube',
        group: { ko: 'Unity Client — ZEPETO 앱', en: 'Unity Client — ZEPETO app' },
        title: { ko: '월드 내 YouTube 플레이어와 다중 초대 — 다인 동기화 재생과 권한 모델', en: 'In-world YouTube player and multi-user invites — synchronised playback and permissions' },
        context: {
          ko: '방장이 고른 영상을 방 안의 모든 사용자가 3D 스크린에서 동시에 보는 기능이 필요했습니다. 재생 백엔드, 권한, iOS·Android·PC 플랫폼 차이를 함께 풀어야 했고, 이어서 월드 초대를 여러 사용자에게 한 번에 보내는 기능이 필요했습니다.',
          en: 'Rooms needed shared, owner-curated video playback on in-world 3D screens for everyone present. Playback backend, permissions and iOS, Android and PC differences had to be solved together, followed by inviting several users to a world at once.',
        },
        approach: [
          {
            ko: '플레이리스트 추가·삭제·이동·동기화 이벤트와 씬 내 플레이어 레지스트리로 모든 스크린의 재생·일시정지·탐색·음소거를 동기화했습니다. 재생 백엔드는 Unity VideoPlayer에서 AVPro를 거쳐 JS↔C# 메시지 프로토콜을 쓰는 임베디드 WebView 플레이어로 바꿔 안정화했고, 추가 전에 헤드리스 플레이어로 URL이 재생 가능하고 라이브가 아닌지 검증했습니다.',
            en: 'Synchronised play, pause, seek and mute across every screen through playlist add, remove, move and sync events and an in-scene player registry. Moved the backend from Unity VideoPlayer through AVPro to an embedded WebView player with a JS–C# message protocol, and validated URLs with a headless player before adding them.',
          },
          {
            ko: '재생 권한 판정을 클라이언트 허용 목록에서 서버 RPC로 옮기고, 플레이어 페이지 URL을 서버 설정으로 두어 iOS 저메모리 기기를 분기했습니다. 영상별 신고와 차단 기능, Android WebView 재개와 iOS 뒤로가기 같은 네이티브 경계 문제도 처리했습니다.',
            en: 'Moved playback authorisation from a client allowlist to a server RPC, made the player page URL server-configurable to route iOS low-memory devices, and added per-video reporting and blocking plus native-boundary fixes such as Android WebView resume and iOS back navigation.',
          },
          {
            ko: '초대는 JSON 배열 기반 다중 초대로 확장해 Unity C#과 Kotlin·Objective-C 네이티브 브리지를 함께 수정했고, PC에서는 실시간 메시징 서비스로 초대를 전달했습니다. 방 생성·입장 경로를 구분하는 referrer 이벤트를 추가했습니다. 월드 입장 시 불필요한 로비 연결 왕복을 제거하고 이동 스트림에 20초 heartbeat를 넣었습니다.',
            en: 'Extended invites to JSON multi-invite across the Unity C# and Kotlin/Objective-C native bridges, delivered PC invites through the real-time messaging service, and added referrer events distinguishing room creation and entry paths. Also removed a redundant lobby round-trip on world entry and added a 20 s heartbeat to the movement stream.',
          },
        ],
        outcome: {
          ko: 'YouTube 플레이어는 2024년 9월 iOS·Android·Windows·macOS에 출시된 뒤 신고·권한·기기 대응을 이어갔고, 다중 초대는 2024년 12월, 접속 경로 개선은 2025년 초 릴리스에 포함됐습니다.',
          en: 'The YouTube player shipped on iOS, Android, Windows and macOS in September 2024 with reporting, permission and device follow-ups; multi-invite shipped in December 2024 and the connection-path changes in early 2025 releases.',
        },
      },
      {
        id: 'pc-release',
        group: { ko: 'Unity Client — ZEPETO 앱', en: 'Unity Client — ZEPETO app' },
        title: { ko: 'NewWorld의 Windows·macOS 지원 — 네이티브 셸 없는 PC에 홈·초대·채팅·상점 만들기', en: 'NewWorld on Windows and macOS — home, invites, chat and shop for a PC without a native shell' },
        context: {
          ko: '모바일에서는 네이티브 앱이 NewWorld의 홈·초대·채팅·상점 UI를 제공하지만, PC 클라이언트에는 네이티브 셸이 없어 NewWorld 월드를 실행할 수 없었습니다.',
          en: 'On mobile the native app hosts NewWorld’s home, invite, chat and shop interfaces. The PC client had no native shell, so NewWorld worlds could not run there.',
        },
        approach: [
          {
            ko: '기존 네이티브 프록시 계층 뒤에 Unity 구현체를 두어 홈·방 인원·친구 초대·설정 화면을 만들고, ESC로 홈 복귀와 진입 가이드를 붙였습니다. uGUI InputField 캐럿 호환, 채팅 포커스 중 캐릭터 이동 차단, Return·Slash 단축키, PC에서의 화면 회전 예외 등 키보드 UX를 정리했습니다.',
            en: 'Implemented home, room roster, friend invite and settings screens in Unity behind the existing native-proxy layer, with ESC returning home and an entry guide. Cleaned up keyboard UX: uGUI InputField caret compatibility, blocking character movement while chat is focused, Return and Slash shortcuts, and orientation exceptions on PC.',
          },
          {
            ko: '차단 목록을 로드해 차단·해제 시 음성 뮤트와 스피커 표시를 연동했고, 광고·결제처럼 PC에서 지원되지 않는 기능은 안내 메시지와 실패 콜백으로 처리했습니다. SDK 모듈(Product·Shop·Social·Gui·Mannequin)에는 결제 불가 플랫폼 처리, 차단 콜백, safe-area 예외를 넣고 마네킹 상점을 실제 구매 요청에 연결했습니다.',
            en: 'Loaded block lists and tied block and unblock to voice mute and speaker visibility, and made unsupported PC features such as ads and payments fail gracefully with messages and callbacks. In the SDK modules (Product, Shop, Social, Gui, Mannequin) added payment-unsupported flows, block callbacks and safe-area exceptions, and connected the mannequin shop to a real purchase request.',
          },
        ],
        outcome: {
          ko: '2025년 6월 Windows·macOS 4.1.0 릴리스에 출시했고, 마네킹 구매는 같은 해 9월 4.6.0에 추가했습니다.',
          en: 'Shipped in the June 2025 Windows and macOS 4.1.0 release; mannequin purchase followed in 4.6.0 in September 2025.',
        },
      },
    ],
    resumeHighlights: [
      {
        ko: 'WebPETO — 아바타 WebGL 압축 빌드 13.29→7.64MB(42%), 콜드 로그인→아바타 표시 2.6→1.2초(2026.05, 테스트 서버)',
        en: 'WebPETO — avatar WebGL build 13.29→7.64 MB (42%), cold login-to-avatar 2.6→1.2 s (May 2026, test server)',
      },
      {
        ko: 'React 19·RTK Query로 20여 라우트 단계 전환, Android 앱 기준 문자열·딥링크 파이프라인, Vite 백엔드 어댑터, Playwright QA 하네스·릴리스 게이트',
        en: 'React 19/RTK Query migration of 20+ routes, Android-as-spec string and deep-link pipeline, Vite backend adapter, Playwright QA harness',
      },
      {
        ko: 'GenWorld 단독 개발 — AI가 쓴 코드를 sandbox·watchdog 아래 사전 빌드 WebGL Player로 실행(재빌드 0회), MCP 33개 도구·리비전 원장·불변 릴리스',
        en: 'GenWorld (solo) — sandboxed execution of AI-written code in a prebuilt WebGL Player; 33-tool MCP server, revision ledger, releases',
      },
      {
        ko: 'AI NPC(사내 기술 탐색) — 셀프호스팅 LLM(Qwen3-8B·Ollama) NPC 서버, Unity 양방향 상태·의도 프로토콜, 출력 검증·후처리, QLoRA 파인튜닝 실험',
        en: 'AI NPC (internal R&D) — self-hosted LLM (Qwen3-8B) NPC server, two-way Unity state/intent protocol, QLoRA fine-tuning experiment',
      },
      {
        ko: 'Prop Atlas — 약 11,000개 프롭을 Unity 렌더 썸네일과 OpenAI 모델(GPT-5.5)로 자동 라벨링하고, 텍스트·이미지 임베딩 검색과 리랭킹을 MCP 서버로 GenWorld LLM에 제공한 RAG 프롭 검색',
        en: 'Prop Atlas — RAG prop search: ~11,000 props auto-labelled by an OpenAI model (GPT-5.5); embedding search + reranking over MCP',
      },
      {
        ko: 'MyRoom·월드 Unity 런타임 WebGL 이식(원본 동일성 검증·gRPC 릴레이, 콜드 32→6.6초), 월드 내 YouTube 플레이어·다중 초대·NewWorld PC 지원 출시',
        en: 'MyRoom/world Unity runtimes ported to WebGL (cold entry 32→6.6 s); shipped in-world YouTube player, multi-invite, NewWorld on PC',
      },
    ],
    stack: ['TypeScript', 'React', 'Unity3D', 'WebGL', 'MCP', 'Redux Toolkit', 'RTK Query', 'Vite', 'Webpack', 'Node.js', 'C#', 'Python', 'Playwright', 'Vitest', 'OAuth 2.0', 'Windows/macOS'],
    image: '/projects/zepeto.webp',
    sections: [
      {
        heading: { ko: 'Web Lab · 프로젝트 범위', en: 'Web Lab · Project Scope' },
        items: [
          {
            ko: 'WebPETO — 기존 모바일 앱의 홈·상점·피드·프로필 등 비월드 화면을 웹으로 옮긴 프로토타입과 아바타 WebGL 뷰어',
            en: 'WebPETO — a web prototype of the mobile app’s non-world surfaces (home, shop, feed, profile and more) with a WebGL avatar viewer',
          },
          {
            ko: '온보딩 아바타 런타임 — 아바타 생성·편집용 WebGL 런타임을 SHA-256 매니페스트와 공개 JS 어댑터로 패키징해 웹 팀에 인계, Android와 동일한 제스처 잠금·캡처 규격',
            en: 'Onboarding avatar runtime — a WebGL runtime for avatar creation and editing packaged with a SHA-256 manifest and a public JS adapter for the web team, matching Android gesture locks and capture specs',
          },
          {
            ko: 'MyRoom WebGL — 원본 마이룸 Unity 런타임의 WebGL 이식과 원본 동일성 검증',
            en: 'MyRoom WebGL — a WebGL port of the original MyRoom Unity runtime with parity verification against the original',
          },
          {
            ko: '월드 WebGL — 레거시 월드 클라이언트의 WebGL 이식, WebSocket↔gRPC 릴레이, 알파 테스트 UI',
            en: 'World WebGL — a WebGL port of the legacy world client with a WebSocket-to-gRPC relay and alpha test UI',
          },
          {
            ko: 'NewWorld Package WebGL Player — NewWorld 패키지의 브라우저 실행, 월드 입장·매치메이킹 프록시·WebSocket 릴레이 연동, 월드 변환 파이프라인 R&D',
            en: 'NewWorld Package WebGL Player — R&D on browser execution of NewWorld packages, world entry, a matchmaking proxy and WebSocket relay, and a per-world conversion pipeline',
          },
          {
            ko: 'GenWorld — AI 코딩 앱이 월드 코드를 쓰고 사용자가 브라우저에서 실행·검토·수정·공유하는 제작 환경(MCP 서버·OAuth 연결 도구 포함)',
            en: 'GenWorld — an authoring environment where AI coding apps write world code and users run, review, fix and share it in the browser, including an MCP server and OAuth connector',
          },
          {
            ko: 'ZepetoField — 자연어 기반 게임 설계·Unity 빌드·결과 카탈로그·브라우저 플레이를 연결한 PoC',
            en: 'ZepetoField — a PoC connecting prompt-based game design, Unity builds, a result catalogue and browser play',
          },
          {
            ko: '월드 기획 보조 도구 — 공개 차트 수집과 아바타 플레이 적합성 검수로 제작 우선순위 점수를 내고, 기획서→에셋 생성→Unity 구성→QA를 재시작 복구형 작업 러너로 잇는 실험',
            en: 'World planning aid — an experiment scoring production priority from public-chart collection and avatar-playability vetting, and chaining brief, asset generation, Unity composition and QA through a restart-resumable job runner',
          },
          {
            ko: 'Prop Atlas — 월드 제작용 프롭 검색 RAG 도구. Unity에서 약 11,000개 프롭의 썸네일을 렌더링해 OpenAI 모델(GPT-5.5)로 라벨을 자동 생성하고, 텍스트(multilingual-e5)·이미지(CLIP) 임베딩 검색과 cross-encoder 리랭킹을 MCP 서버로 제공해 GenWorld의 LLM이 프롭을 찾아 쓰도록 연결. transformers.js ONNX 로컬 실행과 OpenAI 임베딩을 환경변수로 전환',
            en: 'Prop Atlas — RAG prop search for world authoring: ~11,000 Unity-rendered thumbnails auto-labelled with an OpenAI model (GPT-5.5); text (multilingual-e5) and image (CLIP) embedding search with cross-encoder reranking, served over MCP to GenWorld’s LLM; local transformers.js ONNX inference switchable to OpenAI embeddings',
          },
          {
            ko: 'ZS Runtime Test — 생성한 TypeScript를 서버에서 컴파일하고 격리된 WebGL 런타임에 부착하는 실험(GenWorld의 전신)',
            en: 'ZS Runtime Test — an experiment compiling generated TypeScript on the server and attaching it to an isolated WebGL runtime, the predecessor of GenWorld',
          },
        ],
      },
      {
        heading: { ko: '웹 플랫폼', en: 'Web Platform' },
        items: [
          {
            ko: 'WebPETO의 React 19 앱 셸·RTK Query 상태 계층과 피처 플래그 기반 점진적 이관, 서버 확인 응답 기반 캐시 패치',
            en: 'React 19 app shell and RTK Query state layer for WebPETO, feature-flagged incremental migration and cache patching from server acknowledgements',
          },
          {
            ko: 'Vite 서버 기반 백엔드 어댑터 — 환경 프록시, 모바일 클라이언트 헤더 주입, COOP/COEP 격리, Unity 산출물 Content-Encoding·캐시 헤더',
            en: 'Vite-server backend adapter — env proxies, mobile-client header injection, COOP/COEP isolation, Content-Encoding and cache headers for Unity artefacts',
          },
          {
            ko: 'Android strings.xml 기반 문자열 생성, 디자인 토큰 치환, 앱 scheme·공유 URL·직접 경로 파서와 하드코딩 문구 차단 smoke 검사',
            en: 'String generation from Android strings.xml, design-token replacement, an app-scheme, share-URL and direct-path parser, and smoke checks blocking hard-coded copy',
          },
          {
            ko: '아바타 WebGL 빌드 경량화·초기 로딩 경로 개선, 웹–Unity 메타데이터·카메라·제스처 연동, Three.js 대체 PoC 비교 후 Unity 유지 결정',
            en: 'Smaller avatar WebGL builds and improved initial loading, web–Unity metadata, camera and gesture integration, and a Three.js replacement PoC that confirmed keeping Unity',
          },
          {
            ko: 'Playwright 전 라우트 스캔(iOS Safari·Windows Chromium), 이중 플래그로만 열리는 변경 프로브, 앱 내 리포트 페이지, SHA·배포 시각 검증 릴리스 게이트, 정적 릴리스 전환·자동 롤백',
            en: 'Playwright full-route scans (iOS Safari, Windows Chromium), mutation probes behind paired flags, in-app report pages, a release gate checking SHA and deploy time, and static release switching with automatic rollback',
          },
          {
            ko: 'GenWorld의 React·TypeScript 편집기, MCP 코드 제작·관찰 도구, 버전별 AI 작업 기록·라인 diff UI, 링크 공유·둘러보기 목록',
            en: 'GenWorld’s React and TypeScript editor, MCP code-authoring and observation tools, per-version AI activity with line diffs, link sharing and a Discover listing',
          },
        ],
      },
      {
        heading: { ko: 'AI · 자동화 R&D', en: 'AI & Automation R&D' },
        items: [
          {
            ko: 'GenWorld — opaque-origin sandbox·CSP 네트워크 차단·nonce 검증과 외부 watchdog, 서버 Chromium·로컬 Chrome(DevTools Protocol) 실행 경로, SQLite 리비전 원장, 자가 갱신 연결 도구, 불변 릴리스·Grafana 모니터링',
            en: 'GenWorld — opaque-origin sandbox with CSP network lock and nonce checks plus an external watchdog, server Chromium and local Chrome (DevTools Protocol) transports, a SQLite revision ledger, a self-updating connector, immutable releases and Grafana monitoring',
          },
          {
            ko: 'LLM 기반 AI NPC(Companion) R&D — FastAPI·Ollama(Qwen3-8B) 서버, Unity 양방향 상태·의도 프로토콜, 하이브리드 트리거, 합성 데이터 QLoRA 파인튜닝 실험과 과적합 분석',
            en: 'LLM-based AI NPC (Companion) R&D — FastAPI and Ollama (Qwen3-8B) server, a bidirectional Unity state and intent protocol, hybrid triggering, and a synthetic-data QLoRA fine-tuning experiment with overfitting analysis',
          },
          {
            ko: 'LLM 기반 AI 월드 생성 R&D — ZepetoField 생성 작업 큐·병렬 Unity 빌드·MCP 노출, 프롬프트→의도 스키마→결정론 리졸버 아트 디렉션 도구(EditMode 테스트 41건), 사내 에셋 레지스트리 권리·비전 검수 게이트',
            en: 'LLM-based AI world generation R&D — ZepetoField generation queue, parallel Unity builds and MCP exposure, a prompt-to-intent-schema-to-deterministic-resolver art-direction tool (41 EditMode tests), and rights and vision vetting gates over the internal asset registry',
          },
          {
            ko: 'Blender 헤드리스 에셋 생성과 8방향 렌더·비전 판정 품질 게이트, 기획서→에셋→Unity 구성→QA를 잇는 재시작 복구형 작업 러너 실험',
            en: 'Headless Blender asset generation with 8-view renders and a vision-verdict quality gate, and a restart-resumable job runner from brief to assets, Unity composition and QA',
          },
        ],
      },
      {
        heading: { ko: 'Unity 클라이언트', en: 'Unity Client' },
        items: [
          {
            ko: '월드 내 YouTube 플레이어 — 플레이리스트·다인 동기화 재생, 임베디드 WebView 백엔드와 JS↔C# 프로토콜, 서버 RPC 권한 판정, 영상 검증·신고 (2024.09 출시)',
            en: 'In-world YouTube player — playlist and synchronised multi-user playback, embedded WebView backend with a JS–C# protocol, server-side permission checks, URL validation and reporting (shipped Sep 2024)',
          },
          {
            ko: '다중 초대 프로토콜(Unity C# · Kotlin · Objective-C 브리지)과 방 진입 referrer 분석 이벤트 (2024.12 출시), 2024 할로윈 인월드 이벤트 UI·랭킹',
            en: 'Multi-invite protocol across the Unity C#, Kotlin and Objective-C bridges with room-entry referrer analytics (shipped Dec 2024), and the 2024 Halloween in-world event UI and ranking',
          },
          {
            ko: '월드 접속 경로 개선 — 불필요한 로비 연결 왕복 제거, 이동 스트림 heartbeat, 팔로워 API 중복 호출 제거',
            en: 'World connection path — removed a redundant lobby round-trip, added a movement-stream heartbeat and deduplicated follower API calls',
          },
          {
            ko: 'NewWorld Windows·macOS 지원 — PC 홈·방 인원·초대 UI, 키보드 입력·채팅 단축키, 차단·보이스 연동, PC 미지원 기능 처리, 마네킹 상점·구매 (2025.06/09 출시)',
            en: 'NewWorld on Windows/macOS — PC home, roster and invite UI, keyboard input and chat shortcuts, block and voice integration, unsupported-feature handling, mannequin shop and purchase (shipped Jun/Sep 2025)',
          },
          {
            ko: 'SDK 모듈(Product·Shop·Social·Gui·Mannequin)의 PC 대응 — 결제 불가 플랫폼 처리, 차단 콜백, safe-area 예외',
            en: 'PC adaptation of SDK modules (Product, Shop, Social, Gui, Mannequin) — payment-unsupported flows, block callbacks, safe-area exceptions',
          },
          {
            ko: "ZEPETO 'Slime Party' 월드 — 실시간 멀티플레이 기반 캐주얼 콘텐츠 개발 및 유지보수",
            en: "ZEPETO 'Slime Party' world — built and maintained real-time multiplayer casual content",
          },
          {
            ko: "ZEPETO 'MyHome' 월드 — 유저 커스터마이징·소셜 기능 중심의 신규 기능 개발 및 운영",
            en: "ZEPETO 'MyHome' world — new features and live operation centred on user customisation and social play",
          },
          {
            ko: '모바일 네이티브–Unity 연동 — iOS/Android 네이티브 시스템과 Unity 사이의 이슈 분석 및 해결',
            en: 'Mobile native ↔ Unity bridge — diagnosed and fixed issues across the iOS/Android native boundary',
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
        ko: 'Fidelion IP 기반 신규 프로젝트의 리드 게임 프로그래머로 개발 주도, Unity 클라이언트와 Nest.js 서버 설계·구현 (사업 종료로 프로젝트 중단)',
        en: 'Led a new Fidelion IP title as Lead Game Programmer; built the Unity client and Nest.js server (discontinued when the business closed)',
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
      {
        ko: 'Unity 클라이언트에 Sentry 연동 — 크래시·예외를 정기적으로 검토해 수정 우선순위를 정하고, 심각하거나 원인이 불분명한 이슈의 진단 로깅에 활용',
        en: 'Integrated Sentry into the Unity client; reviewed crashes and exceptions regularly to prioritise fixes and log severe or unclear issues',
      },
    ],
    stack: ['Unity3D', 'C#', 'Java (Spring Boot)', 'GCP', 'Jenkins', 'Python', 'Sentry'],
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
          {
            ko: 'Unity 클라이언트 Sentry 연동 — 크래시·예외 정기 검토로 수정 우선순위 결정, 심각하거나 원인이 불분명한 이슈의 진단 로깅',
            en: 'Sentry on the Unity client — regular crash/exception review to prioritise fixes, diagnostic logging for severe or unclear issues',
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
      'Sentry',
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
          {
            ko: 'Unity 클라이언트 Sentry 연동 — 크래시·예외 정기 검토로 수정 우선순위 결정, 심각하거나 원인이 불분명한 이슈의 진단 로깅',
            en: 'Sentry on the Unity client — regular crash/exception review to prioritise fixes, diagnostic logging for severe or unclear issues',
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
    stack: ['Unity3D', 'C#', 'Python (Flask)', 'Docker', 'Jenkins', 'Sentry'],
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
          { ko: 'Unity 클라이언트 Sentry 연동 및 크래시·예외 추적', en: 'Integrated Sentry into the Unity client for crash and exception tracking' },
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
        en: 'Shared data models and game logic between the Unity client and C# web server to validate client gameplay results server-side',
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
          ko: 'WebPETO·GenWorld, React 19, Redux Toolkit·RTK Query, Next.js App Router, TanStack React Query, PWA',
          en: 'WebPETO and GenWorld, React 19, Redux Toolkit/RTK Query, Next.js App Router, TanStack React Query, PWA',
        },
      },
      {
        label: 'Build & Runtime',
        detail: {
          ko: 'Vite, Webpack, Unity WebGL 빌드 경량화(IL2CPP·스트리핑·Brotli), COOP/COEP 격리, JavaScript–Unity 브리지, Windows/macOS, iOS/Android 네이티브 연동',
          en: 'Vite, Webpack, Unity WebGL build slimming (IL2CPP, stripping, Brotli), COOP/COEP isolation, JavaScript–Unity bridges, Windows/macOS and iOS/Android native integration',
        },
      },
      {
        label: 'Quality & Delivery',
        detail: {
          ko: 'Playwright·Vitest, 계약 기반 smoke 검사, 릴리스 게이트, 불변 정적 릴리스·롤백, GitHub Actions',
          en: 'Playwright and Vitest, contract-based smoke checks, release gates, immutable static releases with rollback, GitHub Actions',
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
          en: 'Java Netty socket servers — 100-player multiplayer, matchmaking/ranking, chat (ActiveMQ), Protocol Buffers',
        },
      },
      {
        label: 'Backend & Data',
        detail: {
          ko: 'Node.js(Hono·Express), FastAPI, C# 웹 서버, Spring Boot, Nest.js, Django·Flask, Go / MySQL, Redis, MongoDB, SQLite',
          en: 'Node.js (Hono, Express), FastAPI, C# web servers, Spring Boot, Nest.js, Django/Flask, Go / MySQL, Redis, MongoDB, SQLite',
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
          ko: '운영 도구 개발, 장애 대응, 긴급 데이터 처리, Sentry 기반 Unity 크래시·예외 추적, 로그 분석(Log4j, Elasticsearch)',
          en: 'Ops tools, incident response, emergency data handling, Sentry, log analysis (Log4j, Elasticsearch)',
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
          ko: 'MCP 서버·OAuth 연결 도구, 생성 코드 격리 실행(sandbox·watchdog), 셀프호스팅 LLM(Ollama) NPC 서버와 QLoRA 파인튜닝 실험, LLM 자동 라벨링·임베딩 검색·리랭킹(RAG), LLM 의도 스키마 + 결정론 리졸버 설계, LLM 기반 코드 리뷰 도구',
          en: 'MCP servers, OAuth connectors, sandboxed execution of generated code, self-hosted LLM (Ollama) NPC server, QLoRA experiment, RAG (LLM labelling, embedding search, reranking), LLM intent schema + deterministic resolver',
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

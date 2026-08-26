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
    ko: 'Unity 프로그래머',
    en: 'Unity Programmer',
  } satisfies I18n,

  // 히어로 한 줄. 짧게 유지하세요.
  tagline: {
    ko: '모바일 게임의 클라이언트와 서버, 인프라를 만듭니다.',
    en: 'I build mobile games — client, server, infrastructure.',
  } satisfies I18n,

  /** 이력서 상단 요약 한 문단. 랜딩의 About 은 아래 `about` 을 씁니다. */
  intro: {
    ko: '2014년부터 모바일 게임의 클라이언트와 서버, 인프라를 만들어 왔습니다. 킹갓캐슬을 첫 빌드부터 글로벌 라이브까지 메인 프로그래머로 맡았고, 좀비고등학교에서 동시 100명 서바이벌 모드와 통합 계정 시스템을 만들었습니다. 지금은 네이버제트에서 ZEPETO의 실시간 멀티플레이 월드와 PC 크로스플랫폼 출시, LLM 기반 R&D를 맡고 있습니다.',
    en: 'Building mobile games since 2014 — client, server, infrastructure. Main programmer on King God Castle from the first build through global live service; on Zombie High I built the 100-player survival mode and the unified account system. Currently at NAVER Z on ZEPETO: real-time multiplayer worlds, the cross-platform PC release, and LLM-based R&D.',
  } satisfies I18n,

  /**
   * 랜딩 About — 한 문단씩 이어 읽는 서술. 성향을 나열하지 않고,
   * 한 일과 그때 어떻게 했는지로 대신합니다.
   */
  about: [
    {
      ko: '안녕하세요, 최순형입니다. 뭔가 만드는 걸 좋아합니다. 2014년부터 모바일 게임을 만들었고, 클라이언트에서 시작해 게임에 필요한 곳이라면 서버와 인프라, 운영 툴까지 계속 열어봤습니다. 여러 시스템이 얽혀 어느 한쪽만 봐서는 원인이 보이지 않는 문제를 좋아하고, 풀릴 때까지 붙잡는 편입니다.',
      en: "Hi, I'm Soonhyung, and I like building things. I've been making mobile games since 2014 — I started on the client and kept opening up whatever else the game needed: server, infrastructure, internal tooling. I like problems that span several systems, where no single side shows you the cause, and I tend to stay with one until it gives.",
    },
    {
      ko: '지금은 네이버제트에서 ZEPETO의 Unity 클라이언트를 만듭니다. 실시간 멀티플레이 월드를 만들어 운영했고, Windows와 macOS로 나가는 PC 크로스플랫폼 출시를 맡았습니다. 요즘은 LLM 기반 AI NPC와 월드 생성 R&D를, 크리에이터가 쓰는 ZEPETO Studio·SDK 작업과 함께 보고 있습니다.',
      en: "Currently I'm a Unity programmer at NAVER Z, working on ZEPETO. I've built and operated real-time multiplayer worlds, and took on the cross-platform PC release for Windows and macOS. Lately I've been on LLM-based R&D — AI NPCs and world generation — alongside ZEPETO Studio and the SDK that creators build on.",
    },
    {
      ko: '그 전에는 어썸피스에서 킹갓캐슬을 첫 빌드부터 글로벌 라이브까지 메인 프로그래머로 맡았습니다. 같은 회사의 좀비고등학교에서는 동시 100명이 붙는 서바이벌 모드와, 이메일·구글·페이스북으로 갈라져 있던 계정을 대표 계정 하나로 묶고 캐릭터를 여러 개 둘 수 있게 한 통합 계정 시스템을 만들었습니다. 그 과정에서 Java 소켓 서버를 짜고, 인프라를 IDC에서 클라우드로 옮기고, 운영 툴과 빌드 자동화를 만들었습니다. 그보다 앞서 펍지랩스와 크래프톤, 파티게임즈, 맥스온소프트를 거쳤습니다.',
      en: 'Before that, at Awesomepiece, I was main programmer on King God Castle from the first build through global live service. On Zombie High at the same studio I built the survival mode that holds 100 concurrent players, and the unified account system that pulled email, Google and Facebook logins into one primary account holding several characters. Along the way I wrote the Java socket server, moved the infrastructure from IDC to the cloud, and built the internal tooling and build automation. Earlier still: PUBG Labs and KRAFTON, Pati Games, and MaxonSoft.',
    },
    {
      ko: '새로운 기술을 겁내지 않습니다. 보안을 가르치는 고등학교에서 시작해 PC 온라인 게임과 모바일, 웹, 서버와 인프라까지 오가며 일했습니다. 그러다 보니 처음 보는 것도 대개 어디선가 본 구조의 변형으로 읽힙니다. 세부를 다 읽기 전에 이건 무엇과 무엇을 맞바꾼 설계인지가 먼저 보입니다. 빠른 대신 복잡하구나, 생산성을 속도와 바꿨구나 하는 식으로요. 그래서 이해가 빠른 편입니다.',
      en: "New technology doesn't intimidate me. I started at a high school that taught security, and have worked across PC online games, mobile and web, servers and infrastructure since. Something I haven't seen usually reads as a variant of a structure I have. Before I've read all the detail, what I see first is the trade-off it made — faster but harder to work with here, productivity given up for speed there. That's what makes me quick to understand things.",
    },
    {
      ko: '장애나 마감 앞에서는 오히려 침착해집니다. 라이브 서비스를 오래 하면서 그렇게 됐습니다.',
      en: 'Outages and deadlines tend to make me calmer rather than the opposite. Years of live service did that.',
    },
  ] satisfies I18n[],
}

export const contact = {
  email: '1n01raymond@gmail.com',
  /** 표기는 언어별로, 링크는 국제 표기 하나로 */
  phone: { ko: '010-8131-7338', en: '+82 10-8131-7338' } satisfies I18n,
  phoneHref: 'tel:+821081317338',
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
  start: string // YYYY-MM-DD
  end: string | null // null = 현재
  current?: boolean
}

export const experience: Experience[] = [
  {
    slug: 'naverz',
    company: { ko: '네이버제트', en: 'NAVER Z' },
    team: { ko: 'World → Unity', en: 'World → Unity' },
    title: { ko: 'Unity 프로그래머', en: 'Unity Programmer' },
    start: '2023-01-16',
    end: null,
    current: true,
  },
  {
    slug: 'metaz',
    company: { ko: '메타지', en: 'MetaZ' },
    team: { ko: 'Tidal Flats Studio', en: 'Tidal Flats Studio' },
    title: { ko: '리드 게임 프로그래머', en: 'Lead Game Programmer' },
    start: '2022-08-01',
    end: '2023-01-07',
  },
  {
    slug: 'awesomepiece',
    company: { ko: '어썸피스', en: 'Awesomepiece' },
    team: { ko: '좀비고 팀 → 킹갓캐슬 팀', en: 'Zombie High → King God Castle' },
    title: { ko: '리드 프로그래머', en: 'Lead Programmer' },
    start: '2018-01-29',
    end: '2022-04-01',
  },
  {
    slug: 'krafton',
    company: { ko: '크래프톤', en: 'KRAFTON' },
    team: {
      ko: 'P.CREW 팀 · 펍지랩스에서 법인 전환 (동일 팀)',
      en: 'P.CREW · corporate change from PUBG Labs (same team)',
    },
    title: { ko: '클라이언트 & 서버 프로그래머', en: 'Client & Server Programmer' },
    start: '2017-11-05',
    end: '2018-01-23',
  },
  {
    slug: 'pubglabs',
    company: { ko: '펍지랩스', en: 'PUBG Labs' },
    team: { ko: 'P.CREW 팀', en: 'P.CREW' },
    title: { ko: '클라이언트 & 서버 프로그래머', en: 'Client & Server Programmer' },
    start: '2017-02-01',
    // 종료일 = 크래프톤으로 법인 전환된 날. 같은 팀에서 소속 법인만 바뀜.
    end: '2017-11-05',
  },
  {
    slug: 'patigames',
    company: { ko: '넥스쳐 (파티게임즈)', en: 'Nexture (Pati Games)' },
    team: { ko: '커피팀 → 몰디브팀', en: 'Coffee → Maldives' },
    title: { ko: '클라이언트 & 서버 프로그래머', en: 'Client & Server Programmer' },
    start: '2015-12-07',
    end: '2017-02-01',
  },
  {
    slug: 'maxonsoft',
    company: { ko: '맥스온소프트', en: 'MaxonSoft' },
    team: { ko: 'WHO 팀', en: 'WHO' },
    title: { ko: '클라이언트 프로그래머', en: 'Client Programmer' },
    start: '2014-06-09',
    end: '2015-12-08',
  },
]

/* ------------------------------------------------------------------ */
/* 프로젝트                                                             */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string
  company: I18n
  /** 이 프로젝트를 소개할 대표 타이틀 */
  title: I18n
  period: I18n
  /** 카드에 걸리는 한 줄 요약 */
  summary: I18n
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
    company: { ko: '네이버제트', en: 'NAVER Z' },
    title: { ko: 'ZEPETO', en: 'ZEPETO' },
    period: { ko: '2023.01 — 현재', en: 'Jan 2023 — Present' },
    summary: {
      ko: '메타버스 플랫폼의 실시간 멀티플레이 월드와 PC 크로스플랫폼 출시, LLM 기반 AI R&D와 크리에이터 플랫폼 개발.',
      en: 'Real-time multiplayer worlds and the cross-platform PC launch, plus LLM-based AI R&D and creator platform work.',
    },
    stack: ['Unity3D', 'C#', 'Multiplayer', 'LLM', 'WebGL', 'iOS/Android Native', 'Windows/macOS'],
    image: '/projects/zepeto.webp',
    sections: [
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
          {
            ko: 'ZEPETO PC(Windows/Mac) 출시 — 크로스 플랫폼 지원 및 런타임 이슈 대응',
            en: 'ZEPETO for PC (Windows/Mac) — cross-platform support and runtime issue resolution',
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
    slug: 'metaz',
    company: { ko: '메타지', en: 'MetaZ' },
    title: { ko: 'Fidelion — Tidal Flats Studio', en: 'Fidelion — Tidal Flats Studio' },
    period: { ko: '2022.08 — 2023.01', en: 'Aug 2022 — Jan 2023' },
    summary: {
      ko: '리드 게임 프로그래머로서 Fidelion IP 기반 신규 프로젝트의 Unity 클라이언트와 Nest.js 서버 개발을 주도.',
      en: 'Led the Unity client and Nest.js server for a new title on the Fidelion IP, as Lead Game Programmer.',
    },
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
            ko: '프로젝트는 회사 사정으로 중단되며 마무리',
            en: 'The project was discontinued when the company wound down',
          },
        ],
      },
    ],
  },

  {
    slug: 'kinggodcastle',
    company: { ko: '어썸피스', en: 'Awesomepiece' },
    title: { ko: '킹갓캐슬', en: 'King God Castle' },
    period: { ko: '2018.01 — 2022.04', en: 'Jan 2018 — Apr 2022' },
    summary: {
      ko: '메인 프로그래머로 신규 개발부터 출시, 글로벌 라이브 서비스까지 담당한 모바일 전략 RPG.',
      en: 'A mobile strategy RPG I took from first build through launch into global live service, as main programmer.',
    },
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
          { ko: 'GCP 기반 에셋 번들 리소스 패치 시스템 구축', en: 'Built an asset bundle patching system on GCP' },
          {
            ko: 'Jenkins + Slack + Python을 활용한 자동 빌드·배포 봇 제작',
            en: 'Built an automated build/deploy bot with Jenkins, Slack and Python',
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
    company: { ko: '어썸피스', en: 'Awesomepiece' },
    title: { ko: '좀비고등학교', en: 'Zombie High' },
    period: { ko: '2018.01 — 2022.04', en: 'Jan 2018 — Apr 2022' },
    summary: {
      ko: '리드 프로그래머로 라이브 서비스를 운영하며 기념 초대형 업데이트와 동시 100명 멀티플레이를 구현.',
      en: 'Lead Programmer running live service — flagship anniversary updates and 100-player concurrent multiplayer.',
    },
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
            ko: '통합 계정 시스템 설계 및 개발 — 이메일·구글·페이스북 계정이 저마다 1계정 1캐릭터로 갈라져 있던 구조를, 대표 계정 하나에 기존 계정을 묶고 캐릭터를 여러 개 만들어 골라 접속하는 구조로 전환. 대표 계정은 휴대폰 본인인증 필수, 계정 복구 지원',
            en: 'Designed and built the unified account system — email, Google and Facebook logins had each been a separate account with one character; they now merge into a single primary account that holds several characters to pick between, with phone-based identity verification required to create it and account recovery on top',
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
            ko: 'Java 서버 성능 개선 — GC 교체(ZGC), Jmap/Jstack을 활용한 데드락 해결',
            en: 'Java server performance — moved to ZGC, resolved deadlocks with Jmap/Jstack',
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
            ko: 'NCP 기반 휴대폰 본인인증 시스템 제작 — 본인인증 요구가 급격히 강해지던 시기에 통합 계정의 대표 계정 생성 필수 절차로 적용',
            en: 'Built phone-based identity verification on NCP — made a required step for creating a primary account, at a point when verification requirements were tightening sharply',
          },
          {
            ko: 'Jenkins + Slack 연동 자동 빌드·배포 파이프라인 구축',
            en: 'Set up an automated build/deploy pipeline with Jenkins and Slack',
          },
          {
            ko: 'Log4j, Firebase, Elasticsearch를 통한 실시간 로그 수집·분석',
            en: 'Real-time log collection and analysis via Log4j, Firebase and Elasticsearch',
          },
          { ko: 'Django 기반 운영툴 페이지 개발', en: 'Built internal ops tooling in Django' },
          { ko: 'C# WinForms 기반 쿠폰 자동 생성 툴 제작', en: 'Built a coupon generation tool in C# WinForms' },
          { ko: 'Redis 자동 백업·복구 Python 스크립트 작성', en: 'Wrote Python scripts for automated Redis backup and restore' },
          { ko: 'Go 기반 악성 환불 유저 제재 시스템 개발', en: 'Built a refund-abuse sanction system in Go' },
          { ko: 'JWT 인증 기반 CS 페이지 개발', en: 'Built a JWT-authenticated customer support page' },
          { ko: 'IDC → NCP → GCP 서버 환경 이전 및 안정화', en: 'Migrated and stabilised infrastructure: IDC → NCP → GCP' },
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
          { ko: 'Flask 기반 운영툴 페이지 개발', en: 'Built internal ops tooling in Flask' },
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
    company: { ko: '넥스쳐 (파티게임즈)', en: 'Nexture (Pati Games)' },
    title: { ko: '아이러브커피', en: 'I Love Coffee' },
    period: { ko: '2015.12 — 2017.02', en: 'Dec 2015 — Feb 2017' },
    summary: {
      ko: 'Cocos2d-X 기반 라이브 서비스 운영. 시즌 테마와 이벤트·UI 콘텐츠를 제작·유지보수.',
      en: 'Live service on a Cocos2d-X client — seasonal themes and event/UI content, built and maintained.',
    },
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
    company: { ko: '맥스온소프트', en: 'MaxonSoft' },
    title: { ko: '월드 히어로즈 온라인', en: 'World Heroes Online' },
    period: { ko: '2014.06 — 2015.12', en: 'Jun 2014 — Dec 2015' },
    summary: {
      ko: '첫 커리어. PC 온라인 게임의 UI·전투 시스템과 Windows 패치 런처를 개발.',
      en: 'Where it started. UI and combat systems for a PC online game, plus the Windows patch launcher.',
    },
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
          ko: 'Java Netty 소켓 서버 — 동시 100명 멀티플레이, 매칭·랭킹, 채팅(ActiveMQ)',
          en: 'Java Netty socket servers — 100-player multiplayer, matchmaking/ranking, chat (ActiveMQ)',
        },
      },
      {
        label: 'Backend & Data',
        detail: {
          ko: 'Spring Boot, Nest.js, Django·Flask, Node.js, Go / MySQL, Redis, MongoDB',
          en: 'Spring Boot, Nest.js, Django/Flask, Node.js, Go / MySQL, Redis, MongoDB',
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
          ko: '운영툴, 장애 대응, 긴급 데이터 핸들링, 로그 분석(Log4j, Elasticsearch)',
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
    detail: { ko: '2017.05.26 · 17201012112B', en: '26 May 2017 · 17201012112B' },
  },
  {
    label: { ko: '프로그래밍기능사', en: 'Craftsman Programming' },
    detail: { ko: '2013.07.04 · 13849700094B', en: '4 Jul 2013 · 13849700094B' },
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
      ko: '문자열 Base64 암·복호화와 각종 수치 변환을 해주는 iOS 앱',
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
  experienceNote: {
    ko: '맥스온소프트부터 크래프톤까지는 현역 산업기능요원 복무 기간입니다 (2015.01 — 2017.11).',
    en: 'MaxonSoft through KRAFTON covers my mandatory military service, served as industrial technical personnel (Jan 2015 — Nov 2017).',
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

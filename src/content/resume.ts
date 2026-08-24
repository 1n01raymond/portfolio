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
    ko: '12년차 Unity 개발자. 클라이언트부터 서버·인프라까지 직접 만듭니다.',
    en: 'Unity developer, 12 years in. I build the client, the server, and the infrastructure under both.',
  } satisfies I18n,

  intro: {
    ko: '12년차 Unity 개발자로, 새로운 기술과 변화를 즐기며 긍정적으로 협업합니다. 게임을 넘어 다양한 개발 경험 속에서 문제 해결 과정 자체를 좋아하고, 함께 더 나은 서비스를 만들어가는 데 보람을 느낍니다.',
    en: 'A Unity developer with 12 years of experience who enjoys new technology and change, and collaborates with an open mind. Across game and non-game work alike, I like the problem-solving itself — and I find real satisfaction in building better services alongside a team.',
  } satisfies I18n,

  /** 히어로 롤 라인에 붙는 연차 표기. 숫자 나열 대신 이것 하나만 씁니다. */
  since: '2014',
}

export const contact = {
  email: '1n01raymond@gmail.com',
  phone: '+82 10-8131-7338',
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
}

export const projects: Project[] = [
  {
    slug: 'naverz',
    company: { ko: '네이버제트', en: 'NAVER Z' },
    title: { ko: 'ZEPETO', en: 'ZEPETO' },
    period: { ko: '2023.01 — 현재', en: 'Jan 2023 — Present' },
    summary: {
      ko: '메타버스 플랫폼의 실시간 멀티플레이 월드 개발과 PC 크로스플랫폼 출시.',
      en: 'Real-time multiplayer worlds on a metaverse platform, plus the cross-platform PC launch.',
    },
    stack: ['Unity3D', 'C#', 'Multiplayer', 'iOS/Android Native', 'Windows/macOS'],
    sections: [
      {
        heading: { ko: '주요 성과', en: 'Highlights' },
        items: [
          {
            ko: "ZEPETO 'Slime Party' 월드 — 실시간 멀티플레이 기반 캐주얼 콘텐츠 개발 및 유지보수",
            en: "ZEPETO 'Slime Party' world — built and maintained real-time multiplayer casual content",
          },
          {
            ko: "ZEPETO 'MyHome' 월드 — 유저 커스터마이징·소셜 기능 중심의 신규 기능 개발 및 운영",
            en: "ZEPETO 'MyHome' world — new features and live operation centred on user customisation and social play",
          },
          {
            ko: 'Unity 기반 YouTube Player — 월드 내 동영상 스트리밍 기능 구현 및 최적화',
            en: 'Unity-based YouTube player — in-world video streaming, implemented and optimised',
          },
          {
            ko: 'ZEPETO PC(Windows/Mac) 출시 — 크로스 플랫폼 지원 및 런타임 이슈 대응',
            en: 'ZEPETO for PC (Windows/Mac) — cross-platform support and runtime issue resolution',
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
    image: '/projects/fidelion.png',
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
    slug: 'awesomepiece',
    company: { ko: '어썸피스', en: 'Awesomepiece' },
    title: { ko: '좀비고등학교 · 킹갓캐슬', en: 'Zombie High · King God Castle' },
    period: { ko: '2018.01 — 2022.04', en: 'Jan 2018 — Apr 2022' },
    summary: {
      ko: '리드 프로그래머로 라이브 서비스 운영과 신작 원맨 개발을 병행. 동시 100명 레이싱 멀티플레이 구현.',
      en: 'Lead Programmer running live ops while solo-building a new title. Shipped 100-player concurrent racing.',
    },
    stack: ['Unity3D', 'C#', 'Java (Netty, Spring)', 'Lua', 'MySQL', 'Redis', 'GCP', 'NCP', 'Django', 'Go'],
    image: '/projects/zombiehigh.png',
    sections: [
      {
        heading: { ko: '좀비고등학교 — 게임 서비스 & 콘텐츠 개발', en: 'Zombie High — Live Service & Content' },
        items: [
          {
            ko: '모바일 게임 좀비고등학교 라이브 서비스 운영 및 신규 콘텐츠 제작',
            en: 'Ran live service and built new content for the mobile game Zombie High',
          },
          {
            ko: 'Unity3D 클라이언트 + Java Netty 소켓 서버 기반 멀티플레이 콘텐츠 개발',
            en: 'Built multiplayer content on a Unity3D client with a Java Netty socket server',
          },
          {
            ko: '모바일 환경에서 동시 100명 레이싱 멀티플레이 구현 — 네트워크 부하 최적화 및 동기화 구조 설계',
            en: 'Implemented 100-player concurrent racing on mobile — network load optimisation and sync architecture',
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
            ko: 'NCP 기반 핸드폰 본인인증 시스템 제작 및 서비스 적용',
            en: 'Built and shipped phone-based identity verification on NCP',
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
      {
        heading: { ko: '킹갓캐슬 — 신규 개발부터 라이브까지', en: 'King God Castle — From Zero to Live' },
        items: [
          {
            ko: '모바일 게임 킹갓캐슬 신규 개발부터 출시, 라이브 서비스까지 원맨 개발 주도',
            en: 'Solo-drove King God Castle from initial development through launch and into live service',
          },
          {
            ko: 'Unity3D 클라이언트 + Java Spring 웹 서버로 전체 콘텐츠 제작 및 서비스 운영',
            en: 'Built all content and ran the service on a Unity3D client with a Java Spring web server',
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
    slug: 'krafton',
    company: { ko: '크래프톤 · 펍지랩스', en: 'KRAFTON · PUBG Labs' },
    title: { ko: '포켓크루', en: 'Pocket Crew' },
    period: { ko: '2017.02 — 2018.01', en: 'Feb 2017 — Jan 2018' },
    summary: {
      ko: '신규 모바일 게임의 UI·전투·AI 구현과 Flask 기반 서버 연동, 빌드 자동화.',
      en: 'UI, combat and AI for a new mobile title, with a Flask backend and automated builds.',
    },
    stack: ['Unity3D', 'C#', 'Python (Flask)', 'Docker', 'Jenkins'],
    image: '/projects/pocketcrew.png',
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
    slug: 'patigames',
    company: { ko: '넥스쳐 (파티게임즈)', en: 'Nexture (Pati Games)' },
    title: { ko: '바닐라택틱스 · 아이러브커피', en: 'Vanilla Tactics · I Love Coffee' },
    period: { ko: '2015.12 — 2017.02', en: 'Dec 2015 — Feb 2017' },
    summary: {
      ko: '신작의 핵심 콘텐츠 구현과 쉐이더 작업, 그리고 기존 타이틀의 라이브 서비스 운영.',
      en: 'Core content and shaders on a new title, alongside live ops for an existing one.',
    },
    stack: ['Unity3D', 'C#', 'HLSL', 'Cocos2d-X', 'Lua', 'MongoDB', 'Redis', 'Jenkins'],
    sections: [
      {
        heading: { ko: '바닐라택틱스 — 게임 개발', en: 'Vanilla Tactics — Development' },
        items: [
          { ko: '모바일 게임 바닐라택틱스 신규 개발', en: 'Developed the new mobile title Vanilla Tactics' },
          {
            ko: 'Unity3D 클라이언트 및 C# 기반 웹 서버로 UI·전투·AI 등 핵심 콘텐츠 구현',
            en: 'Implemented core content — UI, combat, AI — on a Unity3D client with a C# web server',
          },
          { ko: '아트팀과 협업하여 Unity 쉐이더 코드 작성', en: 'Wrote Unity shader code in collaboration with the art team' },
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
      {
        heading: { ko: '아이러브커피 — 라이브 서비스', en: 'I Love Coffee — Live Service' },
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
    image: '/projects/worldheroes.png',
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
    heading: { ko: 'Core', en: 'Core' },
    items: [
      {
        label: 'Unity3D / C#',
        detail: {
          ko: '실시간 멀티플레이, Addressables, 최적화, 툴링',
          en: 'Real-time multiplayer, Addressables, optimisation, tooling',
        },
      },
      {
        label: 'Networking & Server',
        detail: {
          ko: 'Java (Spring, Netty), 멀티플레이 서버, 매칭/랭킹, 커뮤니티',
          en: 'Java (Spring, Netty), multiplayer servers, matchmaking/ranking, community',
        },
      },
      {
        label: 'LiveOps & Optimization',
        detail: {
          ko: '모바일·서버 성능 프로파일링, GC(ZGC) 교체, 데이터 핸들링',
          en: 'Mobile and server profiling, ZGC migration, data handling',
        },
      },
      {
        label: 'Native & Cross-Platform',
        detail: {
          ko: 'iOS/Android 빌드 및 Unity 네이티브 연동, C++ 플러그인',
          en: 'iOS/Android builds, Unity native bridging, C++ plugins',
        },
      },
    ],
  },
  {
    heading: { ko: 'Supporting', en: 'Supporting' },
    items: [
      { label: 'Backend', detail: { ko: 'Python (Flask, Django), Node.js', en: 'Python (Flask, Django), Node.js' } },
      { label: 'Database', detail: { ko: 'MySQL, MongoDB, Redis', en: 'MySQL, MongoDB, Redis' } },
      { label: 'Cloud / Infra', detail: { ko: 'GCP, NCP, AWS, Docker, Firebase', en: 'GCP, NCP, AWS, Docker, Firebase' } },
    ],
  },
  {
    heading: { ko: 'Tooling & Collaboration', en: 'Tooling & Collaboration' },
    items: [
      { label: 'Toolchain', detail: { ko: 'Jenkins, Git, Jira, Notion, Slack, Confluence', en: 'Jenkins, Git, Jira, Notion, Slack, Confluence' } },
      { label: 'Observability', detail: { ko: 'Log4j, ElasticSearch, Firebase', en: 'Log4j, Elasticsearch, Firebase' } },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* 일하는 방식                                                          */
/* ------------------------------------------------------------------ */

export const howIWork: I18n[] = [
  {
    ko: '새로운 기술과 업무를 배우고 빠르게 적응하는 과정을 즐깁니다.',
    en: 'I enjoy picking up unfamiliar technology and adapting quickly.',
  },
  {
    ko: '주어진 자원(인력, 시간, 비용) 안에서 최선의 결과를 만들어내는 데 집중합니다.',
    en: 'I focus on getting the best result out of the people, time and budget actually available.',
  },
  {
    ko: '문제 상황에서는 원인을 신속히 파악하고 해결한 경험이 많습니다.',
    en: 'When things break, I have a long track record of finding the cause fast and fixing it.',
  },
  {
    ko: '팀원과 타팀과의 원활한 소통과 상호 이해를 위해 항상 노력합니다.',
    en: 'I put steady effort into communication and mutual understanding, within my team and across others.',
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
    school: { ko: '한국디지털미디어고등학교', en: 'Korea Digital Media High School' },
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
/* UI 문자열                                                            */
/* ------------------------------------------------------------------ */

export const ui = {
  nav: {
    work: { ko: '프로젝트', en: 'Work' },
    resume: { ko: '이력서', en: 'Resume' },
    contact: { ko: '연락처', en: 'Contact' },
  },
  sections: {
    work: { ko: 'Selected Work', en: 'Selected Work' },
    skills: { ko: 'Skills', en: 'Skills' },
    howIWork: { ko: 'How I Work', en: 'How I Work' },
    contact: { ko: 'Contact', en: 'Contact' },
    experience: { ko: '경력', en: 'Experience' },
    education: { ko: '학력', en: 'Education' },
    languages: { ko: '외국어', en: 'Languages' },
    misc: { ko: '기타', en: 'Other' },
  },
  actions: {
    savePdf: { ko: 'PDF로 저장', en: 'Save as PDF' },
    viewProject: { ko: '자세히 보기', en: 'View project' },
    back: { ko: '돌아가기', en: 'Back' },
    present: { ko: '현재', en: 'Present' },
  },
  legacy: {
    ko: '이전 버전 (2019)',
    en: 'Previous version (2019)',
  },
}

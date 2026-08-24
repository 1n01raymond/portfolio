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
    slug: 'awesomepiece',
    company: { ko: '어썸피스', en: 'Awesomepiece' },
    title: { ko: '좀비고등학교 · 킹갓캐슬', en: 'Zombie High · King God Castle' },
    period: { ko: '2018.01 — 2022.04', en: 'Jan 2018 — Apr 2022' },
    summary: {
      ko: '리드 프로그래머로 라이브 서비스 운영과 신작 개발을 병행. 동시 100명 접속 멀티플레이 구현.',
      en: 'Lead Programmer balancing live operations with a new title. Shipped 100-player concurrent multiplayer.',
    },
    stack: ['Unity3D', 'C#', 'Java (Netty, Spring)', 'Lua', 'MySQL', 'Redis', 'GCP', 'NCP', 'Django', 'Go'],
    image: '/projects/zombiehigh.webp',
    gallery: [
      {
        src: '/projects/zombiehigh-multi.webp',
        caption: {
          ko: 'Unity3D 클라이언트와 Java Netty 소켓 서버 기반 실시간 멀티플레이. 모바일에서 동시 100명 접속 구현',
          en: 'Real-time multiplayer on a Unity3D client and a Java Netty socket server, 100 concurrent players on mobile.',
        },
      },
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
        src: '/projects/zombiehigh-chase.webp',
        caption: {
          ko: '시즌마다 이어진 에피소드 스토리 업데이트와 학교생활 콘텐츠 담당',
          en: 'Season-by-season episode story updates and the School Life content.',
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
        heading: { ko: '좀비고등학교 — 게임 서비스 & 콘텐츠 개발', en: 'Zombie High — Live Service & Content' },
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
            ko: '통합계정시스템 설계 및 개발 — 기기별로 분리된 게임 데이터 통합, 이메일·구글·전화번호 로그인 및 계정 복구 지원',
            en: 'Designed and built the unified account system — consolidated per-device save data into one account, with email, Google and phone sign-in plus account recovery',
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
            ko: '모바일 게임 킹갓캐슬의 메인 프로그래머로 신규 개발부터 출시, 라이브 서비스까지 담당',
            en: 'Main programmer on King God Castle, from first build through launch and into live service',
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
    slug: 'patigames',
    company: { ko: '넥스쳐 (파티게임즈)', en: 'Nexture (Pati Games)' },
    title: { ko: '바닐라택틱스 · 아이러브커피', en: 'Vanilla Tactics · I Love Coffee' },
    period: { ko: '2015.12 — 2017.02', en: 'Dec 2015 — Feb 2017' },
    summary: {
      ko: '신작의 핵심 콘텐츠 구현과 쉐이더 작업, 그리고 기존 타이틀의 라이브 서비스 운영.',
      en: 'Core content and shaders on a new title, alongside live ops for an existing one.',
    },
    stack: ['Unity3D', 'C#', 'HLSL', 'Cocos2d-X', 'Lua', 'MongoDB', 'Redis', 'Jenkins'],
    image: '/projects/ilovecoffee.webp',
    gallery: [
      {
        src: '/projects/vanilla-tactics.webp',
        caption: {
          ko: '2016년 신작 라인업 발표에서 공개된 바닐라택틱스. 이후 회사 사정으로 프로젝트 중단',
          en: 'Vanilla Tactics, revealed in the 2016 line-up announcement. The project was later shelved for company reasons.',
        },
      },
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
          ko: 'Java (Netty, Spring) — 동시 100명 멀티플레이, 매칭·랭킹, 채팅(ActiveMQ)',
          en: 'Java (Netty, Spring) — 100-player multiplayer, matchmaking/ranking, chat (ActiveMQ)',
        },
      },
      {
        label: 'Backend & Data',
        detail: {
          ko: 'Nest.js, Django·Flask, Node.js, Go / MySQL, Redis, MongoDB',
          en: 'Nest.js, Django/Flask, Node.js, Go / MySQL, Redis, MongoDB',
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
/* 일하는 방식                                                          */
/* ------------------------------------------------------------------ */

export const howIWork: I18n[] = [
  {
    ko: '처음 보는 기술일수록 직접 만들어보며 익힙니다. 습득이 빠르다는 평을 꾸준히 들어왔습니다.',
    en: 'The less familiar something is, the more I learn it by building with it. People have consistently told me I pick things up fast.',
  },
  {
    ko: '난이도가 높고 여러 시스템이 얽힌 문제를 좋아합니다. 오래 붙잡고 파고드는 쪽이 성향에 맞습니다.',
    en: 'I gravitate to hard problems that span several systems. Staying with one until it gives is the part I enjoy.',
  },
  {
    ko: '장애나 마감처럼 압박이 큰 상황에서 오히려 침착해집니다. 라이브 서비스를 오래 하며 몸에 밴 부분입니다.',
    en: 'Outages and deadlines make me calmer, not louder — a habit built over years of live service.',
  },
  {
    ko: '클라이언트에서 멈추지 않습니다. 서버, 인프라, 운영 툴까지 필요한 곳은 직접 열어봅니다.',
    en: "I don't stop at the client — server, infrastructure and internal tooling are all fair game when that's where the answer is.",
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
    gallery: { ko: '스크린샷', en: 'Screenshots' },
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

export const siteConfig = {
  name: "김준석",
  title: "Full Stack Developer",
  description: "김준석의 개발자 포트폴리오",
  accentColor: "#ffb000",
  // 메인 화면에 표시되는 한 줄 소개와 경력 연차
  tagline:
    "안주하지 않는 도전이 성장을 이끌고, 솔선수범의 자세가 조직의 성공을 완성합니다",
  careerYears: "5+",
  social: {
    email: "wnsjtr5557@gmail.com",
    linkedin: "",
    instagram: "https://www.instagram.com/_se._.ok2/",
    github: "https://github.com/KJS6646",
  },
  aboutMe:
    "안주하지 않는 도전이 성장을 이끌고, 솔선수범의 자세가 조직의 성공을 완성한다고 믿습니다. 학창 시절 동아리 반장으로서 새로운 축제 이벤트를 기획해 가장 인기 있는 이벤트로 성공시킨 경험, 최전방 수호병으로 격오지에서 복무하며 '어려운 일일수록 내가 먼저 솔선수범하자'는 책임감을 체화한 경험이 지금의 저를 만들었습니다. 어떠한 상황에서도 문제 해결의 가능성을 보는 긍정적 마인드와 반복적 검증을 거치는 철저한 꼼꼼함을 바탕으로, 멀티태스킹 환경에서도 속도와 정확성을 모두 갖춘 업무 처리 능력을 발휘합니다.",
  skills: [
    { category: "Language", items: ["Delphi", "JavaScript", "Java", "HTML", "CSS"] },
    { category: "Framework / Platform", items: ["React", "Vue", "Spring Boot", "Nexacro"] },
    { category: "Database", items: ["Oracle", "PostgreSQL"] },
    { category: "CI/CD", items: ["Jenkins", "Docker"] },
    { category: "Tool", items: ["Toad", "DBeaver", "Tortoise SVN", "Git", "Orca"] },
  ],
  // 성장 스토리 (프로젝트 섹션 상단 QUEST LOG)
  journey: {
    intro:
      "제조 현장의 MES로 개발을 시작해 ERP로 시야를 넓혔고, 이직 후에는 웹 기반 TMS와 인더스트리 4.0 표준인 AAS까지, 단계마다 한 칸씩 더 높은 블록을 쌓아 왔습니다. 지금은 AAS 프로젝트를 진행하며 에이전틱 바이브 코딩을 익히고, 다음 레벨을 준비하고 있습니다.",
    next: {
      title: "에이전틱 바이브 코딩",
      story:
        "AAS 프로젝트를 진행하며 Claude, Orca 같은 AI 에이전트 도구와 협업하는 에이전틱 바이브 코딩을 배우고 있습니다. 요구사항을 설계하고, 에이전트에게 맡기고, 결과를 꼼꼼히 검증하는 방식으로 개발 속도와 품질을 함께 끌어올리는 중이며, 이 포트폴리오 역시 그렇게 만들었습니다. 배움은 계속됩니다.",
      tools: ["Claude", "Orca", "Agentic Coding"],
    },
  },
  // 수행 시스템 (단계 순서대로)
  systems: [
    {
      stage: "01",
      code: "MES",
      name: "Manufacturing Execution System",
      nameKo: "제조실행시스템",
      company: "투윈시스템",
      period: "2020.12 ~",
      level: 1,
      storyTitle: "프로그래머로서의 첫 시작",
      story:
        "조선, 자동차 부품, 열처리 등 다양한 제조 현장을 직접 오가며 Delphi로 MES를 만들었습니다. 현장의 언어를 이해하고, 영업부터 출하까지의 공정 흐름을 시스템으로 옮기는 법을 여기서 배웠습니다.",
      description:
        "생산 현장의 작업 지시부터 공정 진행, 설비, 품질, 생산 실적까지 실시간으로 관리하는 시스템입니다. 상위의 생산 계획(ERP)과 현장 설비 사이를 연결해 '지금 공장에서 무엇이 어떻게 만들어지고 있는지'를 보여줍니다.",
      role: "Delphi + Oracle/PostgreSQL 기반으로 영업·구매·생산·품질·출하 모듈을 설계·개발하고, 열처리 공정의 AI 예측 솔루션 UI를 개발했습니다.",
    },
    {
      stage: "02",
      code: "ERP",
      name: "Enterprise Resource Planning",
      nameKo: "전사적 자원관리",
      company: "투윈시스템",
      period: "~ 2024.07",
      level: 2,
      storyTitle: "MES를 넘어, 회사 전체를 보다",
      story:
        "생산 현장의 데이터가 영업, 구매, 재고, 회계로 어떻게 이어지는지 이해하며 ERP 기능까지 개발 범위를 넓혔습니다. 공장 단위에서 기업 전체 단위로 시야가 넓어진 시기입니다.",
      description:
        "영업, 구매, 재고, 생산 계획, 회계, 인사 등 기업 전반의 자원과 업무 데이터를 하나의 시스템으로 통합해 관리하는 시스템입니다. 부서별로 흩어진 정보를 연결해 경영 의사결정의 기반이 됩니다.",
      role: "투윈시스템 재직 중 MES·스마트팩토리 구축과 함께 ERP 개발을 수행했습니다.",
    },
    {
      stage: "03",
      code: "TMS",
      name: "Transportation Management System",
      nameKo: "운송관리시스템",
      company: "동연에스엔티",
      period: "2025.01 ~ 2025.10",
      level: 3,
      storyTitle: "이직, 그리고 웹 풀스택으로의 전환",
      story:
        "데스크톱(Delphi)에서 React + Spring Boot 기반의 웹 풀스택으로 기술 스택을 전환했습니다. 4인 팀에서 GIS로 차량과 경로를 다루는 운송관리 시스템을 개발하며 한 단계 더 높은 난이도에 도전했습니다.",
      description:
        "화물의 배차, 운송 경로, 차량 위치 추적, 운임 정산 등 물류 운송의 전 과정을 계획·실행·관리하는 시스템입니다. 지도(GIS)와 연계해 차량과 경로를 시각적으로 관리합니다.",
      role: "React + Spring Boot로 철강업체 운송관리 WEB의 프론트엔드·백엔드를 개발하고 GIS 기능을 구현했습니다.",
    },
    {
      stage: "04",
      code: "AAS",
      name: "Asset Administration Shell",
      nameKo: "자산관리쉘",
      company: "동연에스엔티",
      period: "2026.03 ~ 현재",
      level: 4,
      storyTitle: "인더스트리 4.0 국제 표준에 도전",
      story:
        "국제 표준인 AAS와 Eclipse BaSyx 플랫폼을 새로 학습하며 설비 자산을 디지털 트윈으로 구축하고 있습니다. Vue 기반 자산관리 WEB 개발부터 Jenkins·Docker 배포까지 맡으며 지금까지 중 가장 높은 난이도의 프로젝트를 진행 중입니다.",
      description:
        "인더스트리 4.0의 국제 표준으로, 설비·자산의 정보를 표준화된 디지털 트윈 형태로 기술해 서로 다른 시스템 간에도 데이터를 주고받을 수 있게 합니다. Eclipse BaSyx는 AAS를 구현하는 오픈소스 플랫폼입니다.",
      role: "BaSyx 플랫폼 기반으로 철강업체의 AAS를 구축하고, Vue + Spring Boot로 자산관리 WEB을 개발했습니다.",
    },
  ],
  projects: [
    {
      name: "철강업체 AAS 구축 2026",
      system: "AAS",
      description:
        "철강업체의 자산관리시스템 WEB 및 플랫폼 구축. AAS(Asset Administration Shell) 구축(BaSyx 플랫폼) 및 WEB 구축 담당. (3인 / 2026-03-10 ~ 2026-07-10)",
      link: "",
      skills: ["Vue", "JavaScript", "Spring Boot", "Java", "Jenkins", "Docker"],
    },
    {
      name: "철강업체 TMS 구축 2025",
      system: "TMS",
      description:
        "철강업체의 운송관리 시스템 개발. TMS WEB 구축 및 GIS 기능 구현 (프론트엔드/백엔드). (4인 / 2025-01-13 ~ 2025-10-21)",
      link: "",
      skills: ["React", "JavaScript", "Spring Boot", "Java", "Jenkins"],
    },
    {
      name: "조선기자재 배관 가공 업체 2023 스마트공장 구축(고도화)",
      system: "MES",
      description:
        "타 업체 MES SYSTEM 사용이 매우 미흡하여 영업~출하까지 프로세스 설계 및 MES SYSTEM 신규 개발. (2인 / 2023-08-19 ~ 2024-06-28)",
      link: "",
      skills: ["Delphi", "PostgreSQL", "DBeaver", "SVN"],
    },
    {
      name: "고주파 열처리업체 2023 데이터 인프라 구축 AI 솔루션 실증 사업",
      system: "MES",
      description:
        "AI 솔루션 UI 개선 및 추가기능 개발. MES AI SYSTEM UI 디자인 및 개발 담당. (2인 / 2023-08-31 ~ 2024-01-30)",
      link: "",
      skills: ["Delphi", "Oracle", "Python", "SVN"],
    },
    {
      name: "자동차 부품 도금 생산 업체 2022 대중소 상생형 스마트공장 구축",
      system: "MES",
      description:
        "라인 신설로 인한 기존 MES SYSTEM 전체적인 보수 2차 작업 및 기능 개선, 추가 기능 개발 (영업/구매/생산/품질/약품). (2인 / 2022-11-15 ~ 2024-01-30)",
      link: "",
      skills: ["Delphi", "Oracle", "Toad", "SVN"],
    },
    {
      name: "침탄 열처리 업체 2022 스마트 공장 구축(고도화)",
      system: "MES",
      description:
        "기존 타 업체 MES SYSTEM 사용이 미흡하여 영업/구매/생산/품질 파트 프로세스 설계 및 MES SYSTEM 신규 도입. (1인 / 2022-07-28 ~ 2024-01-27)",
      link: "",
      skills: ["Delphi", "Oracle", "Toad", "SVN"],
    },
    {
      name: "고주파 열처리업체 2022 스마트 공장 구축(고도화)",
      system: "MES",
      description:
        "최적 작업 조건 값 도출 데이터 분석 시스템 구축을 위한 MES SYSTEM 유지보수 및 신규 기능 개발. (2인 / 2022-07-26 ~ 2024-01-25)",
      link: "",
      skills: ["Delphi", "Oracle", "Toad", "SVN"],
    },
    {
      name: "고주파 열처리업체 2022 데이터 인프라 구축 AI 솔루션 실증 사업",
      system: "MES",
      description:
        "AI 솔루션 도입으로 작업조건, 경도 경화 깊이 예측을 위한 MES AI SYSTEM UI 디자인 및 개발. (2인 / 2022-08-16 ~ 2022-12-15)",
      link: "",
      skills: ["Delphi", "Oracle", "Python", "SVN"],
    },
    {
      name: "조선 열교환기 제조 업체 2021 스마트공장 구축(고도화)",
      system: "MES",
      description:
        "수주에서 출하까지 MES SYSTEM 중 영업/구매/출하 프로세스를 설계하고 Delphi 및 PostgreSQL을 사용하여 DB를 구축, SVN으로 협업관리. (2인 / 2021-10-01 ~ 2022-12-26)",
      link: "",
      skills: ["Delphi", "PostgreSQL", "DBeaver", "SVN"],
    },
    {
      name: "자동차 부품 도금 생산 업체 2021 대중소 상생형 스마트 공장 구축",
      system: "MES",
      description:
        "라인 신설로 인한 기존 MES SYSTEM 전체적인 보수작업 및 추가 기능 개발 (영업/구매/생산/품질/약품). (2인 / 2021-12-15 ~ 2022-08-31)",
      link: "",
      skills: ["Delphi", "Oracle", "Toad", "SVN"],
    },
    {
      name: "고주파 열처리 업체 2021 스마트 공장 구축(고도화)",
      system: "MES",
      description:
        "고주파 열처리 업체 MES SYSTEM 유지보수 및 기능개선, 신규 기능 개발 (영업/구매/품질). (2인 / 2021-07-14 ~ 2022-07-13)",
      link: "",
      skills: ["Delphi", "Oracle", "Toad", "SVN"],
    },
  ],
  experience: [
    {
      company: "동연에스엔티",
      title: "Full Stack Developer",
      dateRange: "2024.11 ~ 재직중",
      bullets: [
        "SI 개발 (WEB 시스템 개발)",
        "철강업체 TMS 구축: React/Spring Boot 기반 운송관리 시스템 프론트/백엔드 개발",
        "철강업체 AAS 구축: BaSyx 플랫폼 기반 자산관리 WEB 및 플랫폼 구축",
      ],
    },
    {
      company: "투윈시스템",
      title: "MES Developer",
      dateRange: "2020.12 ~ 2024.07",
      bullets: [
        "SI 개발 (MES, ERP, 스마트팩토리 개발)",
        "다수의 스마트공장 구축 사업 수행 — 조선/자동차 부품/열처리 등 제조업 전반의 MES 프로세스 설계 및 개발",
        "Delphi + Oracle/PostgreSQL 기반 MES SYSTEM 신규 구축 및 유지보수, AI 솔루션 UI 개발",
      ],
    },
  ],
  education: [
    {
      school: "서울사이버대학교",
      degree: "빅데이터정보보안학과",
      dateRange: "2025.03 ~ 재학중",
      achievements: [],
    },
  ],
  certifications: [
    { date: "2025.12", name: "정보처리기사", org: "한국산업인력공단" },
    { date: "2024.09", name: "정보처리산업기사", org: "한국산업인력공단" },
    { date: "2024.09", name: "SQL개발자 (SQLD)", org: "한국데이터베이스진흥센터" },
    { date: "2018.12", name: "전산회계 2급 (국가공인)", org: "한국세무사협회" },
    { date: "2015.11", name: "2종보통운전면허", org: "경찰청" },
  ],
};

/**
 * 에스엠재활센터 사이트 데이터
 * 더미 데이터로 구성되어 있으며, 실제 운영 시 교체 필요
 */
export const SITE_DATA = {
  // 기본 정보
  name: "에스엠재활센터",
  phone: "02-1234-5678",
  address: "서울시 강남구 테헤란로 123, SM빌딩 4층",
  email: "contact@smrehab.kr",

  // 메인섹션 (히어로)
  hero: {
    title: "당신의 건강한 움직임을 되찾아 드립니다",
    subtitle:
      "전문 의료진과 함께하는 1:1 맞춤 재활 프로그램으로 일상의 활력을 되찾으세요.",
  },

  // 센터 소개
  about: {
    title: "에스엠재활센터를 소개합니다",
    description:
      "에스엠재활센터는 환자 중심의 맞춤형 재활치료를 제공합니다. 최신 의료 장비와 전문 의료진의 노하우를 바탕으로, 각 환자에게 최적화된 치료 계획을 수립하여 빠른 회복을 돕습니다.",
    features: [
      {
        icon: "UserCheck",
        title: "1:1 맞춤 치료",
        description:
          "환자 개개인의 상태를 정밀 분석하여 맞춤형 치료 계획을 수립합니다.",
      },
      {
        icon: "Award",
        title: "전문 의료진",
        description:
          "10년 이상 경력의 전문 치료사가 직접 치료를 진행합니다.",
      },
      {
        icon: "Cpu",
        title: "최신 장비",
        description:
          "최첨단 재활 장비를 도입하여 효과적인 치료를 제공합니다.",
      },
    ],
  },

  // 의료진 소개
  team: [
    {
      name: "김재활",
      role: "대표원장",
      specialty: "도수치료 / 스포츠재활 전문",
      career: [
        "연세대학교 물리치료학과 졸업",
        "삼성서울병원 재활의학과 10년 근무",
        "대한도수치료학회 정회원",
      ],
      image: "/images/team-1.jpg",
    },
    {
      name: "이운동",
      role: "부원장",
      specialty: "운동재활 / 체형교정 전문",
      career: [
        "고려대학교 체육교육과 졸업",
        "국가대표 의무트레이너 역임",
        "운동재활 전문자격 보유",
      ],
      image: "/images/team-2.jpg",
    },
    {
      name: "박통증",
      role: "치료실장",
      specialty: "통증치료 / 근골격계 재활 전문",
      career: [
        "서울대학교 물리치료학과 석사",
        "아산병원 통증센터 5년 근무",
        "만성통증 전문 치료사",
      ],
      image: "/images/team-3.jpg",
    },
  ],

  // 치료 프로그램
  programs: [
    {
      title: "도수치료",
      description:
        "숙련된 전문 치료사의 손으로 직접 근육과 관절을 이완시켜 통증을 완화하고 기능을 회복시킵니다.",
      icon: "Hand",
      features: ["척추 교정", "관절 가동술", "근막 이완"],
    },
    {
      title: "운동재활",
      description:
        "개인별 맞춤 운동 프로그램을 통해 근력을 강화하고 정상적인 움직임 패턴을 회복합니다.",
      icon: "Dumbbell",
      features: ["근력 강화", "유연성 향상", "균형 훈련"],
    },
    {
      title: "통증치료",
      description:
        "급성 및 만성 통증의 원인을 분석하고, 다양한 치료 기법을 통해 효과적으로 통증을 관리합니다.",
      icon: "HeartPulse",
      features: ["급성 통증 관리", "만성 통증 치료", "신경통 완화"],
    },
    {
      title: "체형교정",
      description:
        "잘못된 자세로 인한 체형 불균형을 분석하고, 교정 운동과 치료를 통해 바른 체형을 만듭니다.",
      icon: "PersonStanding",
      features: ["자세 분석", "골반 교정", "척추 정렬"],
    },
  ],

  // 이용안내
  info: {
    hours: {
      weekday: "09:00 - 21:00",
      saturday: "09:00 - 18:00",
      sunday: "휴무",
      holiday: "휴무 (명절 등 공휴일)",
    },
    parking: "건물 내 지하주차장 이용 가능 (2시간 무료)",
    reservation: "전화 예약 또는 방문 예약 가능",
    insurance: "건강보험 적용 (일부 치료 항목)",
  },

  // 네비게이션 메뉴
  navigation: [
    { label: "센터 소개", href: "#about" },
    { label: "의료진 소개", href: "#team" },
    { label: "치료 프로그램", href: "#programs" },
    { label: "이용안내", href: "#info" },
  ],
};

export type SiteData = typeof SITE_DATA;


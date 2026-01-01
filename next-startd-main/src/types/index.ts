/**
 * 공통 타입 정의
 * 에스엠재활센터 사이트 전체에서 사용되는 타입들
 */

import type { LucideIcon } from "lucide-react";

// ============================================
// Navigation Types
// ============================================

export interface NavigationItem {
  /** 메뉴 라벨 */
  label: string;
  /** 링크 href */
  href: string;
}

// ============================================
// Team Types
// ============================================

export interface TeamMember {
  /** 이름 */
  name: string;
  /** 직책 */
  role: string;
  /** 전문분야 */
  specialty: string;
  /** 경력 목록 */
  career: string[];
  /** 프로필 이미지 경로 */
  image: string;
}

// ============================================
// Program Types
// ============================================

export type IconName = "Hand" | "Dumbbell" | "HeartPulse" | "PersonStanding";

export interface Program {
  /** 프로그램 제목 */
  title: string;
  /** 프로그램 설명 */
  description: string;
  /** 아이콘 이름 */
  icon: IconName;
  /** 세부 특징 목록 */
  features: string[];
}

// ============================================
// Info Types
// ============================================

export interface OperatingHours {
  weekday: string;
  saturday: string;
  sunday: string;
  holiday: string;
}

export interface InfoData {
  hours: OperatingHours;
  parking: string;
  reservation: string;
  insurance: string;
}

// ============================================
// Hero Types
// ============================================

export interface HeroData {
  title: string;
  subtitle: string;
}

// ============================================
// About Types
// ============================================

export interface AboutFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  title: string;
  description: string;
  features: AboutFeature[];
}

// ============================================
// Site Data Types
// ============================================

export interface SiteData {
  name: string;
  phone: string;
  address: string;
  email: string;
  hero: HeroData;
  about: AboutData;
  team: TeamMember[];
  programs: Program[];
  info: InfoData;
  navigation: NavigationItem[];
}

// ============================================
// Component Props Types
// ============================================

export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children?: React.ReactNode;
}

// ============================================
// Icon Types
// ============================================

export type IconComponent = LucideIcon;

export type IconMap = Record<IconName, IconComponent>;

// ============================================
// Animation Types
// ============================================

export interface AnimationVariants {
  hidden: object;
  visible: object;
}

export interface ScrollAnimationConfig {
  /** 뷰포트 진입 시 트리거할 마진 */
  rootMargin?: string;
  /** 트리거 임계값 (0-1) */
  threshold?: number;
  /** 한 번만 실행 */
  once?: boolean;
}

// ============================================
// SEO Types
// ============================================

export interface OpenGraphImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface StructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  openingHoursSpecification?: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
}


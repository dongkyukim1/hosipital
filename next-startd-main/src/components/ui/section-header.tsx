import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SectionHeader 컴포넌트
 * 반복되는 섹션 헤더 패턴 (label + title + description)
 */

type SectionTheme = "light" | "dark";

interface SectionHeaderProps {
  /** 상단 라벨 (예: "About Us") */
  label?: string;
  /** 메인 타이틀 */
  title: string;
  /** 설명 텍스트 */
  description?: string;
  /** 테마 (light/dark) */
  theme?: SectionTheme;
  /** 정렬 */
  align?: "left" | "center";
  /** 추가 클래스 */
  className?: string;
  /** 타이틀 id (접근성) */
  titleId?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  theme = "light",
  align = "center",
  className,
  titleId,
}: SectionHeaderProps) {
  const isLight = theme === "light";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter && "text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "label mb-4",
            isLight ? "text-accent" : "text-accent-light"
          )}
        >
          {label}
        </p>
      )}
      
      <h2
        id={titleId}
        className={cn(
          "heading-2 mb-6",
          isLight ? "text-primary" : "text-white"
        )}
      >
        {title}
      </h2>
      
      {description && (
        <p
          className={cn(
            "body-default max-w-2xl",
            isCenter && "mx-auto",
            isLight ? "text-text-secondary" : "text-white/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export type { SectionHeaderProps };


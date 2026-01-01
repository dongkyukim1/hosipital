"use client";

import { useState, useEffect } from "react";

/**
 * Active Section Hook
 * IntersectionObserver를 사용하여 현재 보이는 섹션을 감지하는 훅
 */

interface UseActiveSectionOptions {
  /** 섹션 ID 목록 */
  sectionIds: string[];
  /** root margin (기본값: 뷰포트 중앙 기준) */
  rootMargin?: string;
}

export function useActiveSection(options: UseActiveSectionOptions): string {
  const { sectionIds, rootMargin = "-50% 0px -50% 0px" } = options;
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    // 각 섹션 관찰 시작
    sectionIds.forEach((id) => {
      const element = document.getElementById(id.replace("#", ""));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}


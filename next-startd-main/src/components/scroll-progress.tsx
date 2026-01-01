"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * 스크롤 진행률 표시 바
 * 페이지 상단에 고정되어 스크롤 진행률을 시각적으로 표시
 */
export default function ScrollProgress() {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion 시 숨김
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 z-100 pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="페이지 스크롤 진행률"
    >
      <div
        className="h-full bg-accent origin-left transition-transform duration-100"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}


"use client";

import { useState, useEffect } from "react";

/**
 * Reduced Motion Hook
 * 사용자의 reduced motion 설정을 감지하는 훅
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // 미디어 쿼리 생성
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // 초기값 설정
    setPrefersReducedMotion(mediaQuery.matches);

    // 변경 감지 핸들러
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // 이벤트 리스너 등록
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}


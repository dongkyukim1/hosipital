"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Back to Top 버튼
 * 스크롤 위치에 따라 표시/숨김
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      // 뷰포트 높이의 50% 이상 스크롤했을 때 표시
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="페이지 맨 위로 이동"
      className={cn(
        "fixed bottom-8 right-8 z-[var(--z-fixed)]",
        "w-12 h-12 rounded-full",
        "bg-primary text-white shadow-lg",
        "flex items-center justify-center",
        "transition-all duration-300",
        "hover:bg-primary-light hover:shadow-xl hover:-translate-y-1",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}


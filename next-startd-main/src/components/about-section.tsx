"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { SITE_DATA } from "@/constants/site-data";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// 센터 이미지 슬라이드
const centerImages = [
  {
    url: "https://picsum.photos/seed/rehab1/1920/1080",
    alt: "에스엠재활센터 로비 - 밝고 쾌적한 대기 공간",
  },
  {
    url: "https://picsum.photos/seed/rehab2/1920/1080",
    alt: "최신 치료 장비 - 첨단 재활 기구가 갖춰진 치료실",
  },
  {
    url: "https://picsum.photos/seed/rehab3/1920/1080",
    alt: "재활 운동 공간 - 넓은 운동 치료실",
  },
  {
    url: "https://picsum.photos/seed/rehab4/1920/1080",
    alt: "1:1 치료실 - 프라이빗한 개인 치료 공간",
  },
];

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // 슬라이드 이동 함수
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % centerImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + centerImages.length) % centerImages.length);
  }, []);

  // 키보드 네비게이션
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          prevSlide();
          break;
        case "ArrowRight":
          event.preventDefault();
          nextSlide();
          break;
        case " ":
        case "Enter":
          event.preventDefault();
          setIsPaused((prev) => !prev);
          break;
      }
    },
    [prevSlide, nextSlide]
  );

  // 탭 가시성 감지
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // 자동 슬라이드 (reduced motion 시 비활성화)
  useEffect(() => {
    if (prefersReducedMotion || isPaused || !isVisible) return;

    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion, isPaused, isVisible, nextSlide]);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 캐러셀 영역 */}
      <div
        ref={carouselRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="센터 시설 이미지 슬라이드"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      >
        {/* 배경 이미지 슬라이드 */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="absolute inset-0"
        >
          {centerImages.map((image, index) => (
            <div
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${centerImages.length}: ${image.alt}`}
              aria-hidden={index !== currentSlide}
              className={cn(
                "absolute inset-0",
                prefersReducedMotion
                  ? index === currentSlide ? "opacity-100" : "opacity-0"
                  : "transition-opacity duration-1000",
                !prefersReducedMotion && (index === currentSlide ? "opacity-100" : "opacity-0")
              )}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* 오버레이 - 다크 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" aria-hidden="true" />
      </div>

      {/* 슬라이드 컨트롤 */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4"
        role="group"
        aria-label="슬라이드 컨트롤"
      >
        {/* 일시정지/재생 버튼 */}
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          aria-label={isPaused ? "자동 재생 시작" : "자동 재생 일시정지"}
          className="text-white/60 hover:text-white text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1"
        >
          {isPaused ? "▶" : "❚❚"}
        </button>

        {/* 슬라이드 인디케이터 */}
        <div className="flex gap-2" role="tablist" aria-label="슬라이드 선택">
          {centerImages.map((image, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentSlide}
              aria-controls={`slide-${index}`}
              aria-label={`슬라이드 ${index + 1}: ${image.alt}`}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-1 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/30 w-4 hover:bg-white/50"
              )}
            />
          ))}
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <p className="label text-accent-light mb-4">
          About Us
        </p>
        <h2 id="about-heading" className="heading-1 text-white mb-8">
          {SITE_DATA.about.title}
        </h2>
        <p className="body-large text-white/80 max-w-3xl mx-auto leading-relaxed">
          {SITE_DATA.about.description}
        </p>
      </div>

      {/* 스크린리더용 안내 */}
      <div className="sr-only" aria-live="polite">
        {`현재 ${currentSlide + 1}번째 슬라이드: ${centerImages[currentSlide].alt}`}
      </div>
    </section>
  );
}

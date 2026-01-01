"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/site-data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// 애니메이션 variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const phoneVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.6,
    },
  },
  bounce: {
    y: [0, 8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion 시 정적 렌더링
  if (prefersReducedMotion) {
    return (
      <section className="relative min-h-dvh flex items-center justify-center bg-primary">
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center pt-12">
          <h1 className="heading-display text-white mb-6 whitespace-pre-line">
            {SITE_DATA.hero.title}
          </h1>
          <p className="body-large text-white/70 max-w-2xl mx-auto mb-12">
            {SITE_DATA.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_DATA.phone}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary shadow-lg"
            >
              전화 상담하기
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 text-white text-sm font-medium hover:opacity-70 transition-opacity"
            >
              자세히 알아보기 →
            </a>
          </div>
          <div className="mt-16">
            <a
              href={`tel:${SITE_DATA.phone}`}
              className="text-2xl sm:text-3xl font-semibold text-highlight hover:text-highlight-light transition-colors"
            >
              {SITE_DATA.phone}
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about" className="text-white/40 hover:text-white/70 transition-colors" aria-label="아래로 스크롤">
            <ChevronDown className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-dvh flex items-center justify-center bg-primary overflow-hidden">
      {/* 배경 장식 효과 */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/15,transparent_50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-highlight)/10,transparent_50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, delay: 0.5 }}
        aria-hidden="true"
      />

      {/* 컨텐츠 */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center pt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 메인 타이틀 */}
        <motion.h1
          className="heading-display text-white mb-6 whitespace-pre-line"
          variants={itemVariants}
        >
          {SITE_DATA.hero.title}
        </motion.h1>

        {/* 서브타이틀 */}
        <motion.p
          className="body-large text-white/70 max-w-2xl mx-auto mb-12"
          variants={itemVariants}
        >
          {SITE_DATA.hero.subtitle}
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href={`tel:${SITE_DATA.phone}`}
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white text-sm font-medium rounded-full shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            전화 상담하기
          </motion.a>
          <motion.a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 text-white text-sm font-medium"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            자세히 알아보기 →
          </motion.a>
        </motion.div>

        {/* 전화번호 */}
        <motion.div className="mt-16" variants={phoneVariants}>
          <motion.a
            href={`tel:${SITE_DATA.phone}`}
            className="text-2xl sm:text-3xl font-semibold text-highlight inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {SITE_DATA.phone}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate={["visible", "bounce"]}
      >
        <a
          href="#about"
          className="text-white/40 hover:text-white/70 transition-colors"
          aria-label="아래로 스크롤"
        >
          <ChevronDown className="w-6 h-6" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}

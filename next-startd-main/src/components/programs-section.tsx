"use client";

import Image from "next/image";
import { Hand, Dumbbell, HeartPulse, PersonStanding } from "lucide-react";
import { SITE_DATA } from "@/constants/site-data";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection, MotionList, MotionItem } from "@/components/ui/motion";
import type { IconName, IconMap } from "@/types";

// 아이콘 매핑
const iconMap: IconMap = {
  Hand,
  Dumbbell,
  HeartPulse,
  PersonStanding,
};

// 프로그램별 이미지
const programImages: Record<string, string> = {
  "도수치료": "https://picsum.photos/seed/therapy1/800/600",
  "운동재활": "https://picsum.photos/seed/therapy2/800/600",
  "통증치료": "https://picsum.photos/seed/therapy3/800/600",
  "체형교정": "https://picsum.photos/seed/therapy4/800/600",
};

export default function ProgramsSection() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="py-24 md:py-32 bg-surface-secondary">
      <Container>
        {/* 섹션 헤더 */}
        <MotionSection>
          <SectionHeader
            label="Programs"
            title="치료 프로그램"
            description="환자분의 상태에 맞는 최적의 치료 프로그램을 제공합니다."
            titleId="programs-heading"
          />
        </MotionSection>

        {/* 프로그램 그리드 */}
        <MotionList className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_DATA.programs.map((program, index) => {
            const IconComponent = iconMap[program.icon as IconName];
            const imageUrl = programImages[program.title];
            return (
              <MotionItem key={index}>
                <article className="group relative overflow-hidden rounded-2xl bg-surface shadow-sm hover:shadow-xl transition-shadow duration-300">
                  {/* 이미지 */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={`${program.title} - ${program.description.slice(0, 50)}...`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" aria-hidden="true" />
                    
                    {/* 아이콘 + 타이틀 오버레이 */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      {IconComponent && (
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                          <IconComponent className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                      )}
                      <h3 className="text-2xl font-semibold text-white">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* 컨텐츠 */}
                  <div className="p-6">
                    <p className="body-default text-text-secondary mb-4">
                      {program.description}
                    </p>

                    {/* 태그 */}
                    <ul className="flex flex-wrap gap-2" aria-label={`${program.title} 세부 항목`}>
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-text-tertiary px-3 py-1 bg-surface-secondary rounded-full"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MotionItem>
            );
          })}
        </MotionList>
      </Container>
    </section>
  );
}

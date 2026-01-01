"use client";

import { User } from "lucide-react";
import { SITE_DATA } from "@/constants/site-data";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection, MotionList, MotionItem, MotionHover } from "@/components/ui/motion";

export default function TeamSection() {
  return (
    <section id="team" aria-labelledby="team-heading" className="py-24 md:py-32 bg-surface">
      <Container>
        {/* 섹션 헤더 */}
        <MotionSection>
          <SectionHeader
            label="Our Team"
            title="전문 의료진을 소개합니다"
            description="풍부한 임상 경험과 전문 자격을 갖춘 의료진이 여러분의 건강한 회복을 책임집니다."
            titleId="team-heading"
          />
        </MotionSection>

        {/* 의료진 카드 */}
        <MotionList className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_DATA.team.map((member, index) => (
            <MotionItem key={index}>
              <MotionHover scale={1.02} y={-8}>
                <article className="group text-center p-6 rounded-2xl transition-colors hover:bg-surface-secondary">
                  {/* 프로필 이미지 영역 */}
                  <div className="relative w-40 h-40 mx-auto mb-6 bg-surface-secondary rounded-full flex items-center justify-center overflow-hidden group-hover:bg-surface transition-colors">
                    <User className="w-16 h-16 text-text-tertiary" aria-hidden="true" />
                  </div>

                  {/* 정보 */}
                  <div>
                    {/* 직책 */}
                    <p className="label text-accent mb-2">
                      {member.role}
                    </p>

                    {/* 이름 */}
                    <h3 className="heading-3 text-primary mb-2">
                      {member.name}
                    </h3>

                    {/* 전문분야 */}
                    <p className="body-small text-text-secondary mb-4">
                      {member.specialty}
                    </p>

                    {/* 경력 */}
                    <ul className="text-sm text-text-tertiary space-y-1">
                      {member.career.map((item, careerIndex) => (
                        <li key={careerIndex}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MotionHover>
            </MotionItem>
          ))}
        </MotionList>
      </Container>
    </section>
  );
}

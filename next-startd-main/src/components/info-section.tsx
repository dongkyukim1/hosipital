"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { SITE_DATA } from "@/constants/site-data";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection, MotionList, MotionItem } from "@/components/ui/motion";

export default function InfoSection() {
  return (
    <section id="info" aria-labelledby="info-heading" className="py-24 md:py-32 bg-primary">
      <Container>
        {/* 섹션 헤더 */}
        <MotionSection>
          <SectionHeader
            label="Information"
            title="이용안내"
            description="에스엠재활센터 방문 전 확인해주세요."
            theme="dark"
            titleId="info-heading"
          />
        </MotionSection>

        <MotionList className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 영업시간 */}
          <MotionItem>
            <article className="bg-white/5 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-highlight" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">영업시간</h3>
              </div>

              <dl className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <dt className="text-white/60">평일</dt>
                  <dd className="text-white font-medium">{SITE_DATA.info.hours.weekday}</dd>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <dt className="text-white/60">토요일</dt>
                  <dd className="text-white font-medium">{SITE_DATA.info.hours.saturday}</dd>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <dt className="text-white/60">일요일</dt>
                  <dd className="text-highlight font-medium">{SITE_DATA.info.hours.sunday}</dd>
                </div>
                <div className="flex justify-between items-center py-3">
                  <dt className="text-white/60">공휴일</dt>
                  <dd className="text-highlight font-medium">{SITE_DATA.info.hours.holiday}</dd>
                </div>
              </dl>
            </article>
          </MotionItem>

          {/* 연락처 및 위치 */}
          <MotionItem>
            <article className="bg-white/5 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-highlight" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">연락처 및 위치</h3>
              </div>

              <address className="space-y-6 not-italic">
                <div>
                  <p className="text-white/60 text-sm mb-2">전화번호</p>
                  <a
                    href={`tel:${SITE_DATA.phone}`}
                    className="text-xl font-semibold text-white hover:text-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {SITE_DATA.phone}
                  </a>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-2">주소</p>
                  <p className="text-white font-medium">{SITE_DATA.address}</p>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-2">주차안내</p>
                  <p className="text-white font-medium">{SITE_DATA.info.parking}</p>
                </div>
              </address>
            </article>
          </MotionItem>

          {/* 예약 안내 */}
          <MotionItem>
            <article className="bg-white/5 rounded-2xl p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-5 h-5 text-highlight" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">예약안내</h3>
              </div>

              <p className="text-white/80 mb-4">
                {SITE_DATA.info.reservation}
              </p>

              <p className="text-white/60 text-sm mb-8 flex-grow">
                예약 시간 10분 전까지 방문해 주시기 바랍니다. 예약 변경은 하루 전까지 연락 부탁드립니다.
              </p>

              <a
                href={`tel:${SITE_DATA.phone}`}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-light transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                지금 예약하기
              </a>
            </article>
          </MotionItem>
        </MotionList>
      </Container>
    </section>
  );
}

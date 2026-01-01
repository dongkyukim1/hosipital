"use client";

import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import { SITE_DATA } from "@/constants/site-data";
import { Container } from "@/components/ui/container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA 영역 */}
      <div className="border-b border-white/10">
        <Container>
          <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 위치 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">오시는 길</h4>
                <span className="text-white/60 text-sm leading-relaxed">
                  {SITE_DATA.address}
                </span>
              </div>
            </div>

            {/* 전화 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">전화 예약</h4>
                <a 
                  href={`tel:${SITE_DATA.phone}`}
                  className="text-white/60 text-sm hover:text-accent transition-colors"
                >
                  {SITE_DATA.phone}
                </a>
              </div>
            </div>

            {/* 이메일 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">이메일 문의</h4>
                <a 
                  href={`mailto:${SITE_DATA.email}`}
                  className="text-white/60 text-sm hover:text-accent transition-colors"
                >
                  {SITE_DATA.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 메인 푸터 컨텐츠 */}
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 센터 소개 */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-accent">에스엠</span>
              <span className="text-white">재활센터</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              {SITE_DATA.about.description.slice(0, 120)}...
            </p>
            
            {/* 소셜 아이콘 */}
            <div>
              <span className="text-sm font-semibold mb-4 block">Follow us</span>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-linear-to-tr from-[#fd5949] via-[#d6249f] to-[#285AEB] flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#FAE100] flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="KakaoTalk"
                >
                  <MessageCircle className="w-4 h-4 text-[#3C1E1E]" />
                </a>
              </div>
            </div>
          </div>

          {/* 바로가기 */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              바로가기
              <span className="absolute left-0 bottom-[-8px] w-10 h-0.5 bg-highlight" />
            </h4>
            <ul className="space-y-3">
              {SITE_DATA.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 운영시간 */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              운영시간
              <span className="absolute left-0 bottom-[-8px] w-10 h-0.5 bg-highlight" />
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-white/60">
                <span>평일</span>
                <span className="text-white">{SITE_DATA.info.hours.weekday}</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>토요일</span>
                <span className="text-white">{SITE_DATA.info.hours.saturday}</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>일요일</span>
                <span className="text-accent">{SITE_DATA.info.hours.sunday}</span>
              </li>
              <li className="flex justify-between text-white/60">
                <span>공휴일</span>
                <span className="text-accent">{SITE_DATA.info.hours.holiday}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* 저작권 영역 */}
      <div className="bg-black/30">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              Copyright © {currentYear} {SITE_DATA.name}. All rights reserved.
            </p>
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#" className="text-white/50 hover:text-accent transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-accent transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-accent transition-colors">
                  사이트맵
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

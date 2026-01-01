"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE_DATA } from "@/constants/site-data";
import { cn } from "@/lib/utils";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useActiveSection } from "@/hooks/use-active-section";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // 섹션 ID 목록
  const sectionIds = SITE_DATA.navigation.map((item) => item.href);
  
  // 현재 활성 섹션 감지
  const activeSection = useActiveSection({ sectionIds });

  // Focus trap for mobile menu
  const menuRef = useFocusTrap<HTMLDivElement>({
    isActive: isMenuOpen,
    onEscape: () => setIsMenuOpen(false),
  });

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 메뉴 토글
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // 메뉴 닫기
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    toggleButtonRef.current?.focus();
  }, []);

  // body 스크롤 잠금
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav
        role="navigation"
        aria-label="메인 네비게이션"
        className={cn(
          "fixed top-0 left-0 right-0 transition-all duration-500 ease-out",
          "z-(--z-fixed)",
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-border-light" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-16" : "h-20"
          )}>
            {/* 로고 - 에스엠을 레드로 강조 */}
            <a
              href="#"
              className="group flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
              aria-label={`${SITE_DATA.name} 홈으로 이동`}
            >
              <span className={cn(
                "text-lg font-bold tracking-tight transition-colors",
                isScrolled ? "text-accent" : "text-white"
              )}>
                에스엠
              </span>
              <span className={cn(
                "text-lg font-semibold tracking-tight transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>
                재활센터
              </span>
            </a>

            {/* 데스크탑 메뉴 */}
            <div className="hidden lg:flex items-center gap-1" role="menubar">
              {SITE_DATA.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  aria-current={activeSection === item.href ? "page" : undefined}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 rounded-full",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                    isScrolled 
                      ? "text-text-secondary hover:text-primary hover:bg-surface-secondary" 
                      : "text-white/80 hover:text-white hover:bg-white/10",
                    // Active state
                    activeSection === item.href && isScrolled && "text-accent bg-accent/5",
                    activeSection === item.href && !isScrolled && "text-white bg-white/15"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA 버튼 - 데스크탑 */}
            <a
              href={`tel:${SITE_DATA.phone}`}
              className={cn(
                "hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isScrolled 
                  ? "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent shadow-md hover:shadow-lg" 
                  : "bg-white text-primary hover:bg-white/90 focus-visible:ring-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>{SITE_DATA.phone}</span>
            </a>

            {/* 모바일 메뉴 버튼 */}
            <button
              ref={toggleButtonRef}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              className={cn(
                "lg:hidden p-2.5 transition-all duration-200 rounded-xl",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isScrolled 
                  ? "text-primary hover:bg-surface-secondary" 
                  : "text-white hover:bg-white/10"
              )}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 백드롭 */}
        {isMenuOpen && (
          <div
            className="menu-backdrop lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* 모바일 메뉴 */}
        <div
          ref={menuRef}
          id="mobile-menu"
          role="menu"
          aria-hidden={!isMenuOpen}
          className={cn(
            "lg:hidden fixed top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-border-light",
            "transition-all duration-300 ease-out",
            "z-(--z-modal)",
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          )}
        >
          <div className="p-6 space-y-2">
            {SITE_DATA.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={closeMenu}
                aria-current={activeSection === item.href ? "page" : undefined}
                className={cn(
                  "block py-3 px-4 text-base font-medium rounded-xl transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  activeSection === item.href
                    ? "text-accent bg-accent/5"
                    : "text-primary hover:text-accent hover:bg-surface-secondary"
                )}
              >
                {item.label}
              </a>
            ))}
            
            {/* 모바일 CTA */}
            <div className="pt-4 mt-4 border-t border-border-light">
              <a
                href={`tel:${SITE_DATA.phone}`}
                role="menuitem"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-white text-base font-semibold rounded-xl hover:bg-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Phone className="w-5 h-5" />
                전화 상담하기
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Focus Trap Hook
 * 모달이나 메뉴가 열렸을 때 포커스를 해당 영역 내에 가두는 훅
 */

interface UseFocusTrapOptions {
  /** 트랩 활성화 여부 */
  isActive: boolean;
  /** ESC 키로 닫기 */
  onEscape?: () => void;
}

export function useFocusTrap<T extends HTMLElement>(
  options: UseFocusTrapOptions
) {
  const { isActive, onEscape } = options;
  const containerRef = useRef<T>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // 포커스 가능한 요소 선택자
  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  // 포커스 가능한 요소 목록 가져오기
  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];
    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(focusableSelector)
    ).filter((el) => el.offsetParent !== null);
  }, [focusableSelector]);

  // 키보드 이벤트 핸들러
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isActive) return;

      // ESC 키 처리
      if (event.key === "Escape" && onEscape) {
        event.preventDefault();
        onEscape();
        return;
      }

      // Tab 키 처리
      if (event.key === "Tab") {
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Shift + Tab: 첫 번째 요소에서 마지막으로 이동
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        // Tab: 마지막 요소에서 첫 번째로 이동
        else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    },
    [isActive, onEscape, getFocusableElements]
  );

  // 활성화/비활성화 시 포커스 관리
  useEffect(() => {
    if (isActive) {
      // 현재 포커스된 요소 저장
      previousActiveElement.current = document.activeElement as HTMLElement;

      // 첫 번째 포커스 가능한 요소로 포커스 이동
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        // 약간의 지연을 주어 애니메이션 완료 후 포커스
        setTimeout(() => {
          focusableElements[0].focus();
        }, 100);
      }

      // 키보드 이벤트 리스너 등록
      document.addEventListener("keydown", handleKeyDown);
    } else {
      // 이전 포커스 요소로 복원
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive, getFocusableElements, handleKeyDown]);

  return containerRef;
}


"use client";

import { useEffect } from "react";

/**
 * 전역 에러 UI
 * 런타임 에러 발생 시 표시
 */
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 에러 로깅 (프로덕션에서는 Sentry 등으로 전송)
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-surface px-6"
      role="alert"
      aria-labelledby="error-title"
      aria-describedby="error-description"
    >
      <div className="max-w-md w-full text-center">
        {/* 에러 아이콘 */}
        <div className="w-16 h-16 mx-auto mb-6 bg-error/10 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-error"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* 에러 메시지 */}
        <h1 id="error-title" className="heading-3 text-primary mb-4">
          문제가 발생했습니다
        </h1>
        
        <p id="error-description" className="body-default text-text-secondary mb-8">
          죄송합니다. 페이지를 불러오는 중 오류가 발생했습니다.
          <br />
          잠시 후 다시 시도해 주세요.
        </p>

        {/* 액션 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            다시 시도
          </button>
          
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-surface-secondary text-primary text-sm font-medium rounded-full hover:bg-border-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            홈으로 이동
          </a>
        </div>

        {/* 에러 상세 (개발 환경) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <details className="mt-8 text-left">
            <summary className="text-sm text-text-tertiary cursor-pointer hover:text-text-secondary">
              에러 상세 정보 (개발용)
            </summary>
            <pre className="mt-2 p-4 bg-surface-secondary rounded-lg text-xs text-text-tertiary overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}


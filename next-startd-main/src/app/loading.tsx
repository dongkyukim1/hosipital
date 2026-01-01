/**
 * 전역 로딩 UI
 * 페이지 전환 시 표시되는 로딩 상태
 */
export default function Loading() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-surface"
      role="status"
      aria-label="페이지 로딩 중"
    >
      <div className="flex flex-col items-center gap-4">
        {/* 로딩 스피너 */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-surface-secondary rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full animate-spin" />
        </div>
        
        {/* 로딩 텍스트 */}
        <p className="text-text-secondary text-sm animate-pulse-soft">
          로딩 중...
        </p>
      </div>
      
      {/* 스크린 리더용 */}
      <span className="sr-only">페이지를 불러오는 중입니다. 잠시만 기다려주세요.</span>
    </div>
  );
}


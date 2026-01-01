import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Container 컴포넌트
 * 반복되는 max-width + padding 패턴을 재사용 가능하게 추상화
 */

type ContainerSize = "default" | "narrow" | "wide" | "full";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 컨테이너 너비 */
  size?: ContainerSize;
  /** HTML 태그 */
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

const containerSizes: Record<ContainerSize, string> = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-full",
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "mx-auto px-6 sm:px-8 lg:px-12",
          containerSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Container.displayName = "Container";

export { Container, type ContainerProps };


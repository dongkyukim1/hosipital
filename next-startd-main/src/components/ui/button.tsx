import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Apple 스타일 Button 컴포넌트
 * 미니멀하고 심플한 디자인
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-white hover:bg-accent-light",
        secondary: "bg-surface-secondary text-primary hover:bg-border-light",
        outline: "border border-border text-primary hover:bg-surface-secondary",
        ghost: "text-primary hover:bg-surface-secondary",
        link: "text-accent hover:underline underline-offset-4",
      },
      size: {
        default: "h-11 px-6 text-sm rounded-full",
        sm: "h-9 px-4 text-sm rounded-full",
        lg: "h-12 px-8 text-base rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

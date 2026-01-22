import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const retrouiButtonVariants = cva(
  "inline-flex items-center justify-center font-bold text-base transition-transform duration-100 border-2 border-black rounded-none cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none retroui-shadow hover:translate-x-1 hover:translate-y-1 active:translate-x-0.5 active:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-yellow-400 text-black hover:bg-yellow-300",
        secondary: "bg-black text-white hover:bg-gray-800",
        outline: "bg-white text-black hover:bg-gray-100",
        destructive: "bg-red-500 text-white hover:bg-red-600",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface RetroUIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof retrouiButtonVariants> {}

const RetroUIButton = React.forwardRef<HTMLButtonElement, RetroUIButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(retrouiButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
RetroUIButton.displayName = "RetroUIButton";

export { RetroUIButton, retrouiButtonVariants };
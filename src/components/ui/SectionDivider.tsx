import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "fade" | "line" | "glow";
  className?: string;
}

export default function SectionDivider({
  variant = "fade",
  className,
}: SectionDividerProps) {
  return (
    <div
      className={cn(
        "w-full",

        variant === "fade" && "h-24 bg-gradient-to-b from-transparent to-void",

        variant === "line" && [
          "h-px max-w-md mx-auto",
          "bg-gradient-to-r from-transparent via-glass-border to-transparent",
        ],

        variant === "glow" && [
          "h-px max-w-lg mx-auto",
          "bg-gradient-to-r from-transparent via-gold-dim to-transparent",
          "shadow-[0_0_15px_rgba(201,168,76,0.1)]",
        ],

        className
      )}
      aria-hidden="true"
    />
  );
}
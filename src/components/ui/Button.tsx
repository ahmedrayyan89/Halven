import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "default" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    href?: string;
    className?: string;
}

export default function Button({
    variant = "primary",
    size = "default",
    children,
    href,
    className,
    ...props
}: ButtonProps) {
    const baseStyles = cn(
        // Shared base
        "inline-flex items-center justify-center font-body font-medium tracking-wide",
        "rounded-full transition-all duration-300 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-void",

        // Size variants
        size === "default" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",

        // Color variants
        variant === "primary" && [
            "bg-gold text-void",
            "hover:bg-gold/90",
            "hover:shadow-[0_0_25px_rgba(201,168,76,0.3)]",
        ],

        variant === "ghost" && [
            "bg-transparent text-white",
            "border border-white/20",
            "hover:border-gold-dim",
            "hover:text-gold",
            "hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]",
        ],

        className
    );

    // If href is provided, render as anchor tag
    if (href) {
        return (
            <a href={href} className={baseStyles}>
                {children}
            </a>
        );
    }

    return (
        <button className={baseStyles} {...props}>
            {children}
        </button>
    );
}
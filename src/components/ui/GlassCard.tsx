"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { animationVariants, defaultTransition } from "@/hooks/useScrollAnimation";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    highlighted?: boolean;
    hoverable?: boolean;
    animate?: boolean;
}

export default function GlassCard({
    children,
    className,
    highlighted = false,
    hoverable = true,
    animate = true,
}: GlassCardProps) {
    const Wrapper = animate ? motion.div : "div";

    const animationProps = animate
        ? {
            variants: animationVariants.fadeUp,
            initial: "hidden" as const,
            whileInView: "visible" as const,
            viewport: { once: true, amount: 0.2 },
            transition: defaultTransition,
        }
        : {};

    return (
        <Wrapper
            {...animationProps}
            className={cn(
                // Base glass styles
                "rounded-2xl p-6 md:p-8 transition-all duration-300",

                // Glass background
                "bg-glass backdrop-blur-glass border border-glass-border",

                // Hover effects (if enabled)
                hoverable && [
                    "hover:bg-glass-hover",
                    "hover:border-gold-dim",
                    "hover:shadow-[0_0_30px_rgba(201,168,76,0.08)]",
                    "hover:scale-[1.02]",
                ],

                // Highlighted variant (for "Most Popular" package)
                highlighted && [
                    "border-gold-dim",
                    "bg-gold-glow",
                    "shadow-[0_0_40px_rgba(201,168,76,0.1)]",
                ],

                className
            )}
        >
            {children}
        </Wrapper>
    );
}
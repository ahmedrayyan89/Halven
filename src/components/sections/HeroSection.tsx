"use client";

import { motion } from "framer-motion";
import VideoBackground from "@/components/ui/VideoBackground";
import Button from "@/components/ui/Button";
import { heroContent } from "@/data/content";
import { defaultTransition } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
    const staggerDelay = 0.15;

    return (
        <VideoBackground
            src="/videos/hero.mp4"
            fallbackSrc="/fallbacks/hero-fallback.webp"
            className="h-screen min-h-[600px]"
            priority
        >
            <div className="h-screen min-h-[600px] flex flex-col items-center justify-center text-center px-6">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...defaultTransition, delay: staggerDelay * 1 }}
                    className="label mb-6"
                >
                    {heroContent.label}
                </motion.p>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...defaultTransition, delay: staggerDelay * 2 }}
                    className="font-display text-display-xl text-white max-w-4xl mb-6"
                >
                    {heroContent.heading}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...defaultTransition, delay: staggerDelay * 3 }}
                    className="font-body text-white/50 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                >
                    {heroContent.subtext}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...defaultTransition, delay: staggerDelay * 4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button variant="primary" size="lg" href="#destinations">
                        {heroContent.primaryCTA}
                    </Button>
                    <Button variant="ghost" size="lg">
                        {heroContent.secondaryCTA}
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-white/30 text-xs font-body tracking-widest uppercase">
                        Scroll
                    </span>
                    <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-scroll-hint" />
                </motion.div>
            </div>
        </VideoBackground>
    );
}
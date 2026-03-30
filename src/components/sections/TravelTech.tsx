"use client";

import { motion } from "framer-motion";
import VideoBackground from "@/components/ui/VideoBackground";
import { techFeatures } from "@/data/content";
import {
    animationVariants,
    defaultTransition,
} from "@/hooks/useScrollAnimation";

export default function TravelTech() {
    return (
        <section id="experience">
            <VideoBackground
                src="/videos/spacecraft.mp4"
                fallbackSrc="/fallbacks/spacecraft-fallback.webp"
                className="min-h-screen"
            >
                <div className="section-padding min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Left side — Text content */}
                            <motion.div
                                variants={animationVariants.fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={defaultTransition}
                            >
                                <p className="label mb-4">HOW WE TRAVEL</p>
                                <h2 className="font-display text-display-lg text-white mb-6">
                                    The Experience
                                </h2>
                                <p className="text-white/50 font-body text-lg leading-relaxed max-w-lg">
                                    Every journey with Halven is a masterpiece of
                                    curation. Three pillars work in concert to make
                                    extraordinary travel not just possible — but effortless.
                                </p>
                            </motion.div>

                            {/* Right side — Feature list */}
                            <motion.div
                                variants={animationVariants.staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="space-y-0"
                            >
                                {techFeatures.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        variants={animationVariants.fadeRight}
                                        transition={defaultTransition}
                                        className={
                                            "py-8 " +
                                            (index !== techFeatures.length - 1
                                                ? "border-b border-glass-border"
                                                : "")
                                        }
                                    >
                                        <div className="flex items-start justify-between gap-6">
                                            <div className="flex-1">
                                                <h3 className="font-display text-xl md:text-2xl text-white mb-2">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-white/40 font-body text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                            <div className="text-right shrink-0">
                                                <p className="font-display text-2xl md:text-3xl text-gold">
                                                    {feature.stat}
                                                </p>
                                                <p className="text-white/30 text-xs font-body mt-1">
                                                    {feature.statLabel}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </VideoBackground>
        </section>
    );
}
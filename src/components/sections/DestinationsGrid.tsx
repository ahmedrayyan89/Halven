"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { destinations } from "@/data/content";
import {
    animationVariants,
    defaultTransition,
} from "@/hooks/useScrollAnimation";

export default function DestinationsGrid() {
    return (
        <section id="destinations" className="section-padding section-ambient">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    variants={animationVariants.fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={defaultTransition}
                    className="mb-16"
                >
                    <p className="label mb-4">SELECT YOUR WORLD</p>
                    <h2 className="font-display text-display-lg text-white">
                        Our Destinations
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={animationVariants.staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[280px]"
                >
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            variants={animationVariants.fadeUp}
                            transition={defaultTransition}
                            className={
                                // First card (featured) spans 2 columns and 2 rows on desktop
                                destination.featured
                                    ? "md:col-span-2 md:row-span-2"
                                    : ""
                            }
                        >
                            <GlassCard
                                animate={false}
                                hoverable
                                className="h-full flex flex-col justify-between relative overflow-hidden group"
                            >
                                {/* Featured badge */}
                                {destination.featured && (
                                    <span className="label text-gold mb-2">★ FEATURED WORLD</span>
                                )}

                                {/* Top content */}
                                <div>
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-display text-display-md text-white">
                                            {destination.name}
                                        </h3>
                                        <span className="label text-plasma shrink-0 ml-4 mt-2">
                                            {destination.distance}
                                        </span>
                                    </div>
                                    <p className="text-white/60 font-body text-sm italic mb-2">
                                        {destination.tagline}
                                    </p>
                                    <p className="text-white/40 font-body text-sm leading-relaxed">
                                        {destination.description}
                                    </p>
                                </div>

                                {/* Bottom content */}
                                <div className="flex items-end justify-between mt-4 pt-4 border-t border-glass-border">
                                    <div>
                                        <p className="text-gold font-body font-semibold text-lg">
                                            {destination.price}
                                        </p>
                                        <p className="text-white/30 text-xs font-body mt-1">
                                            {destination.travelTime} journey
                                        </p>
                                    </div>
                                    <span
                                        className={
                                            "text-white/20 group-hover:text-gold group-hover:translate-x-1 " +
                                            "transition-all duration-300 text-xl"
                                        }
                                    >
                                        →
                                    </span>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
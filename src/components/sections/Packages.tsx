"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { packages } from "@/data/content";
import {
  animationVariants,
  defaultTransition,
} from "@/hooks/useScrollAnimation";

export default function Packages() {
  return (
    <section id="packages" className="section-padding section-ambient">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={animationVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={defaultTransition}
          className="text-center mb-16"
        >
          <p className="label mb-4">CHOOSE YOUR JOURNEY</p>
          <h2 className="font-display text-display-lg text-white mb-4">
            Travel Packages
          </h2>
          <p className="text-white/40 font-body text-lg max-w-2xl mx-auto">
            Three tiers of interstellar experience. Each crafted for a different
            kind of explorer.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.tier}
              variants={animationVariants.fadeUp}
              transition={defaultTransition}
            >
              <GlassCard
                animate={false}
                highlighted={pkg.highlighted}
                hoverable
                className="h-full flex flex-col relative"
              >
                {/* Popular badge */}
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-void text-xs font-body font-semibold px-4 py-1 rounded-full tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier header */}
                <div className="mb-6 pt-2">
                  <h3 className="font-display text-display-md text-white mb-2">
                    {pkg.tier}
                  </h3>
                  <p className="text-white/40 font-body text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-6 border-b border-glass-border">
                  <span className="font-display text-4xl md:text-5xl text-gold">
                    {pkg.price}
                  </span>
                  <span className="text-white/30 font-body text-sm ml-2">
                    per person
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-white/60 font-body text-sm"
                    >
                      <span className="text-gold mt-0.5 shrink-0">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={pkg.highlighted ? "primary" : "ghost"}
                  className="w-full"
                >
                  Select {pkg.tier}
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



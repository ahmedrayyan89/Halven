"use client";

import { motion } from "framer-motion";
import { siteConfig, navLinks, footerText } from "@/data/content";
import {
  animationVariants,
  defaultTransition,
} from "@/hooks/useScrollAnimation";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden section-ambient">
      {/* Giant watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[15rem] md:text-[20rem] lg:text-[28rem] text-white/[0.02] tracking-[0.2em] leading-none">
          {siteConfig.name}
        </span>
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <motion.div
            variants={animationVariants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
            className="text-center mb-16"
          >
            <p className="label mb-4">BEGIN YOUR JOURNEY</p>
            <h2 className="font-display text-display-lg text-white mb-6">
              The world is waiting
            </h2>
            <p className="text-white/40 font-body max-w-lg mx-auto">
              Contact our travel coordinators to begin planning your
              next journey. Private consultations available.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-glass-border mb-12" />

          {/* Bottom grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Column 1: Brand */}
            <div>
              <span className="font-display text-2xl tracking-[0.2em] text-white mb-4 block">
                {siteConfig.name}
              </span>
              <p className="text-white/30 font-body text-sm leading-relaxed">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Column 2: Links */}
            <div>
              <p className="label mb-4 text-white/50">EXPLORE</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white font-body text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <p className="label mb-4 text-white/50">CONTACT</p>
              <ul className="space-y-3 text-white/40 font-body text-sm">
                <li>hello@halven.travel</li>
                <li>53rd Floor, Hudson Yards</li>
                <li>New York, NY — USA</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 font-body text-xs">
              {footerText.copyright}
            </p>
            <p className="text-white/20 font-body text-xs text-center md:text-right max-w-md">
              {footerText.legal}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


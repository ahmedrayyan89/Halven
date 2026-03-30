"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig, navLinks } from "@/data/content";
import Button from "@/components/ui/Button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-void/70 backdrop-blur-xl border-b border-glass-border"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#" className="relative z-50">
                            <span className="font-display text-2xl md:text-3xl tracking-[0.2em] text-white">
                                {siteConfig.name}
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={cn(
                                        "font-body text-sm tracking-wide transition-colors duration-300",
                                        "text-white/60 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <Button variant="ghost" href="#packages">
                                Book a Journey
                            </Button>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative z-50 md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <span
                                className={cn(
                                    "w-6 h-px bg-white transition-all duration-300",
                                    isMobileMenuOpen && "rotate-45 translate-y-[4px]"
                                )}
                            />
                            <span
                                className={cn(
                                    "w-6 h-px bg-white transition-all duration-300",
                                    isMobileMenuOpen && "opacity-0"
                                )}
                            />
                            <span
                                className={cn(
                                    "w-6 h-px bg-white transition-all duration-300",
                                    isMobileMenuOpen && "-rotate-45 -translate-y-[4px]"
                                )}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-void/95 backdrop-blur-2xl md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.08 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-display text-display-md text-white/80 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.08 }}
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    href="#packages"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book a Journey
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
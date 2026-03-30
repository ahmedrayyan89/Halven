"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(threshold: number = 0.2) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: threshold,
    });

    return { ref, isInView };
}

// Reusable animation variants
export const animationVariants = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    staggerContainer: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    },
};

// Default transition
export const defaultTransition = {
    duration: 0.7,
    ease: [0.25, 0.1, 0.25, 1] as const,
};
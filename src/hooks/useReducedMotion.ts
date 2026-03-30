"use client";

import { useReducedMotion } from "framer-motion";

export { useReducedMotion };

// Helper: returns animation props or static props based on user preference
export function useMotionSafe() {
  const prefersReducedMotion = useReducedMotion();

  const getMotionProps = (variants: {
    hidden: object;
    visible: object;
  }) => {
    if (prefersReducedMotion) {
      return {
        initial: variants.visible,
        animate: variants.visible,
      };
    }

    return {
      initial: "hidden" as const,
      whileInView: "visible" as const,
      viewport: { once: true, amount: 0.2 },
      variants,
    };
  };

  return { prefersReducedMotion, getMotionProps };
}

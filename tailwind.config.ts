import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        void: "#07071A",
        "void-light": "#0C0C22",
        "void-border": "rgba(255, 255, 255, 0.08)",

        // Accents
        gold: {
          DEFAULT: "#C9A84C",
          dim: "rgba(201, 168, 76, 0.3)",
          glow: "rgba(201, 168, 76, 0.15)",
        },
        plasma: {
          DEFAULT: "#4CC9F0",
          dim: "rgba(76, 201, 240, 0.3)",
        },

        // Glass
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.07)",
          border: "rgba(255, 255, 255, 0.12)",
          hover: "rgba(255, 255, 255, 0.11)",
        },
      },

      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-syne)", "sans-serif"],
      },

      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        "label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.15em" }],
      },

      backdropBlur: {
        glass: "20px",
      },

      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },

      keyframes: {
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

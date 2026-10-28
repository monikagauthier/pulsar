import type { Config } from "tailwindcss";

/**
 * PULSAR Design System — Tailwind theme.
 * Mirrors the brand tokens used in the static reference (site/).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: "#10271d",
          900: "#0b1c15",
          800: "#10271d",
          700: "#163527",
          600: "#1d4231",
        },
        energy: {
          DEFAULT: "#b9dc59",
          dim: "#96b63f",
        },
        amber: {
          DEFAULT: "#e5a943",
        },
        sand: {
          DEFAULT: "#f3f1e8",
          100: "#f3f1e8",
          200: "#e8e5d6",
          300: "#d9d5c2",
        },
        graphite: {
          DEFAULT: "#303a34",
        },
        ink: {
          DEFAULT: "#0c1711",
          soft: "#40493f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "Sora", "sans-serif"],
        body: ["var(--font-body)", "Inter", "DM Sans", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        sm: "3px",
        md: "6px",
      },
      maxWidth: {
        shell: "1240px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

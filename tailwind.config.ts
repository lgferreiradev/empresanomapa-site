import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "Georgia", "serif"],
        geist: ["Geist Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      colors: {
        ink: {
          950: "#0A0A0B",
          900: "#111113",
          800: "#18181B",
          700: "#27272A",
          500: "#52525B",
          300: "#A1A1AA",
          100: "#F4F4F5",
          50: "#FAFAFA",
        },
        "g-blue": "#4285F4",
        "g-red": "#EA4335",
        "g-yellow": "#FBBC04",
        "g-green": "#34A853",
      },
    },
  },
  plugins: [],
} satisfies Config;

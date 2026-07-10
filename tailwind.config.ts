import type { Config } from "tailwindcss"

// The Timber Studio brand scales.
// Off-palette Tailwind color families (blue, green, yellow, gray, etc.) are aliased
// to these so every legacy utility class renders in the new brand palette.
const copperScale = {
  50: "#faf3ec",
  100: "#f2e4d6",
  200: "#e7cbb0",
  300: "#dec084",
  400: "#c6a15b",
  500: "#c98356",
  600: "#b36a3d",
  700: "#8a4e2a",
  800: "#6f3e22",
  900: "#4a2f1c",
}

const goldScale = {
  50: "#faf5ea",
  100: "#f4ead0",
  200: "#ecd9a8",
  300: "#dec084",
  400: "#c6a15b",
  500: "#b98f45",
  600: "#a07636",
  700: "#7e5c2c",
  800: "#5f4623",
  900: "#4a2f1c",
}

const neutralScale = {
  50: "#fbf8f2",
  100: "#f4efe6",
  200: "#e6ddce",
  300: "#d2c6b2",
  400: "#a99c87",
  500: "#7c6f5c",
  600: "#5a4b3a",
  700: "#3e3226",
  800: "#2a231b",
  900: "#1c1b19",
}

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Primary accent (copper -> gold) mapped onto former accent families.
        amber: copperScale,
        orange: copperScale,
        red: copperScale,
        rose: copperScale,
        pink: copperScale,
        blue: copperScale,
        sky: copperScale,
        indigo: copperScale,
        violet: copperScale,
        purple: copperScale,
        cyan: copperScale,
        teal: copperScale,
        emerald: copperScale,
        green: copperScale,
        // Secondary accent (gold) mapped onto former warm-highlight families.
        yellow: goldScale,
        lime: goldScale,
        // Neutrals (paper/cream -> walnut/charcoal) mapped onto former neutral families.
        slate: neutralScale,
        gray: neutralScale,
        zinc: neutralScale,
        neutral: neutralScale,
        stone: neutralScale,
        // Named brand tokens for intentional use.
        charcoal: "#1c1b19",
        copper: {
          DEFAULT: "#b36a3d",
          light: "#c98356",
          dark: "#8a4e2a",
        },
        gold: {
          DEFAULT: "#c6a15b",
          light: "#dec084",
        },
        walnut: "#4a2f1c",
        cream: "#f4efe6",
        paper: "#fbf8f2",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

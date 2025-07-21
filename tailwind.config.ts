import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["var(--font-instrument)"],
      },
      boxShadow: {
        greenGlow: "0px 0px 33.48px 0px #4DFA0036",
      },
      borderImage: {
        greenBright: "linear-gradient(193.74deg, #06DF73 5.97%, #00A651 86.1%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "green-dark-fade":
          "linear-gradient(180deg, rgba(10, 21, 25, 0.8) 38.06%, rgba(10, 21, 25, 0) 146.67%)",
        "layered-gradients": `
          linear-gradient(0deg, rgba(93, 111, 50, 0.2), rgba(93, 111, 50, 0.2)),
          linear-gradient(180deg, rgba(10, 21, 25, 0.8) 38.06%, rgba(10, 21, 25, 0) 146.67%)
          `,
        primaryBg: `linear-gradient(to right, #22C55E, #84CC16)`, // Your custom gradient
        greenDouble: `
          linear-gradient(133.63deg, #00CC4C 2.55%, #90E300 100.27%),
          linear-gradient(180deg, #00B144 0%, #00B546 100%)
        `,
        "glass-overlay":
          "linear-gradient(180deg, rgba(255,255,255,0.23) 0%, rgba(0,0,0,0.23) 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        textPrimary: "#22C55E",
        textSecondary: "#84CC16",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

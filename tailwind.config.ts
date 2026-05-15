import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#053a36',
        'main-text': "#CB4943",
        // "main-para": "#9ca3af",  // Gray-400
        // "main-para": "#CCE8CC", // Light green
        // "main-para": "#F5F5F5", //Off-white
        "main-para": "#D6CEC3", // Beige
      },
      fontFamily: {
        'dm-serif-display': "var(--font-dmSerifDisplay)",
        'roboto': "var(--font-roboto)",
      },
      boxShadow: {
        'inset-nav': 'inset 0 -3px 0 0 rgba(0, 0, 0, 0)',
      },
      screens: {
        'lg1336': '1336px',
        'xs': '480px',
      },
    },
  },
  plugins: [],
} satisfies Config;

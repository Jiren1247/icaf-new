import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/icons/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      screens: {
        // "xsm": "428px",
      },
      spacing:{
        "33%": "33%",
      },
      colors:{
        "black": "#121212",
        "white": "#FFFFFF",
        "yellow":"#FFBC42",
        "navy-blue":"#134380",
        "main-red": "#DA1E40",
        "main-blue": "#2057CC",
      },
    },
  },
  plugins: [],
};
export default config;

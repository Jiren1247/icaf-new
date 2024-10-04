import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   nunito: ["var(--font-nunito"],
      //   montserrat: ["var(--font-montserrat)"],
      //   openSans: ["var(--font-open-sans)"],
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "sm": "428px",
      },
      colors:{
        "black": "#121212",
        "white": "#FFFFFF",
        "yellow":"#FFBC42",
        "light-yellow": "#FFD743",
        "navy-blue":"#134380",
      },
    },
  },
  plugins: [],
};
export default config;

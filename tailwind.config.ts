import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#8078fb',
        'lightpurple': '#f8f6ff',
        'white': '#FFF',
        'black': '#000',
        'gray': {
          1 : '#e3e3e3',
          3 : '#e6e6e6',
          2 : '#919191',
        },
      },
      fontFamily: {
        patua: ["var(--font-heebo)"],
        inter: ["var(--font-inter)"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

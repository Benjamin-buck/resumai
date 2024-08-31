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
        'gray': '#919191',
        'borderGray': '#e3e3e3',
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

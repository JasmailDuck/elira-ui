import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("@elira-ui/presets/base-preset")],
  theme: {
    extend: {
      colors: {
        red: "#FF0036",
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */

import animate from "tailwindcss-animate";
import { theme } from "./src/lib/theme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", ".dark"],
  theme,
  plugins: [animate],
};

export default config;

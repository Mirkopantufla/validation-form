/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#184e77",
        "primary-light": "#1e6091",
        "secondary": "#1a759f",
        "secondary-light": "#168aad",
        "neutral": "#34a0a4",
        "neutral-light": "#34a0a4",
        base: {
          "light": "#d9ed92",
          "neutral": "#b5e48c",
          "dark": "#99d98c"
        }
      }
    },
  },
  plugins: [],
};

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  lightMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#7C5DFA",
          DEFAULT: "#9277FF",
          dark: "#1E2139",
          darker: "#252945",
        },
        secondary: {
          light: "#DFE3FA",
          DEFAULT: "#888EB0",
          dark: "#7E88C3",
          darker: "#0C0E16",
        },
        accent: {
          light: "#EC5757",
          DEFAULT: "#FF777F",
          background: "#F8F8FB",
          dark: "#141625",
        },
      },
      fontFamily: {
        spartanBold: ["Spartan"],
        spartanMedium: ["Spartan"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula", "winter", "night"],
  },
};

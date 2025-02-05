/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        purple: "hsl(281, 83%, 54%)",
      },
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
      },
      backgroundImage: {
        "bg-mobile": "url('./src/assets/images/background-pattern-mobile.svg')",
        "bg-desktop":
          "url('./src/assets/images/background-pattern-mobile.svg')",
      },
    },
  },
  plugins: [],
};

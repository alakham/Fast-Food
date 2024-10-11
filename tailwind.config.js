/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      colors: {
        pizza: "#4444",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

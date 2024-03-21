/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Dosis", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
      colors: {
        yellow: {
          DEFAULT: "#dbac2c",
          dark: "#c47f17",
          light: "#f1e9c9",
        },
        purple: {
          DEFAULT: "#8047f8",
          dark: "#4b2995",
          light: "#ebe5f9",
        },
        base: {
          title: "#272221",
          subtitle: "#403937",
          text: "#574f4d",
          label: "#8d8686",
          hover: "#d7d5d5",
          button: "#e6e5e5",
          input: "#ededed",
          card: "#f3f2f2",
          background: "#fafafa",
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        primary: "#5EFC8D",
      },
      blue: {
        primary: "#47e0ff",
      },
      white: "#FFFFFF",
      black: "#141414",
      trueBlack: "#000000",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "title-text": ["Anton", "sans-serif"],
        "content-text": ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

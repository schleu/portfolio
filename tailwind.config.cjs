module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "426px",
      },
      colors: {
        primary: "#41B19B",
        secondary: "#6DBCA9",
        third: "#FAFAFA",
        fourth: "#DFEBE9",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        techMono: ["Share Tech Mono", "monospace"],
      },
      variants: {
        animation: ["motion-safe"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },

  plugins: [],
};

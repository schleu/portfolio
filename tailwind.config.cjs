module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "426px",
      },
      colors: {
        "green-350": "#6DBCA9",
        "green-360": "#41B19B",
        "gray-110": "#FAFAFA",
        "gray-210": "#DFEBE9",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        techMono: ["Share Tech Mono", "monospace"],
      },
    },
  },

  plugins: [],
};

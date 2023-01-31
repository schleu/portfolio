module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "426px",
        cut: "1236px",
      },
      colors: {},
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      variants: {
        animation: ["motion-safe"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        moveLeft: "moveLeft 10s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        moveLeft: {
          "0%": { left: "100%" },
          "100%": { left: "-150%" },
        },
      },
    },
  },

  plugins: [],
};

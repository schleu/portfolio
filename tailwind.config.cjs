module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "426px",
        cut: "1236px",
      },
      colors: {
        "dark-900": "#121212",
        "dark-800": "#1A1A1A",
        "dark-500": "#262626",
        "dark-300": "#333333",
        "dark-200": "#D6D6DC",
        "dark-100": "#FFFFFF",
        primary: "#41B19B",
        danger: "#F12C4C",
        "light-900": "#F0F6FF",
        "light-800": "#D6D6DC",
        "light-500": "#333333",
        "light-300": "#262626",
        "light-00": "#1A1A1A",
        "light-100": "#121212",
      },
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
};

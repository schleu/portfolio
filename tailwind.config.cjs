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
        "dark-400": "#2D2D2D",
        "dark-300": "#333333",
        "dark-200": "#D6D6DC",
        "dark-100": "#D4D4D8",
        "dark-50": "#F0F6FF",
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
        oswald: ["Oswald", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      variants: {
        animation: ["motion-safe"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        moveLeft: "moveLeft 30s ease-in-out infinite",
        fadeInUp: "fadeInUp 1s ease-in",
        fadeOutUp: "fadeOutUp 1s ease-in",
        fadeInDown: "fadeInDown 1s ease-in",
        fadeInLeft: "fadeInLeft 1s ease-in",
        fadeInRight: "fadeInRight 1s ease-in",
      },
      keyframes: {
        fadeInDown: {
          "0%":{ transform: "translate(0,-350%)", opacity: '0' },
          "60%":{ opacity: '0' },
          "100%":{ transform: "translate(0,0)", opacity: '1' }
        },
        fadeInUp: {
          "0%":{ transform: "translate(0,150%)", opacity: '0' },
          "60%":{ opacity: '0' },
          "100%":{ transform: "translate(0,0)", opacity: '1'}
        },
        fadeOutUp: {
          "0%":{ transform: "translate(0,0)",opacity: '1'},
          "60%":{ opacity: '0' },
          "100%":{ transform: "translate(0,-150%)", opacity: '0' }
        },
        fadeInLeft: {
          "0%":{ transform: "translate(150%,0)", opacity: '0' },
          "60%":{ opacity: '0' },
          "100%":{ transform: "translate(0,0)", opacity: '1'}
        },
        fadeInRight: {
          "0%":{transform: "translate(-150%,0)", opacity: '0'},
          "60%":{ opacity: '0' },
          "100%":{ transform: "translate(0,0)", opacity: '1'}
        },
        fadeIn: {
          "0%": { opacity: '0' },
          "60%":{ opacity: '0' },
          "100%": { opacity: '1' },
        },
        moveLeft: {
          "0%": { right: "-100%", },
          "100%": { right: "0%" },
        },
      },
    },
  },
};

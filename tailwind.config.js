const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xsm: "0.688rem", // 11px
        sm: "0.75rem", // 12px
        base: "0.813rem", // 13px
        lg: "0.875rem", // 14px
        xl: "1rem", // 16px
      },
      colors: {
        "msg-red": "#A01441",
        "msg-gray": "#6F6F6F",
        primary: colors.blue,
        minus: colors.red[600],
        plus: colors.green[600],
        danger: colors.red[600],
        success: colors.green[600],
        cardinal: {
          50: "#F6F3F4",
          100: "#F2E8EB",
          200: "#E9C9D3",
          300: "#E2A1B6",
          400: "#DC658B",
          500: "#A01441",
          600: "#8D2043",
          700: "#71233C",
          800: "#502130",
          900: "#381F27",
          950: "#20181B",
        },
        sea: {
          50: "#EBEEEF",
          100: "#D1DFE6",
          200: "#95C3DA",
          300: "#4FABD8",
          400: "#198DC8",
          500: "#006699",
          600: "#0D4D6D",
          700: "#11384B",
          800: "#10232D",
          900: "#0B1114",
          950: "#070808",
        },
        caribbean: {
          50: "#EBEFEF",
          100: "#D3E4E4",
          200: "#99D6D6",
          300: "#54D4D4",
          400: "#1BC5C5",
          500: "#009999",
          600: "#0F6C6C",
          700: "#124949",
          800: "#112C2C",
          900: "#0C1313",
          950: "#070808",
        },
        mantis: {
          50: "#F3F6F3",
          100: "#E6EFE6",
          200: "#CAE2CA",
          300: "#ACD8AC",
          400: "#8CCF8C",
          500: "#66CC66",
          600: "#48AD48",
          700: "#3B7D3B",
          800: "#2B4F2B",
          900: "#182518",
          950: "#0D110D",
        },
      },
      maxHeight: {
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "33vh",
        "20vh": "20vh",
      },
      height: {
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
        "20vh": "20vh",
      },
      width: {
        "80vw": "80vw",
        "70vw": "70vw",
        "60vw": "60vw",
        "50vw": "50vw",
        "40vw": "40vw",
        "30vw": "30vw",
        "20vw": "20vw",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "enter-right": "enter-right 0.2s ease-in-out",
        "exit-right": "exit-right 0.2s ease-in-out forwards",

        "enter-left": "enter-left 0.2s ease-in-out",
        "exit-left": "exit-left 0.2s ease-in-out forwards",

        "enter-top": "enter-top 0.2s ease-in-out",
        "exit-top": "exit-top 0.2s ease-in-out forwards",

        "enter-bottom": "enter-bottom 0.2s ease-in-out",
        "exit-bottom": "exit-bottom 0.2s ease-in-out forwards",
      },
      keyframes: {
        "enter-right": {
          from: { opacity: 0, transform: "translateX(300px)" },
          to: { opacity: 1, transform: "translateX(0px)" },
        },
        "exit-right": {
          from: { opacity: 1, transform: "translateX(0px)" },
          to: { opacity: 0, transform: "translateX(300px)" },
        },

        "enter-left": {
          from: { opacity: 0, transform: "translateX(-300px)" },
          to: { opacity: 1, transform: "translateX(0px)" },
        },
        "exit-left": {
          from: { opacity: 1, transform: "translateX(0px)" },
          to: { opacity: 0, transform: "translateX(-300px)" },
        },

        "enter-top": {
          from: { opacity: 0, transform: "translateY(-200px)" },
          to: { opacity: 1, transform: "translateY(0px)" },
        },
        "exit-top": {
          from: { opacity: 1, transform: "translateY(0px)" },
          to: { opacity: 0, transform: "translateY(-200px)" },
        },

        "enter-bottom": {
          from: { opacity: 0, transform: "translateY(200px)" },
          to: { opacity: 1, transform: "translateY(0px)" },
        },
        "exit-bottom": {
          from: { opacity: 1, transform: "translateY(0px)" },
          to: { opacity: 0, transform: "translateY(200px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};

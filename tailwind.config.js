const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    opacity: {
      0: "0",
      5: ".05",
      7: ".07",
      10: ".1",
      15: ".15",
      20: ".2",
      25: ".25",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      75: ".75",
      80: ".8",
      90: ".9",
      100: "1",
    },
    extend: {
      fontSize: {
        xxxxs: "4px",
        xxxs: "6px",
        xxs: "8px",
        xs: "10px",
        sm: "12px",
      },
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        outline: "0 0 0 4px rgba(255,255,255, 0.5)",
      },
      zIndex: {
        "-1": "-1",
        1000: "1000",
      },
      blur: {
        xs: "2px",
      },
      rotate: {
        135: "135deg",
      },
      transitionDuration: {
        0: "0ms",
      },
      scale: {
        30: ".3",
        40: ".4",
        45: ".45",
        60: ".6",
        65: ".65",
        70: ".702",
        80: ".8",
        200: "2",
        95: ".95",
        99: ".99",
        105: "1.05",
        120: "1.2",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  plugins: [require("@tailwindcss/forms")],
};

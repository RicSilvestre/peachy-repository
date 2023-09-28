const path = require("path");

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        "adorn-condensed-sans": ["Adorn Condensed Sans", "sans-serif"],
        "futura": ["FuturaPT", "sans-serif"],
      },
      translate: {
        "1.25": "5px",
      },
      gridTemplateColumns: {
        "peachy-section": "repeat(auto-fit, minmax(280px, 1fr))",
      },
      backgroundImage: {
        "sky": "url('/assets/bg.png')",
      }
    },
    colors: {
      base: "#242323",
      primary: "#FFD11F",
      bg_1: "#FDE0DC",
      bg_2: "#FDF5F4",
      transparent: "rgb(0, 0, 0, 0)",
    }
  },

  plugins: [],
  content: [
    path.resolve(__dirname, "./src/**/*.{js,vue}"),
    path.resolve(__dirname, "./shopify/**/*.liquid"),
  ],
};

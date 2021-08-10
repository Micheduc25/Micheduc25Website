const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      screens: {
        "xs":"450px"
      },  
      colors: {
        primary: "#109e92",
        secondary: "#32364d",
        primary_light: "#25dacb",
        secondary_light: "#61668c",
        tertiary: "#ffffff"
      }
    }
  }
};

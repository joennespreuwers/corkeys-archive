/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: false,
  theme: {
    screens: {
      sm: "480px",
      md: "786px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      dmsans: ["DM Sans, normal"],
    },
    colors: {
      yellow: "#fdcb01",
      orange: "#fe8402",
      red: "#fe5101",
      bwhite: "#fcf9d3",
      white: "#faf9f0",
      grey: "#333333",
      lgrey: "#454545",
      heart: "#e67070",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {},
  },
  plugins: [],
};

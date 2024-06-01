// eslint-disable-next-line no-undef
const defaultTheme = require( 'tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      '2xs': '375px',
      'xs': '425px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      fontTitle: ["Julius Sans One", "sans-serif"],
      fontBody: ["Roboto Condensed"]
    },
    extend: {},
  },
  plugins: [],
};

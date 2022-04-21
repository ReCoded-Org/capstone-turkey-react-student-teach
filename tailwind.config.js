const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        "primary-color": "#CA7560",
        "secondary-color": "#C4C4C4",
        "font-color": "#424242"
      }
    },
    screens: {
      'xs': {'max': '505px', 'min': '350px'},
      ...defaultTheme.screens,
    }
  },
  plugins: [],
};
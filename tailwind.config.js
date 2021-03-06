/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      'xs': {'max': '505px', 'min': '334px'},
      ...defaultTheme.screens,
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'primary-color': '#CA7560',
        'secondary-color': '#C4C4C4',
        'font-color': '#424242',
				'card-background': 'var(--card-background)',
        cusOrange: '#CA7560',
        primaryDark: 'rgb(31 41 55)',
        secondaryDark:'rgb(55 65 81)',
        transparent: 'transparent',
        current: 'currentColor',
        orange: 'rgba(202, 117, 96, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/line-clamp')],
};

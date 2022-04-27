/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
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

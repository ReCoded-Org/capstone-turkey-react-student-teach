/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cusOrange: '#CA7560',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/line-clamp')],
};

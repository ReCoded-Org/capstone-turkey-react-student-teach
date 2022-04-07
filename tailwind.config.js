/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'),require('@tailwindcss/forms')],
};

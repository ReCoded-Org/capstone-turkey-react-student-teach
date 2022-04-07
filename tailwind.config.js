/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
   require('@tailwindcss/forms'),
   require('@tailwindcss/line-clamp')
  ],
};

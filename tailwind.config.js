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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: 'rgba(202, 117, 96, 1)',
    },
    extend: {
      colors: {
        cusOrange: '#CA7560',
        'primary-color': 'var(--primary-color)',
				'secondary-color': 'var(--secondary-color)',
				'card-background': 'var(--card-background)'
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/line-clamp')],
};

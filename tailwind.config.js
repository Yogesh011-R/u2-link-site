const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: 'var(--dm-sans)',
        dmSerif: 'var(--dm-serif-display)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primaryDark: 'var(--primary-dark)',
        primaryMedium: 'var(--primary-medium)',
        primaryLight: 'var(--primary-light)',
        blackMid: 'var(--black-mid)',
        success: 'var( --success-dark)',
        blue: 'var(--blue-dark)',
        danger: 'var(--danger-dark)',
      },
    },
  },
  plugins: [],
  important: true,
}

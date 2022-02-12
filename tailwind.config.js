const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '530px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
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
};

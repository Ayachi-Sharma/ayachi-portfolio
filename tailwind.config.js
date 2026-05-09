/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards',
        blink: 'blink 0.8s infinite',
        scrollDown: 'scrollDown 1.5s infinite',
        loadingBar: 'loadingBar 2s ease-in-out infinite',
      },
      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
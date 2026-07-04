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
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-slow': 'pulseSlow 8s ease-in-out infinite',
        'pulse-slower': 'pulseSlow 12s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1) translate(0px, 0px)', opacity: '0.4' },
          '33%': { transform: 'scale(1.2) translate(30px, -50px)', opacity: '0.6' },
          '66%': { transform: 'scale(0.8) translate(-20px, 20px)', opacity: '0.4' },
        },
      },
      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
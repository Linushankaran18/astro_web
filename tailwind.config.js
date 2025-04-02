/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    animation: {
      'bounce-slow': 'bounce 3s infinite',
      'spin-slow': 'spin 20s linear infinite',
      'float': 'float 5s ease-in-out infinite',
      'float-delayed': 'float 6s 1s ease-in-out infinite',
      'float-slow': 'float 7s 2s ease-in-out infinite',
      'pulse-slow': 'pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      }
    }
  }
  },
  plugins: [],
}
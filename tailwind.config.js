/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#040712',
          900: '#0a1328',
        },
        brand: {
          300: '#6ee7f9',
          400: '#22d3ee',
          500: '#14b8a6',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -24px rgba(34, 211, 238, 0.4)',
      },
    },
  },
  plugins: [],
}

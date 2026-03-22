/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05020d',
          900: '#120a24',
        },
        brand: {
          300: '#c4b5fd',
          400: '#8b5cf6',
          500: '#6d28d9',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -24px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [],
}

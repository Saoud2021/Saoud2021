/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#FDF4F4',
          100: '#FBEAEA',
          200: '#F4C7C7',
          300: '#EDA4A4',
          400: '#E57171',
          500: '#DE3E3E', // Base maroon color
          600: '#C43737',
          700: '#9E2D2D',
          800: '#792323',
          900: '#571919',
        },
      },
      animation: {
        'text-slide': 'text-slide 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 26.66%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
            transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(-75%)',
          },
        },
      },
    },
  },
  plugins: [],
}

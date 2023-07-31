/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A7935',
        black: { DEFAULT: '#212121' },
        gray: { DEFAULT: '#303030' },
        white: { DEFAULT: '#D9D9D9' },
        red: { 800: '#991b1b' },
        yellow: { 500: '#eab308' },
        orange: { 700: '#c2410c' },
        green: { 950: '#052e16' },
      },
    },
  },
  plugins: [],
}

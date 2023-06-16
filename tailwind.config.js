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
      },
    },
  },
  plugins: [],
}

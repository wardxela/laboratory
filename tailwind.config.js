/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,mdx}'],
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class',
};

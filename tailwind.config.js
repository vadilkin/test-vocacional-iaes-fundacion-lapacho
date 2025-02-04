/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Ajustado para Next.js 15
    "./src/components/**/*.{js,ts,jsx,tsx}", // Ajustado para componentes dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // TODO: use the actual brand colors
          light: "#6EE7B7",
          DEFAULT: "#10B981",
          dark: "#047857"
        },
        colors: {
          'fg-brand': '#00D3F3',
        }
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-accent": "var(--primary-accent-color)",
        "primary-accent-2": "var(--primary-accent-2-color)",
        "separator": "var(--separataor-color)",
        "secondary": "var(--secondary-color)",
        "secondary-light": "var(--secondary-color-light)",
        "secondary-dark": "var(--secondary-color-dark)"
      },
      textColor: {
        current: "var(--current-text-color)",
        "current-accent": "var(--accent-text-color)",
        "current-accent-2": "var(--accent-2-text-color)"
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
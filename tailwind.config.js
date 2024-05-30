/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "puff-in-center": "puff-in-center 1s cubic-bezier(0.950, 0.050, 0.795, 0.035) 2s   both"
      },
      keyframes: {
        "puff-in-center": {
          "0%": {
            transform: "scale(2)",
            filter: "blur(2px)",
            opacity: "0"
          },
          to: {
            transform: "scale(1)",
            filter: "blur(0)",
            opacity: "1"
          }
        }
      }
    },
  },
  plugins: [require("daisyui")],
}
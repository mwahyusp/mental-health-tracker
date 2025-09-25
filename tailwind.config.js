/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "calming-blue": "#4b9cd3",
        "soothing-green": "#48bb78",
        "warm-yellow": "#ecc94b",
      },
    },
  },
  plugins: [],
};

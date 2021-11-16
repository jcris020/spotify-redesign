module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2xl": "1500px",
      },
      keyFrames: {
         pusle: {
           "0%, 100%": {
             opacity: 1,
           },
           "50%": {
             opacity: 0.5,
           },
         },
      },
      animation: {
        pusle: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
}

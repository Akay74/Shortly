module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        red: 'hsl(0, 87%, 67%)',
        grey: 'hsl(0, 0%, 75%)',
        violet: {
          100: 'hsl(257, 7%, 63%)',
          800: 'hsl(257, 27%, 26%)',
          900: 'hsl(260, 8%, 14%)',
        },
        blue: {
          900: 'hsl(255, 11%, 22%)'
        },
      }
    },
    backgroundImage: {
      boostmobile: "url('/src/assets/bg-boost-mobile.svg')",
      boostdesktop: "url('/src/assets/bg-boost-desktop.svg')"
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

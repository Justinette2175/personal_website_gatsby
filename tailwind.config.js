module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['body', 'serif'],
    },
    colors: {
      "primary-main": "#C9FFE0",
      "primary-dark": "#1F5C39",
      "white": "#FFF"
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700
    },
    extend: {
      screens: {
        "can-hover": { raw: "(hover: hover)" },
      },
      minHeight: {
        "page-content": "calc(100% - 100px)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

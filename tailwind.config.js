module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["body", "serif"],
    },
    colors: {
      "primary-light": "#EBFCFF",
      "primary-main": "#DBF9FF",
      "primary-dark": "#277C8D",
      "primary-very-dark": "#104954",
      white: "#FFF",
      "accent-yellow": "#FDF5A5",
      "accent-orange": "#F8D49A",
      "accent-green": "#AEF2C1",
      "accent-blue": "#AEE6F2",
      "accent-indigo": "#AEC4F2",
      "accent-violet": "#E7CEFD",
      "accent-pink": "#FDCECE",
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    extend: {
      screens: {
        "can-hover": { raw: "(hover: hover)" },
      },
      minHeight: {
        "page-content": "calc(100% - 100px)",
        "card-photo": "700px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

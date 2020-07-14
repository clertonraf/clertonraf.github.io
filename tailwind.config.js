const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
        light: { raw: "(prefers-color-scheme: light)" }
      },
      fontFamily: {
        cursive: ["Kaushan Script"],
      },
      fontSize: {
        ...defaultTheme.fontSize,
        '9xl': '7rem',
      }
    },
  },
  variants: {},
  plugins: [
  ],
}

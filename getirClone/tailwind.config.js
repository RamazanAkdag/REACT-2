module.exports = {
  mode: "jit",

  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundColor: (theme) => ({
      //   "brand-color": "#4c3398",
      //   "primary-brand-color": "#5d3ebc",
      //   "secondary-brand-color": "#7849f7",
      // }),
      // gradientColorStops: (theme) => ({
      //   "brand-color": "#4c3398",
      //   "primary-brand-color": "#5d3ebc",
      //   "secondary-brand-color": "#7849f7",
      // }),
      // textColor: (theme) => ({
      //   "brand-color": "#4c3398",
      //   "primary-brand-color": "#5d3ebc",
      //   "secondary-brand-color": "#7849f7",
      // }),
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#ffd300",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

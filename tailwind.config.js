module.exports = {
  // content: ["./dist/*.html", "./dist/assets/**/*.js"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
      '16': '16rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

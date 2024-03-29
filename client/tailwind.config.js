module.exports = {
  content: [
    '.index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '375px',
      'sm': '420px',
      'five': '500px',
      'tab': '640px',
      'tablet': '768px',
      'xtab': '900px',
    }
  },
  plugins: [],
}


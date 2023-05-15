module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  css: {
    postcss: 'postcss.config.js'
  }
}

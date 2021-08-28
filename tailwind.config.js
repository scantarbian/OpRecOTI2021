module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'omahti': "url('background.png')"
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-border-gradients')
  ],
}

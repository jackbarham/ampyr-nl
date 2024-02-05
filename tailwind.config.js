module.exports = {
  content: [
    './pages/**/*.{html,js,ts}',
    './components/**/*.{html,js,ts}',
    './storyblok/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#181f49',
        'brand-navy-dark': '#15193c',
        'brand-grey': '#edf2f4',
        'brand-wheat': '#f5efec',
        'brand-eu': '#07f3b7',
        'brand-uk': '#71b7fe',
        'brand-nl': '#ffbfa6',
        'brand-de': '#a89bf9',
      },
      fontFamily: {
        neworder: ['new-order', 'sans-serif'],
        inter: ['Inter var', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
          },
        },
      },
    },
  },
  variants: {
    extend: {
      order: ['odd', 'even'],
      marginBottom: ['last'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
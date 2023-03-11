/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,md,ts,vue}'],
	theme: {
		extend: {
			animation: {
        'spin-slow': 'spin 3s linear infinite',
				'pulse-slow': 'pulse 5s linear infinite',
      },
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			colors: {
				customBlue: '#1C56B8',
				primary: '#0B0B0D',
				secondary: '#121214'
			}
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		plugin(function ({ addBase, _theme }) {
      addBase({
        'body.no-scroll': {
          overflow: 'hidden',
        },
        html: {
          scrollBehavior: 'smooth',
          overflowX: 'hidden',
        },
      })
    }),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hide': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',

            /* Firefox */
            'scrollbar-width': 'none',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },

          '.scrollbar-default': {
            /* IE and Edge */
            '-ms-overflow-style': 'auto',

            /* Firefox */
            'scrollbar-width': 'auto',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'block',
            },
          },
        },
        ['responsive'],
      )
    }),
	],
}

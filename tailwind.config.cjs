/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,ts,vue}'],
	theme: {
		extend: {
			animation: {
        'spin-slow': 'spin 3s linear infinite',
				'pulse-slow': 'pulse 5s linear infinite',
      },
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				customBlue: '#1C56B8',
				primary: '#0B0B0D'
			}
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio')
	],
}

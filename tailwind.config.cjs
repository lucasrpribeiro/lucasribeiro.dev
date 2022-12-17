/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,ts,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", 'sans-serif'],
				roboto: ["Roboto", 'sans-serif']
			},
			colors: {
				darkBlue: {
					300: '#151C3F',
					500: '#535295',
					800: '#8A77D2' 
				},
				swapGreen: {
					200: '#88bfb0',
					400: '#7d9d9f'
				}
			}
		},
	},
	plugins: [],
}

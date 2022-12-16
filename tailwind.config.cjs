/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,ts,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", 'sans-serif'],
				roboto: ["Roboto", 'sans-serif']
			}
		},
	},
	plugins: [],
}

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
				darkBlue: '#02052a',
				swapGreen: {
					200: '#a7c735',
					400: '#81c846'
				}
			},
			textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
		},
	},
	plugins: [],
}

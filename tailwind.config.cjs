/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,ts,vue}'],
	theme: {
		extend: {
			animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
			fontFamily: {
				firaCode: ["Fira Code", 'monospace'],
				roboto: ["Roboto", 'sans-serif'],
				tech : ["Share Tech Mono", 'monospace'],
				orbitron: ["Orbitron", 'sans-serif']
			},
			colors: {
				seance: {
					DEFAULT: '#451B66',
					'50': '#F8E4F6',
					'100': '#F2CCF0',
					'200': '#E29CE5',
					'300': '#CB6CD8',
					'400': '#AE3BCB',
					'500': '#7E2A9F',
					'600': '#602383',
					'700': '#451B66',
					'800': '#2D144A',
					'900': '#190C2E'
				},
				haiti: {
					DEFAULT: '#320f60',
					'50': '#f3f0fd',
					'100': '#d9cbfc',
					'200': '#b497f8',
					'300': '#8c5bed',
					'400': '#6a29d8',
					'500': '#5210bc',
					'600': '#440a97',
					'700': '#3a0d78',
					'800': '#320f60',
					'900': '#050209',
			},
				darkBlue: '#2A2634',
				lksGreen: '#2ecc71',
				lksYellow: '#f1c40f',
			},
			textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio')
	],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary': '#262626',
				'secondary': '#333A3F',
				'graphite-blue': '#273449',
				'primary-dark': '#1c1c1d',
				'secondary-dark': '#2a2a2a'
			}
		},
	},
	plugins: [],
}

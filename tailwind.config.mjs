/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary': '#262626',
				'primary-dark': '#1c1c1d',
				'secondary-dark': '#2a2a2a'
			}
		},
	},
	plugins: [],
}

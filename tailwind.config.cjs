/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                grey: {
                    dark: "#000000",
                    light: "#181818",
                    mid: "#121212",
                },
            },
            fontFamily: {
                // Archivo: ['Archivo', 'sans-serif'],
            },
			container: {
                center: true,
            },
		},
	},
	plugins: [
		function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        maxWidth: "540px",
                    },
                    "@screen md": {
                        maxWidth: "720px",
                    },
                    "@screen lg": {
                        maxWidth: "960px",
                    },
                    "@screen xl": {
                        maxWidth: "1140px",
                    },
                },
            });
        },
	],
}

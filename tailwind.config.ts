import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				title: ['Outfit', 'sans-serif']
			}
		}
	},

	plugins: [forms]
} as Config;
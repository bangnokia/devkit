import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetWebFonts } from 'unocss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				Unocss({
					presets: [
						presetAttributify(),
						presetUno(),
						presetWebFonts({
							provider: 'none',
							fonts: {
								mono: ['Roboto Mono'],
							}
						})
					]
				})
			]
		}
	}
};

export default config;

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		alias: {
			'@components': path.resolve('./src/lib/components/index.ts'),
			'@http': path.resolve('./src/lib/http/index.ts'),
			'@stores': path.resolve('./src/lib/stores/index.ts'),
			'@i18n': path.resolve('./src/i18n/index.ts')
		},
		paths: {
			base: dev ? '' : ''
		}
	}
};

export default config;

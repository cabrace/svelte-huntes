import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    alias: {
      // $static: 'src/static'
    },
		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		}
	},
  moduleExtensions: ['.js', '.ts'],
  files: {
    assets: 'static',
    hooks: 'src/hooks',
    lib: 'src/lib',
    params: 'src/params',
    routes: 'src/routes',
    serviceWorker: 'src/service-worker',
    template: 'src/app.html'
  },
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	]
};

export default config;

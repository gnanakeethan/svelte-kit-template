import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true,
        })
    ],


    kit: {
        adapter: adapter({
            fallback: 'index.html'
        }),
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        vite: {
            alias: {
                "tslib": 'tslib/tslib.es6.js',
            },
            resolve: {
                alias: {
                    "tslib": 'tslib/tslib.es6.js',
                    "./runtimeConfig": "./runtimeConfig.browser"
                }
            },
            build: {
                rollupOptions: {
                    output: {
                        intro: "if(exports === undefined){var exports ={}; var self = {}}"
                    }
                }
            }
        }
    }
};

export default config;

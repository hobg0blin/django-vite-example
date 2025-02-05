import { defineConfig } from 'vite';
import {resolve, join} from 'path';

export default defineConfig(() => {
    const INPUT_DIR = './src/'
    const OUTPUT_DIR = './dist/'
    return {
        root: resolve(INPUT_DIR),
        base: "/static/",
        build: {
          manifest: true,
          outDir: resolve("OUTPUT_DIR"),
          rollupOptions: {
            input: {
              static: join(INPUT_DIR, 'main.js'),
              css: join(INPUT_DIR, 'style.css')
            }
          }
        },
        server: {
            watch: {
                usePolling:true
            }
        },

  }})
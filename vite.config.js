import { resolve } from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        host: 'foo.test',
        port: '4000',
        open: true,
    },
    build: {
        manifest: true,
        outDir: 'wwwroot',
        sourcemap: true,
        cssCodeSplit: false,
        rollupOptions: {
            input: resolve(__dirname, 'main.js'),
            // input: {
            //     main: resolve(__dirname, 'index.html'),
            //     docs: resolve(__dirname, 'docs/index.html')
            // },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            }
        }
    }
})

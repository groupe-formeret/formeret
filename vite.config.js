import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import fs from 'fs'

// vite.config.js
export default defineConfig({
  plugins: [eslintPlugin({ cache: false })],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: './src/main.js',
      output: {
        format: 'umd',
        entryFileNames: 'main-01.js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
      server: {
        host: true
      },
      // Add the following code to copy all files from the assets directory
      plugins: [
        {
          name: 'copy-assets',
          writeBundle() {
            const assetPath = './src/assets'
            const files = fs.readdirSync(assetPath, { withFileTypes: true })

            files.forEach((file) => {
              if (file.isFile()) {
                const filePath = resolve(assetPath, file.name)
                const fileName = file.name

                this.emitFile({
                  type: 'asset',
                  fileName,
                  source: fs.readFileSync(filePath),
                })
              }
            })
          },
        },
      ],
    },
  },
})

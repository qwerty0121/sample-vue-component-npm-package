import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'sample-vue-component-npm-package',
      fileName: (format) => `sample-vue-component-npm-package.${format}.js`
    },
    rollupOptions: {
      external: 'vue',
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

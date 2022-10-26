import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // エントリーポイントとなるファイルを指定
      entry: resolve(__dirname, 'src/index.js'),
      // HTMLから<script>タグを用いてnpmパッケージをインストールした際、パッケージ内のVueコンポーネントがこの名前のグローバル変数に設定される
      name: 'sample-vue-component-npm-package',
      // ビルド結果として出力されるパッケージファイルの名前(を返却値とする関数)
      fileName: (format) => `sample-vue-component-npm-package.${format}.js`
    },
    rollupOptions: {
      // バンドル対象外とする依存ライブラリを指定する
      external: 'vue',
      output: {
        // バンドル対象外とした依存ライブラリのためにUMDビルドで使用するグローバル変数を提供する
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

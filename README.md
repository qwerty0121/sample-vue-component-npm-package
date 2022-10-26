# sample-vue-component-npm-package

## このリポジトリについて

このリポジトリは、Vueコンポーネントをnpmパッケージとして公開するサンプルコードである。

## Vueコンポーネントをnpmパッケージとして公開する手順

1. 公開するVueコンポーネントを作成
   * 本リポジトリでは`src/components/CounterButton.vue`を公開している。
1. エントリーポイントを作成
   * 本リポジトリでは`src/index.js`をエントリーポイントとしている。
1. npmモジュールをビルド
   * 本リポジトリではViteをビルドツールとして利用しているので、`vite.config.js`にnpmモジュールのビルド設定を記載している。
1. npmパッケージを公開
   * `package.json`に以下の設定を追加する。
     * module: npmパッケージとして公開するnpmモジュールファイルのパス
     * exports.".".import: npmパッケージの読み込みでimport文を利用した際に参照するnpmモジュールファイルのパス
     * exports.".".require: npmパッケージの読み込みでrequire関数を利用した際に参照するnpmモジュールファイルのパス

<div align="center">
  <a href="https://bcrikko.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width:100%;" width="600" height="315"></a>

  <a href="README.md">English</a> / <a href="README.md">日本語</a>
</div>

NES.css is a **NES-style(8bit-like)** CSS Framework.  
NES.cssは **ファミコン風(8bit ライク)** なCSSフレームワークです。


## Install

### CDN

```html
<!-- minify -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.min.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css/css/nes.min.css" rel="stylesheet" />
```

OR

```html
<!-- non-minified -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
```

### npm

TODO: npm での使用方法を書く


## Usage

NES.cssはコンポーネントのスタイルのみを提供しています。レイアウトはみなさんが好きなように定義してください。

デフォルトでは`Press Start 2P`フォントを使っています。英語以外（日本語など）で利用される場合は、別途フォントを読み込んで使ってください。

TODO: 詳細を書く


## CSS Only

NES.cssはCSSのみで構成されています。JavaScriptは不要です。


## Browser Support

次のブラウザの最新バージョンをサポートしています。

* Chrome
* Firefox
* Safari

未確認
* IE/Edge


## Development

### Commands
```sh
git clone git@github.com:BcRikko/NES.css.git
cd NES.css

npm i

npm run watch
npm run build
```

pre-commit hookにより、コミット時に自動でLint→format→buildが走り、`css`ディレクトリにファイルが出力されます。
TODO: ビルドはCIでするように変更したい

### Directories
```
.
|- index.html: Demo page
|- style.css: Demo page style
|- css: Distribution files
|-　scss: Source
    |- base
    |   |- reboot.scss: **Don't change!** (Bootstrap Reboot)
    |   |- generic.scss: Generic style and overwrite reboot.css
    |   |- variables.scss: Common variables
    |- elements
    |- form
    |- icons: For 16x16 icon
    |- pixel-arts: For icon other than 16x16 icon.
    |- utilities
```



## Copyright and license

Code and documentation copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Code released under the MIT License. Docs released under Creative Commons.

<div align="center">
  <a href="https://bcrikko.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width:100%;" width="600" height="315"></a>

  <a href="README.md">English</a> / <a href="README-jp.md">日本語</a>
</div>

NES.css is a **NES-style(8bit-like)** CSS Framework.


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

NES.css only provides components. You will need to define your own layout.

The default font is Press Start 2P which only supports English characters. When you're using this framework with any language except English, please use another font.

### Recommended Fonts

|Language|Font|
|----|----|
|(Default)|[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)|
|English|[Kongtext](https://www.dafont.com/kongtext.font)|
|Japanese|[美咲フォント](http://www.geocities.jp/littlimi/misaki.htm)|
|Japanese|[Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)|


## CSS Only

NES.css only requires CSS and doesn't depend on any JavaScript.


## Browser Support

NES.css is compatible with the newest version of the following browsers.
* Chrome
* Firefox
* Safari

Untested
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

Linting, formatting and building runs automatically in the pre-commit hook.
TODO: ビルドはCIでするように変更したい

### Directories
```sh
.
├── index.html: Demo page
├── style.css: Demo page style
├── css: Distribution files
└── scss: Source
    ├── base
    │   ├── reboot.scss: Don't change! (Bootstrap Reboot)
    │   ├── generic.scss: Generic style and reboot.css
    │   └── variables.scss: Common variables
    ├── elements
    ├── form
    ├── icons: 16x16 icons
    ├── pixel-arts: For icons other than 16x16.
    └── utilities
```



## Copyright and license

Code and documentation copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Code released under the MIT License. Docs released under Creative Commons.

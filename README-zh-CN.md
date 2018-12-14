<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width:100%;" width="600" height="315"></a>

  <a href="README.md">English</a> / <a href="README-jp.md">日本語</a> / <a href="README-es.md">Español</a> / <a href="README-pt-BR.md">Português</a>
</div>

NES.css 是一款 **NES-风格(8位机)** 的CSS 框架.

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 安装

### CDN

```html
<!-- minify -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.min.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css/css/nes.min.css" rel="stylesheet" />
```

或者

```html
<!-- non-minified -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
```

### npm

TODO: npm での使用方法を書く

## 使用

NES.css 只提供组件. 你需要定义你自己的布局.

默认字体[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P) 只支持英文字符. 当你把这个框架与其他非英语的语言一起使用的时候, 请使用另外的字体. 请根据这个关于Google Fonts的 [说明](https://developers.google.com/fonts/docs/getting_started) 了解如何把它引入项目, 或者按照如下方式简单引人:

```html
<head>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
    <style>
      html, body, pre, code, kbd, samp {
          font-family: "font-family you want to use";
      }
    </style>
</head>
```

### 推荐字体

|Language|Font|
|----|----|
|(Default)|[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)|
|English|[Kongtext](https://www.dafont.com/kongtext.font)|
|Japanese|[美咲フォント](http://www.geocities.jp/littlimi/misaki.htm)|
|Japanese|[Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)|


## 只需要CSS

NES.css 仅仅需要 CSS 而不依赖其他任何 JavaScript.


## 浏览器支持

NES.css 与如下浏览器的最新版本兼容.
* Chrome
* Firefox
* Safari

未经测试
* IE/Edge


## 开发

### 命令
```sh
git clone git@github.com:BcRikko/NES.css.git
cd NES.css

npm i

npm run watch
npm run build
```

#### 运行 Storybook
```
npm run storybook
```

在预提交阶段Linting, 格式化以及构建都会自动运行.
TODO: ビルドはCIでするように変更したい

### 目录结构
```sh
.
├── index.html: Demo page
├── style.css: Demo page style
├── css: Distribution files
├── docs: Storybook stories
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



## 版权许可

代码以及文档版权 2018 [B.C.Rikko](https://github.com/BcRikko). 代码基于MIT许可发布. 文档基于Creative Commons许可发布.





[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg

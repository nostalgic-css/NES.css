<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width:100%;" width="600" height="315"></a>

  <a href="/README.md">English</a> / <a href="README-jp.md">日本語</a> / <a href="README-es.md">Español</a> / <a href="README-pt-BR.md">Português</a>　/ <a href="README-ru.md">Русский</a>
</div>

NES.css 是一款 **NES-风格(8位机)** 的CSS 框架.

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 安装

#### via package manager

```shell
npm install nes.css
# or
yarn add nes.css
```

##### AltCSS(sass, scss...)

```scss
// style.scss
@import "./node_modules/nes.css/css/nes.css"
```

##### JavaScript

```js
// script.js
import "nes.css/css/nes.min.css";
```
您需要安装css加载程序.

##### HTML
```html
<!-- index.html -->
<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
  </head>
  <body></body>
</html>
```

### via CDN

```html
<!-- non-minified -->
<link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<!-- core style only -->
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

### 推荐字体

| 语言   | 字体                                                               |
| ------ | ------------------------------------------------------------------ |
| (默认) | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| 英语   | [Kongtext](https://www.dafont.com/kongtext.font)                   |
| 日语   | [美咲フォント](http://littlelimit.net/misaki.htm)                  |
| 日语   | [Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)                 |
| 韩语   | [둥근모꼴](http://cactus.tistory.com/193)                              |
| 中文   | [Zpix (最像素)](https://github.com/SolidZORO/zpix-pixel-font)      |


## 使用

NES.css 只提供组件. 你需要定义你自己的布局.

默认字体[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P) 只支持英文字符. 当你把这个框架与其他非英语的语言一起使用的时候, 请使用另外的字体. 请根据这个关于Google Fonts的 [说明](https://developers.google.com/fonts/docs/getting_started) 了解如何把它引入项目, 或者按照如下方式简单引入:

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

## 只需要CSS

NES.css 仅仅需要 CSS 而不依赖其他任何 JavaScript.


## 浏览器支持

NES.css 与如下浏览器的最新版本兼容.
* Chrome
* Firefox
* Safari

未经测试
* IE/Edge


## 版权许可

代码以及文档版权 2018 [B.C.Rikko](https://github.com/BcRikko). 代码基于MIT许可发布. 文档基于Creative Commons许可发布.




[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg

<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>

  <a href=".github/README-jp.md">日本語</a> / <a href=".github/README-zh-CN.md">简体中文</a> / <a href=".github/README-es.md">Español</a> / <a href=".github/README-pt-BR.md">Português</a> / <a href=".github/README-ru.md">Русский</a>
</div>

NES.css is a **NES-style(8bit-like)** CSS Framework.

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly][commitizen-badge]][commitizen]

## Installation

### Styles

NES.css is available via either npm (preferred), Yarn, or a CDN.

#### via package manager

```shell
npm install nes.css
# or
yarn add nes.css
```

Our `package.json` contains some additional metadata under the following keys:
* `sass` - path to our main Sass source file
* `style` - path to our non-minified CSS

#### via CDN

Import the CSS via a `<link />` element:

```html
<!-- minify -->
<link href="https://unpkg.com/nes.css@2.2.1/css/nes.min.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<!-- core style only -->
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

### Fonts

NES.css doesn't provide any fonts, but we do maintain the following list of fonts that we recommend for usage alongside the library.

| Language  | Font                                                               |
| --------- | ------------------------------------------------------------------ |
| (Default) | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| English   | [Kongtext](https://www.dafont.com/kongtext.font)                   |
| Japanese  | [美咲フォント](http://littlelimit.net/misaki.htm)                  |
| Japanese  | [Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)                 |
| Korean    | [둥근모꼴](http://cactus.tistory.com/193)                              |

## Usage

NES.css only provides components. You will need to define your own layout.

The recommended font for NES.css is [Press Start 2P][press-start-2p-font]. However, [Press Start 2P][press-start-2p-font] only supports English characters. When you're using this framework with any language other than English, please use another font. Follow the Google Fonts [instructions][google-fonts-guide] about how to include them, or simply include it as below:

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

## CSS Only

NES.css only requires CSS and doesn't depend on any JavaScript.

## Browser Support

NES.css is compatible with the newest version of the following browsers:
* Chrome
* Firefox
* Safari

Untested
* IE/Edge

## Copyright and license

Code and documentation copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Code released under the MIT License. Docs released under Creative Commons.

## Development

If you'd like to help us out with the project, we welcome contributions of all types! Check out our [`CONTRIBUTING.md`][contributing-document] for more details on how you can help make NES.css amazing!





[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[contributing-document]: CONTRIBUTING.md
[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg
[google-fonts-guide]: https://developers.google.com/fonts/docs/getting_started
[press-start-2p-font]: https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P

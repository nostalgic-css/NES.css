<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>

  <a href="/README.md">English</a> / <a href="README-jp.md">日本語</a> / <a href="README-zh-CN.md">简体中文</a> / <a href="README-pt-BR.md">Português</a>
</div>

NES.css - это CSS фреймворк в стиле **NES(8bit)**

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly][commitizen-badge]][commitizen]

## Установка

### С помощью стилей

NES.css доступен через npm (более предпочтительный), Yarn, или CDN.

#### Через менеджер пакетов

```shell
npm install nes.css
# или
yarn add nes.css
```

Наш `package.json` содержит дополнительную информацию в этих полях:
* `sass` - Путь до главного Sass файла
* `style` - Путь до неминифицированного CSS

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
Вам необходимо установить css-загрузчик.

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

#### Через CDN

Использования через тэг `<link />`:

```html
<!-- Миницифированные -->
<link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
<!-- Последние -->
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<!-- Только основные стили -->
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

### Шрифты

NES.css не предоставляет никаких шрифтов, но мы поддерживаем следующие шрифты, которые рекомендуются к использованию с этой билиотекой

| Язык         | Шрифт                                                              |
| ------------ | ------------------------------------------------------------------ |
| По умолчанию | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| Английский   | [Kongtext](https://www.dafont.com/kongtext.font)                   |
| Японский     | [美咲フォント](http://littlelimit.net/misaki.htm)                  |
| Японский     | [Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)                 |
| Корейский    | [둥근모꼴](http://cactus.tistory.com/193)                              |
| китайский    | [Zpix (最像素)](https://github.com/SolidZORO/zpix-pixel-font)      |

## Использование

NES.css предоставляет компоненты. Вам нужно будет определить собственный лейаут.

Рекомендуемый для NES.css шрифт - [Press Start 2P][press-start-2p-font]. Однако, [Press Start 2P][press-start-2p-font] поддерживает только латинские символы. Когда вы используете NES.css не с английским языком, используйте другой шрифт. Cледуйте [инструкции][google-fonts-guide] Google Fonts про то, как их использовать или используйте их так:

```html
<head>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />

    <style>
      html, body, pre, code, kbd, samp {
          font-family: "font-family который вы хотите использовать";
      }
    </style>
</head>
```

## Только CSS

Для NES.css нужен только CSS и совсем не нужен JavaScript

## Поддержка браузерами

NES.css совместим с новейшими версяями следующих браузеров:
* Chrome
* Firefox
* Safari

Работоспособность не гарантируется:
* IE/Edge

## Лицензия и защита авторских прав

Código y documentación copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Код выпущен под лицензией MIT. Документация выпущена под лицензией Creative Commons.


## Разработка

Мы всегда рады вкладам! Обратите внимание [`CONTRIBUTING.md`][contributing-document] для большего количества деталей о том, как вы можете помочь нам делать NES.css более крутым!





[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[contributing-document]: ./CONTRUBUTING-ru.md
[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg
[google-fonts-guide]: https://developers.google.com/fonts/docs/getting_started
[press-start-2p-font]: https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P

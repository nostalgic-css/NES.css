<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>

  <a href="README.md">English</a> / <a href=".github/README-jp.md">日本語</a> / <a href="README-zh-CN.md">简体中文</a> / <a href=".github/README-pt-BR.md">Português</a>
</div>

NES.css &mdash; это CSS-фреймворк в стиле **NES(8bit)**
<div><sub>На территории бывшего СССР восьмибитные игровые приставки <b>N</b>intendo <b>E</b>ntertaiment <b>S</b>ystem более известны по названию неофициального клона <a href="https://ru.wikipedia.org/wiki/Dendy">Dendy</a></sub></div>

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly][commitizen-badge]][commitizen]

## Установка и использование

### Каскадная таблица стилей

#### Установка через менеджер пакетов

Файл NES.css доступен через npm (предпочтительный способ), Yarn или CDN.

```shell
npm install nes.css
# или
yarn add nes.css
```

Наш `package.json` содержит дополнительную информацию в этих полях:
* `sass` - путь до главного Sass файла
* `style` - путь до неминифицированного CSS

##### Подключение в AltCSS (sass, scss...)

```scss
// style.scss
@import "./node_modules/nes.css/css/nes.css"
```

##### Подключение в JavaScript

```js
// script.js
import "nes.css/css/nes.min.css";
```
Вам также необходимо установить загрузчик css

##### Подключение в HTML
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

Для подключения воспользуйтесь тегом `<link>`:

```html
<!-- Миницифированный файл -->
<link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
<!-- Файл последней версии -->
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<!-- Только основные стили -->
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

### Файл шрифтов

NES.css не предоставляет никаких шрифтов, но мы поддерживаем следующие шрифты, которые рекомендуются к использованию с этой билиотекой

| Язык         | Шрифт                                                              |
| ------------ | ------------------------------------------------------------------ |
| По умолчанию | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| Английский   | [Kongtext](https://www.dafont.com/kongtext.font)                   |
| Японский     | [美咲フォント](http://littlelimit.net/misaki.htm)                   |
| Японский     | [Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)                 |
| Корейский    | [둥근모꼴](http://cactus.tistory.com/193)                           |
| китайский    | [Zpix (最像素)](https://github.com/SolidZORO/zpix-pixel-font)       |

## Использование

NES.css предоставляет только компоненты. Вам необходимо самостоятельно определиться с их расположением (layout).

Для NES.css рекомендуемым является шрифт [Press Start 2P][press-start-2p-font]. Однако, [Press Start 2P][press-start-2p-font] поддерживает только латинские<sup>*)</sup> символы. Когда вы используете NES.css на других языках, используйте другой шрифт. Cледуйте [инструкции][google-fonts-guide] Google Fonts, или сделайте так, например:

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
**\*Примечание** для русской редакции: шрифт Press Start 2P содержит набор символов кириллицы, в чем можно [убедиться здесь](https://fonts.google.com/specimen/Press+Start+2P?preview.text_type=custom&preview.text=%D0%A1%D1%8A%D0%B5%D1%88%D1%8C%20%D0%B6%D0%B5%20%D0%B5%D1%89%D1%91%20%D1%8D%D1%82%D0%B8%D1%85%20%D0%BC%D1%8F%D0%B3%D0%BA%D0%B8%D1%85%20%D1%84%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B8%D1%85%20%D0%B1%D1%83%D0%BB%D0%BE%D0%BA%20%D0%B4%D0%B0%20%D0%B2%D1%8B%D0%BF%D0%B5%D0%B9%20%D1%87%D0%B0%D1%8E!#standard-styles)



## Только CSS

NES.css работает только с таблицами стилей и не имеет зависимостей в JavaScript

## Поддержка браузерами

NES.css совместим с новейшими версяями следующих браузеров:
* Chrome
* Firefox
* Safari

Работоспособность не проверялась:
* IE/Edge

## Лицензия и защита авторских прав

Авторские права на код и документацию принадлежат &copy; 2018 [B.C.Rikko](https://github.com/BcRikko). Код выпущен под лицензией MIT. Документация выпущена под лицензией Creative Commons.

Русское описание доработал в 2021 [etconsilium](https://github.com/etconsilium)


## Разработка

Если вы хотите помочь этому проекту, мы приветствуем любые пожертвования! Пожалуйста, ознакомьтесь с [`CONTRIBUTING.md`][contributing-document], чтобы узнать больше о том, как вы можете помочь сделать NES.css гораздо лучше! 

---

[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[contributing-document]: ./CONTRIBUTING-es.md
[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg
[google-fonts-guide]: https://developers.google.com/fonts/docs/getting_started
[press-start-2p-font]: https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P

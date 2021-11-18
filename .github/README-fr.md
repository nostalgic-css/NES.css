<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>

  <a href="README-jp.md">日本語</a> / <a href="README-zh-CN.md">简体中文</a> / <a href="README-es.md">Español</a> / <a href="README-pt-BR.md">Português</a> / <a href="README-ru.md">Русский</a> / <a href="README-fr.md">Français</a>
</div>

NES.css est un framework CSS **NES-style(8bit-like)**.

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly][commitizen-badge]][commitizen]

## Installation

### Styles

NES.css est disponible via npm (recommandé), Yarn, ou par CDN.

#### Par package manager

```shell
npm install nes.css
# or
yarn add nes.css
```

Notre `package.json` contient quelques metadata additionnelles au travers des clefs suivantes:
* `sass` - Chemin vers le fichier source Sass principal
* `style` - Chemin vers le CSS non minifié

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
Vous devez installer css-loader.

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

#### Par CDN

Importer le fichier CSS via la balise `<link />`:

```html
<!-- minify -->
<link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<!-- core style only -->
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

### Polices

NES.css ne fournit aucune police, nous maintenons cependant la liste des polices que nous recommandons dans le cadre de l'utilisation de notre librairie.

| Language  | Font                                                               |
| --------- | ------------------------------------------------------------------ |
| (Default) | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| English   | [Kongtext](https://www.dafont.com/kongtext.font)                   |
| Japanese  | [美咲フォント](http://littlelimit.net/misaki.htm)                  |
| Japanese  | [Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)                 |
| Korean    | [둥근모꼴](http://cactus.tistory.com/193)                              |
| Chinese   | [Zpix (最像素)](https://github.com/SolidZORO/zpix-pixel-font)      |

## Utilisation

NES.css fournit seulement des composants, vous devez définir votre layout/structure de page

La police recommandée pour l'utilisation de NES.css est [Press Start 2P][press-start-2p-font]. Toutefois, [Press Start 2P][press-start-2p-font] ne prend en charge que les caractères anglosaxons. Lorsque vous utilisez ce framework avec ds langues autre que l'anglais, nous vous recommandons d'utiliser une autre police. Suivez les [instructions][google-fonts-guide] fournis par Google Font pour les inclure, ou utilisez la méthode ci dessous :

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

## CSS seulement

NES.css est constitué seulement de CSS et n'inclut ou demande aucunement du JavaScript.

## Support des différents navigateurs

NES.css est compatible avec la dernière version des navigateurs suivants:
* Chrome
* Firefox
* Safari

Non testé:
* IE/Edge

## Copyright and license

Code and documentation copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Code released under the MIT License. Docs released under Creative Commons.

## Developpement

Si vous êtes intéressé dans la participation à ce projet, nous accueillons les contributions de chacun et êtes les bienvenus !
Lisez le fichier [`CONTRIBUTING.md`][contributing-document] pour plus de détails et d'informations sur la manière de participer et nous aider à rendre NES.css encore plus incroyable !





[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[contributing-document]: /CONTRIBUTING.md
[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg
[google-fonts-guide]: https://developers.google.com/fonts/docs/getting_started
[press-start-2p-font]: https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P

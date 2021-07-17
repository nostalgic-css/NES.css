<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>

  <a href="/README.md">English</a> / <a href="README-jp.md">日本語</a> / <a href="README-zh-CN.md">简体中文</a> / <a href="README-pt-BR.md">Português</a>　/ <a href="README-ru.md">Русский</a>
</div>

NES.css es un **NES-style(8bit-like)** CSS Framework.

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly][commitizen-badge]][commitizen]

## Instalación

### Hojas de estilo

NES.css se encuentra disponible a través de npm (preferente), Yarn o un CDN.

#### Vía gestor de paquetes

```shell
npm install nes.css
# o
yarn add nes.css
```

Nuestro `package.json` contiene metadata adicional bajo las siguientes keys:
* `sass` - Ruta a nuestro archivo fuente principal de Sass
* `style` - Ruta a nuestro CSS no minificado

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
Necesita instalar css-loader.

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

#### Vía CDN

Importa el CSS utiliando un elemento `<link />`:

```html
<!-- minificado -->
<link href="https://unpkg.com/nes.css@2.2.0/css/nes.min.css" rel="stylesheet" />
<!-- último -->
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<!-- solo estilo del núcleo -->
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

### Tipografías

NES.css no contiene ninguna tipografía, pero recomendamos la siguiente lista de tipografías para utilizar junto a la biblioteca.

| Idioma    | Tipografía                                                         |
| --------- | ------------------------------------------------------------------ |
| (Default) | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| Inglés    | [Kongtext](https://www.dafont.com/kongtext.font)                   |
| Japonés   | [美咲フォント](http://littlelimit.net/misaki.htm)                  |
| Japonés   | [Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)                 |
| Coreano   | [둥근모꼴](http://cactus.tistory.com/193)                              |
| Chinoés   | [Zpix (最像素)](https://github.com/SolidZORO/zpix-pixel-font)      |

## Uso

NES.css sólo contiene componentes. Tú tienes que definir tu propio diseño.

La tipografía recomendada para utilizar junto a NES.css es [Press Start 2P][press-start-2p-font]. Sin embargo, [Press Start 2P][press-start-2p-font] sólo soporta caracteres latinos. Si utilizas este framework con otro idioma, por favor utiliza otra tipografía. Sigue las [instrucciones][google-fonts-guide] de Google Fonts acerca de como incluirlas, o simplemente utilizalas como se muestra a continuación:

```html
<head>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />

    <style>
      html, body, pre, code, kbd, samp {
          font-family: "font-family que quieres usar";
      }
    </style>
</head>
```

## Sólo CSS

NES.css sólo requiere de CSS y no depende de JavaScript.

## Soporte de navegadores

NES.css es compatible con las versiones más recientes de los siguientes navegadores.
* Chrome
* Firefox
* Safari

Sin probar
* IE/Edge

## Derechos de autor y licencia

Código y documentación copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Código publicado con Licencia MIT. Documentación publicada con Creative Commons.


## Desarrollo

Si deseas colaborar con el proyecto ¡Recibimos todo tipo de contribuciones! ¡Revisa nuestro [`CONTRIBUTING-es.md`][contributing-document] para más información acerca de cómo puedes ayudar a hacer NES.css algo grandioso!





[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[contributing-document]: ./CONTRIBUTING-es.md
[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg
[google-fonts-guide]: https://developers.google.com/fonts/docs/getting_started
[press-start-2p-font]: https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P

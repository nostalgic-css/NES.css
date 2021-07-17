<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>

  <a href="/README.md">English</a> / <a href="README-jp.md">日本語</a> / <a href="README-zh-CN.md">简体中文</a> / <a href="README-es.md">Español</a>　/ <a href="README-ru.md">Русский</a>
</div>

NES.css é um Framework CSS, no **estilo NES(8bit)**.

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly][commitizen-badge]][commitizen]

## Instalação

### Estilos

NES.css está disponível seja através do npm (preferível) ou Yarn, ou pelo CDN.

#### via gerenciador de pacotes

```shell
npm install nes.css
# ou
yarn add nes.css
```

Nosso `package.json` contém alguns metadata adicionais, sob as seguintes chaves:
* `sass` - caminho para nosso arquivo de código fonte principal Sass
* `style` - caminho para nosso CSS não-minificado

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
Você precisa instalar o css-loader.

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

Importe o CSS através de um elemento `<link />`:

```html
<!-- minify -->
<link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<!-- core style only -->
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

### Fontes

NES.css não fornece nenhuma fonte, mas nós mantemos uma lista de fontes recomendadas por nós para a utilização em conjunto com a biblioteca.

| Idioma   | Fonte                                                              |
| -------- | ------------------------------------------------------------------ |
| (Padrão) | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| Inglês   | [Kongtext](https://www.dafont.com/kongtext.font)                   |
| Japonês  | [美咲フォント](http://littlelimit.net/misaki.htm)                  |
| Japonês  | [Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)                 |
| Coreano  | [둥근모꼴](http://cactus.tistory.com/193)                              |
| Chinês   | [Zpix (最像素)](https://github.com/SolidZORO/zpix-pixel-font)      |

## Utilização

NES.css apenas fornece os componentes. Você precisará definir seu próprio layout.

A fonte recomendada para NES.css é a [Press Start 2P][press-start-2p-font]. No entanto, ela apenas fornece suporte para caracteres ingleses. Quando você estiver usando este framework em qualquer outro idioma com exceção do inglês, por favor use outra fonte. Siga as [instruções][google-fonts-guide] fornecidas pelo Google Fonts sobre como incluí-la, ou simplismente faça a inclusão como consta abaixo:

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

## Exclusivamente CSS

NES.css apenas usa CSS e não depende de qualquer JavaScript.

## Suporte para Browsers

NES.css é compatível com as mais novas versões dos seguintes browsers.
* Chrome
* Firefox
* Safari

Não testado
* IE/Edge

## Copyright e licença

Código e documentação copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Código lançado sobre a Licença MIT. Documentação e novos lançamentos com Creative Commons.

## Desenvolvimento

Se você quiser nos ajudar com o projeto, nós agradecemos contribuições de todos os tipos! Verifique nosso [`CONTRIBUTING-pt-BR.md`][contributing-document] para mais detalhes em como você pode ajudar a tornar o NES.css incrível!





[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[contributing-document]: ./CONTRIBUTING-pt-BR.md
[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg
[google-fonts-guide]: https://developers.google.com/fonts/docs/getting_started
[press-start-2p-font]: https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P

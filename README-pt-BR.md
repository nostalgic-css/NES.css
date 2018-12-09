<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width:100%;" width="600" height="315"></a>

  <a href="README.md">English</a> / <a href="README-jp.md">日本語</a> / <a href="README-es.md">Español</a> / <a href="README-pt-BR.md">Português</a>
</div>

NES.css é um Framework CSS, no **estilo NES(8bit)**.

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Instalação

### CDN

```html
<!-- minify -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.min.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css/css/nes.min.css" rel="stylesheet" />
```

OU

```html
<!-- non-minified -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
```

### npm

TODO: Como utilizar com npm

## Utilização

NES.css apenas fornece os componentes. Você precisará definir seu próprio layout.

A fonte padrão é a [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P) o qual oferece suporte apenas para caracteres ingleses. Quando você estiver usando este framework em qualquer outro idioma com exceção do inglês, por favor use outra fonte. Por favor, siga as [instruções](https://developers.google.com/fonts/docs/getting_started) fornecidas pelo Google Fonts sobre como incluí-la, ou simplismente faça a inclusão como consta abaixo:

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

### Fontes Recomendadas

|Idioma|Fonte|
|----|----|
|(Padrão)|[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)|
|Inglês|[Kongtext](https://www.dafont.com/kongtext.font)|
|Japonês|[美咲フォント](http://www.geocities.jp/littlimi/misaki.htm)|
|Japonês|[Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)|


## Exclusivamente CSS

NES.css apenas usa CSS e não depende de qualquer JavaScript.


## Suporte para Browsers

NES.css é compatível com as mais novas versões dos seguintes browsers.
* Chrome
* Firefox
* Safari

Não testado
* IE/Edge


## Desenvolvimento

### Comandos
```sh
git clone git@github.com:BcRikko/NES.css.git
cd NES.css

npm i

npm run watch
npm run build
```

#### Execute Storybook
```
npm run storybook
```

Lint, formatação e build são executados automaticamente em um hook de pré-commit.

TODO: Mudar a compilação para fazer com CI

### Diretórios
```sh
.
├── index.html: Página de demonstração
├── style.css: Estilização da página de demonstração
├── css: Arquivos de distribuição
├── docs: "Histórias" Storybook
└── scss: Código fonte
    ├── base
    │   ├── reboot.scss: Não modifique-o! (Bootstrap Reboot)
    │   ├── generic.scss: Estilização genérica e reboot.css
    │   └── variables.scss: Variáveis em comum
    ├── elements
    ├── form
    ├── icons: ícones 16x16
    ├── pixel-arts: Para ícones que não são 16x16.
    └── utilities
```



## Copyright e licença

Código e documentação copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Código lançado sobre a Licença MIT. Documentação e novos lançamentos com Creative Commons.





[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg

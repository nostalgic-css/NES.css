<div align="center">
  <a href="https://bcrikko.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width:100%;" width="600" height="315"></a>

  <a href="README.md">English</a> / <a href="README-jp.md">日本語</a> / <a href="README-pt-br.md">Português brasileiro</a>
</div>

NES.css é um framework CSS **estilo-NES (em 8bits)**.


[![Gitter][gitter-badge]][gitter]

## Instalação

### CDN

```html
<!-- minify -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.min.css" rel="stylesheet" />
<!-- mais atual -->
<link href="https://unpkg.com/nes.css/css/nes.min.css" rel="stylesheet" />
```

OU

```html
<!-- non-minified -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.css" rel="stylesheet" />
<!-- mais atual -->
<link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
```

### npm

TODO: npm での使用方法を書く

## Usage

NES.css apenas fornece componentes. Você vai precisar definir seu próprio layout.

A fonte padrão é a Press Start 2P, que apenas suporta caracteres do inglês. Quando estiver usando esse framework com outra língua que não for o inglês, por favor use outra fonte.

### Fontes recomendadas

|Linguagem|Fonte|
|----|----|
|(Padrão)|[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)|
|Inglês|[Kongtext](https://www.dafont.com/kongtext.font)|
|Japonês|[美咲フォント](http://www.geocities.jp/littlimi/misaki.htm)|
|Japonês|[Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)|


## Apenas CSS

NES.css apenas precisa de CSS e não depende de nenhum javaScript.

## Suporte a navegadores

NES.css é compatível com a versão mais nova dos seguintes navegadores:
* Chrome
* Firefox
* Safari

Não-testados:
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

#### Run Storybook
```
npm run storybook
```


Linting, formatação e construção são executados automaticamente no gancho de pré-commit.
TODO: ビルドはCIでするように変更したい

### Diretórios
```sh
.
├── index.html: Página demo
├── style.css: Estilo da página demo
├── css: arquivos de distribuição
├── docs: Storybook stories
└── scss: Fonte
    ├── base
    │   ├── reboot.scss: Não mude! (Bootstrap Reboot)
    │   ├── generic.scss: Estilo geral e reboot.css
    │   └── variables.scss: Variáveis comuns
    ├── elements
    ├── form
    ├── icons: ícones 16x16
    ├── pixel-arts: Para ícones maiores que 16x16.
    └── utilities
```



## Copyright and licença

Código e documentação copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Código divulgado sob a lincença MIT. Documentos lançados sob Creative Commons




[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg


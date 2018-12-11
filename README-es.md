<div align="center">
  <a href="https://bcrikko.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width:100%;" width="600" height="315"></a>

  <a href="README.md">English</a> / <a href="README-jp.md">日本語</a> / <a href="README-es.md">Español</a> / <a href="README-pt-BR.md">Português</a>
</div>

NES.css es un Framework CSS **Estilo-NES (8bit)**


[![Gitter][gitter-badge]][gitter]

## Instalación

### CDN

```html
<!-- minify -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.min.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css/css/nes.min.css" rel="stylesheet" />
```

O

```html
<!-- non-minified -->
<link href="https://unpkg.com/nes.css@0.0.2/css/nes.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
```

### npm

TODO: npm での使用方法を書く

## Uso

NES.css sólo tiene componentes. Tienes que definir tu propio diseño.

La tipogfrafía por fefecto es Press Start 2P, la cual tiene soporte para caracteres latinos (acentos, ñ y ü).

### Tipografías recomendadas

|Idioma|Tipografía|
|----|----|
|(Default)|[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)|
|Latino|[Kongtext](https://www.dafont.com/kongtext.font)|
|Japanese|[美咲フォント](http://www.geocities.jp/littlimi/misaki.htm)|
|Japanese|[Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)|


## CSS Only

NES.css sólo requiere CSS y no depende de JavaScript.


## Soporte de navegadores

NES.css es compatible con las versiones más recientes de los siguientes navegadores.
* Chrome
* Firefox
* Safari

Sin probar
* IE/Edge


## Desarrollo

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

Linting, formatting and building se ejecutan automáticamente en el pre-commit hook.
TODO: ビルドはCIでするように変更したい

### Directorios
```sh
.
├── index.html: Página demo
├── style.css: Estilo de página demo
├── css: Archivos de distribución
├── docs: Storybook stories
└── scss: Código fuente
    ├── base
    │   ├── reboot.scss: ¡No cambiar! (Bootstrap Reboot)
    │   ├── generic.scss: Estilo genérico y reboot.css
    │   └── variables.scss: Variables comunes
    ├── elements
    ├── form
    ├── icons: 16x16 iconos
    ├── pixel-arts: Para iconos que no son 16x16.
    └── utilities
```



## Derechos de autor y licencia

Código y documentación copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Código publicado con Licencia MIT. Documentación publicada con Creative Commons.






[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg

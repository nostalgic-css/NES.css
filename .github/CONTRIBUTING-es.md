# Contribución

Ver este documento en otro idioma:
[English](/CONTRIBUTING.md) / [日本語](CONTRIBUTING-jp.md) / [简体中文](CONTRIBUTING-zh-CN.md) / [Português](CONTRIBUTING-pt-BR.md) / [한국어](CONTRIBUTING-ko.md)

¿Quieres contribuir al proyecto? ¡Genial!

## Cosas que tienes que saber

Este proyecto se apega al Código de Conducta convenido para Contribuyentes. Al participar, se espera que te apegues a este código. Por favor, revisa nuestro [Código de Conducta][code-of-conduct] para más información acerca de reportar comportamiento no apropiado.

**¿Trabajando en tu primer Pull Request?**
[Cómo contribuir a un proyecto de código abierto en GitHub][egghead]

## Cómo

* ¿Configuración del proyecto?
  [¡Te tenemos cubierto!](#project-setup)

* ¿Encontraste un bug?
  [¡Házlono saber!][new-issue]

* ¿Arreglaste un bug?
  [¡Haz un PR!][new-pr]

* ¿Agregando una nueva característica?
  Asegúrate de [abrir un issue][new-issue] describiendo tu característica o mejora, ¡Después abre un [nuevo PR][new-pr] cuando estés listo para recibir retroalimentación!

## Configuración del proyecto

¡Estamos muy felices porque quieras contribuir al proyecto! ❤️ Los siguientes pasos te ayudarán a poner el proyecto en marcha:

1. Haz un Fork y Clon del repositorio.
2. Instala las dependencias necesarias:
    ```sh
    $ npm install
    ```
3. Ejecuta el servidor de desarrollo:  
    To view all available components in an interactive interface, use storybook.
    ```sh
    $ npm run storybook
    ```

### Directorios
```sh
.
├── index.html: Página demo
├── style.css: Estilo de la página demo
├── css: Archivos de distribución
├── docs: Storybook stories
└── scss: Código fuente
    ├── base
    │   ├── reboot.scss: ¡No cambiar! (Bootstrap Reboot)
    │   ├── generic.scss: Estilo general y reboot.css
    │   └── variables.scss: Variables comunes
    ├── elements
    ├── components
    ├── form
    ├── icons: Iconos 16x16
    ├── pixel-arts: Para iconos que no son 16x16.
    └── utilities
```

> Tip: Manten tu rama `master` apuntando al repositorio original y haz pull request de las ramas en tu fork. Para hacer esto, ejecuta:
>
> ```
> git remote add upstream https://github.com/nostalgic-css/NES.css.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> Esto añadirá el repositorio original como un "remoto" llamado "upstream", *fetch* la información de git desde el remoto, y configura tu rama local `master` para utilizar la rama `upstream/master` cuando ejecutes `git pull`. En este punto, tú puedes crear todas tus ramas desde esta rama `master`. Cuando quieras actualizar tu versión de `master`, haz un `git pull`.

## Contribución para miembros de la organización `nostalgic-css`

Debajo hay pasos, los cuales deben ser seguidos por los miembros de `nostalgic-css`. Colaboradores externos sólo tienen que seguir los pasos anteriores.

### Pasos para desarrollo

1. Haz una rama desde `develop` utilizando las siguientes reglas de tomato.
2. Haz el trabajo para resolver el *issue*. Si identificas trabajo que no está relacionado con el *issue*, por favor [crea un nuevo issue][new-issue] y haz el trabajo en una rama independiente.
3. Envía tus PRs a hacer *merge* en `develop`.
    * Todo cambio que pueda afectar el desarrollo actual deberá ser documentado en la descripción.
    * PRs con un *issue* deberán incluir en el título el número del *issue*. E.g. `[#33] Arregla bug`
    * Asígnate el PR.
    * Cuando el PR esté listo mara ser unido, se deberá solicitar una revisión por parte el equipo de `nostalgic-css/NES.css´.
4. Una vez que el PR sea aprobado, será responsabilidad de la persona **encargada** de unir los cambios a la rama.

### Formatos de commit

Utilizamos [Commitizen][commitizen] and [`commitlint`][commitlint] para asegurarnos que nuestros lanzamientos sean automáticos, [unromantic, and unsentimental][sentimental-versioning].





[code-of-conduct]: https://github.com/nostalgic-css/NES.css/blob/master/CODE_OF_CONDUCT.md
[commitizen]: https://github.com/commitizen/cz-cli
[commitlint]: [https://github.com/marionebl/commitlint]
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[new-issue]: https://github.com/nostalgic-css/NES.css/issues/new/choose
[new-pr]: https://github.com/nostalgic-css/NES.css/compare/develop...develop
[semantic-release]: https://github.com/semantic-release/semantic-release
[sentimental-versioning]: http://sentimentalversioning.org/

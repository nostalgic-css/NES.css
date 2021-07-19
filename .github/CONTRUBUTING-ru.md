# Вклад

Посмотри документы на другом языке:
[简体中文](CONTRIBUTING-zh-CN.md) / [日本語](CONTRIBUTING-jp.md) / [Español](CONTRIBUTING-es.md) / [Português](CONTRIBUTING-pt-BR.md)/ [English](../CONTRIBUTING.md) / [한국어](CONTRIBUTING-ko.md)

Хочешь внести свой вклад в проект? Отлично!

## Вещи, которые следует знать

Этот проект соответствует нормам поведения Contributor Covenant. Если вы участвуете, то должны соответствовать этому кодексу. Пожалуйста, обратите внимание на наши [нормы поведения][code-of-conduct] для того, чтобы сообщать о недопустимом поведении.

**Работашь над своим первым Pull Request'ом?**
[How to Contribute to an Open Source Project on GitHub][egghead]

## Как мне

* Запустить проект?
  [Мы тебе поможем!](#запуск-проекта)

* Рассказать о баге?
  [Дай нам знать!][new-issue]

* Исправить баг?
  [Сделай PR!][new-pr]

* Добавить новую фичу?
  Удостоверься, что есть [открытая issue][new-issue]описывающая твою фичу, затем отправь [PR][new-pr] когда будешь готов к обратной связи!

## Запуск проекта

Мы очень рады, что вы хотите внести свой вклад в проект! ❤️ Следующие шаги помогут вам начать работу:

1. Сделай форк и склонируй репозиторий
2. Установи зависимости:
    ```sh
    $ npm install
    ```
3. Запустите сервер:  
    To view all available components in an interactive interface, use storybook.
    ```sh
    $ npm run storybook
    ```

### Директории
```sh
.
├── index.html: Демо страница
├── style.css: Стили демо страницы
├── css: Поставляемые файлы
├── docs: Документация Storybook
└── scss: Исходный код
    ├── base
    │   ├── reboot.scss: Не менять! (Bootstrap Reboot)
    │   ├── generic.scss: Общие стили и reboot.css
    │   └── variables.scss: Общие переменные
    ├── elements
    ├── components
    ├── form
    ├── icons: Иконки 16x16
    ├── pixel-arts: Для иконов, имеющих отличный от 16x16 формат.
    └── utilities
```

> Совет: Следжи за тем, чтобы ваша ветка `master` указывала на оригинальный репозиторий и делайте свои Pull Request'ы из веток своего форка. Для этого запустите:
>
> ```
> git remote add upstream https://github.com/nostalgic-css/NES.css.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> Это добавит оригинальный репозиторий, как "удалённый" под именем "upstream" получит всю нужную информацию из него и сделает так, чтобы ваша ветка `master` использовала `upstream/master` когда вы делаете `git pull`. Теперь вы можете ветвиться от `master` . Когда вы захотите обновить свой `master`, сделайте `git pull`.

## Вклад для членов организации `nostalgic-css`

Ниже приведены шаги, которым должны следовать члены организации `nostalgic-css`. Внешние сотрудники должны следовать только вышеуказанным рекомендациям.

### Шаги для разработки

1. Ветвитесь от `develop` используя следующие правила.
2. Делайте работу, нужную для закрытия issue. Если вы делаете что-то что не удволетворяет открытым issue, [создайте новое][new-issue] и делайте работу в отдельной ветке.
3. Отправте ваш PR в `develop`.
    * Любое изменение должно быть задокументированно.
    * PR, который решает какое-то issue должен включать номер issue в заголовке. Например: `[#33] исправил ошибку`
    * Назначте PR на себя.
    * Когда PR готов к тому, чтобы стать частью основной ветки, вы должны запросить ревью у команды `nostalgic-css/NES.css`.
4. Когда изменения в вашем PR подтверждены, тот, на кого вы **назначили** ваш PR должен залить ваши изменения в основную ветку.

### Форматирование коммитов

Мы используем [Commitizen][commitizen] и [`commitlint`][commitlint] для того, чтобы все коммиты в репозиторий легко читались, и [`semantic-release`][semantic-release] чтобы наши релизы были автоматизированы, [неромантичны и несентиментальны][sentimental-versioning].





[code-of-conduct]: CODE_OF_CONDUCT.md
[commitizen]: https://github.com/commitizen/cz-cli
[commitlint]: [https://github.com/marionebl/commitlint]
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[new-issue]: https://github.com/nostalgic-css/NES.css/issues/new/choose
[new-pr]: https://github.com/nostalgic-css/NES.css/compare/develop...develop
[semantic-release]: https://github.com/semantic-release/semantic-release
[sentimental-versioning]: http://sentimentalversioning.org/

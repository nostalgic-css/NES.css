# Contributing

View this document in another language:
[简体中文](.github/CONTRIBUTING-zh-CN.md) / [日本語](.github/CONTRIBUTING-jp.md) / [Español](.github/CONTRIBUTING-es.md) / [Português](.github/CONTRIBUTING-pt-BR.md) / [Русский](.github/CONTRIBUTING-ru.md)

You want to contribute to the project? Awesome!

## Things to know

This project adheres to the Contributor Covenant code of conduct. By participating, you are expected to uphold this code. Please see our [Code of Conduct][code-of-conduct] for details on reporting unacceptable behavior.

**Working on your first Pull Request?**
[How to Contribute to an Open Source Project on GitHub][egghead]

## How do

* Project setup?
  [We've got you covered!](#project-setup)

* Found a bug?
  [Let us know!][new-issue]

* Patched a bug?
  [Make a PR!][new-pr]

* Adding a new feature?
  Make sure to [open an issue][new-issue] describing your feature, then open a [new PR][new-pr] when you're ready for feedback!

## Project setup

We're really happy you want to contribute to the project! ❤️ The following steps will get you up and running:

1. Fork and clone the repo
2. Install the required dependencies:
    ```sh
    $ npm install
    ```
3. Start up the dev server:
    ```sh
    $ npm run storybook
    ```

### Directories
```sh
.
├── index.html: Demo page
├── style.css: Demo page style
├── css: Distribution files
├── docs: Storybook stories
└── scss: Source
    ├── base
    │   ├── reboot.scss: Don't change! (Bootstrap Reboot)
    │   ├── generic.scss: Generic style and reboot.css
    │   └── variables.scss: Common variables
    ├── elements
    ├── components
    ├── form
    ├── icons: 16x16 icons
    ├── pixel-arts: For icons other than 16x16.
    └── utilities
```

> Tip: Keep your `master` branch pointing at the original repository and make pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/nostalgic-css/NES.css.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," fetch the git information from that remote, and set your local `master` branch to use the `upstream/master` branch whenever you run `git pull`. At that point, you can create all of your branches from this `master` branch. Whenever you want to update your version of `master`, do a regular `git pull`.

## Contributing for members of the `nostalgic-css` organization

Below are steps which must be followed by the members of the `nostalgic-css` organization. External collaborators only have to follow the above guidelines.

### Steps for development

1. Branch from `develop` using the formatting rules below.
2. Do the work required to satisfy the issue. If you identify work that is unrelated to the issue, please [create a new issue][new-issue] and do the work on a separate branch.
3. Submit your PRs to merge back into `develop`.
    * Any change which would affect current development should be documented in the description.
    * PRs with an issue should be include that issue's number in the title. IE: `[#33] Fix bug`
    * Assign the PR to yourself.
    * When the PR is ready to be merged, A review should be requested from the `nostalgic-css/NES.css` team.
4. Once the PR is approved, it is the responsibility of the **assignee** to merge the changes to the branch.

### Commit formatting

We use [Commitizen][commitizen] and [`commitlint`][commitlint] to make sure all of the commits to the project are easy to read, and [`semantic-release`][semantic-release] to ensure that our releases are automated, [unromantic, and unsentimental][sentimental-versioning].





[code-of-conduct]: CODE_OF_CONDUCT.md
[commitizen]: https://github.com/commitizen/cz-cli
[commitlint]: [https://github.com/marionebl/commitlint]
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[new-issue]: https://github.com/nostalgic-css/NES.css/issues/new/choose
[new-pr]: https://github.com/nostalgic-css/NES.css/compare/develop...develop
[semantic-release]: https://github.com/semantic-release/semantic-release
[sentimental-versioning]: http://sentimentalversioning.org/

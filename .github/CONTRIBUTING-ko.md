# Contributing(기여하기)

다른 언어로 보기: 
[English](/CONTRIBUTING.md) / [简体中文](CONTRIBUTING-zh-CN.md) / [日本語](CONTRIBUTING-jp.md) / [Español](CONTRIBUTING-es.md) / [Português](CONTRIBUTING-pt-BR.md) / [Русский](CONTRIBUTING-ru.md)

이 프로젝트에 도움을 주고 싶나요? 대단합니다!

## 알아야 할 것

이 프로젝트는 참여자에게 행동규범을 요구합니다. 이 프로젝트에 기여하기 위해서는 아래 규범을 지켜야 합니다. [행동규범][code-of-conduct]을 확인해서 잘못된 행동을 하지 않도록 해주세요.

**Pull Request가 처음이신가요?**
[깃헙 오픈소스 프로젝트에 기여하는 방법][egghead]

## 어떻게??

* 프로젝트를 설치하나요??
  [우리가 도와줄게요!](#project-setup)

* 버그를 발견했나요??
  [알려주세요!][new-issue]

* 버그를 패치했나요??
  [Pull Request를 해주세요!][new-pr]

* 새로운 내용을 추가하고 싶으신가요??
  먼저 [open an issue][new-issue]를 해서 내용을 설명해주시고, 완성이 되어 피드백을 받을 수 있을 때 [new Pull Request][new-pr]를 해주세요!

## 프로젝트 설치

이 프로젝트에 기여하고 싶으시다니 대단히 기쁘네요! ❤️ 아래 절차를 따라 설치하시면 실행이 될 겁니다:

1. 이 Repository를 Fork & clone 하세요
2. 필요한 dependencies를 설치해주세요:
    ```sh
    $ npm install
    ```
3. dev server를 실행해주세요:  
    interactive interface에 가능한 모든 component를 보려면, storybook을 이용하세요.
    ```sh
    $ npm run storybook
    ```

### 저장경로
```sh
.
├── index.html: Demo page
├── style.css: Demo page style
├── css: Distribution files
├── docs: Storybook stories
└── scss: Source
    ├── base
    │   ├── reboot.scss: 절대 수정하지 마세요! (Bootstrap Reboot)
    │   ├── generic.scss: Generic style and reboot.css
    │   └── variables.scss: Common variables
    ├── elements
    ├── components
    ├── form
    ├── icons: 16x16 icons
    ├── pixel-arts: For icons other than 16x16.
    └── utilities
```

> Tip: 여러분의 `master` branch가 원래 repository를 가리키도록 지정하시고, fork한 곳의 branch에서 pull requests를 만드세요. 아래와 같이 실행하면 됩니다:
>
> ```
> git remote add upstream https://github.com/nostalgic-css/NES.css.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> 위 방법이 원래의 repository를 "upstream"이라 불리는 "remote"로 추가할 것이고, 여러분이 `git pull`을 사용할 때마다 그 "remote"에서 정보를 불러와서, 여러분의 `master` branch를 `upstream/master` branch를 사용할 수 있게끔 세팅할 것입니다. 이 방법을 통해 `master` branch에서 여러분의 branch를 만들 수 있을 겁니다. `master` branch를 업데이트 하고 싶다면, `git pull`을 사용하세요.

## `nostalgic-css` 구성원들을 위한 Contributing

아래의 절차는 `nostalgic-css`의 구성원들을 위한 절차입니다. 도움을 주시는 외부의 여러분들은 위의 Contributing만 해당됩니다.

### 개발 절차

1. 아래 양식 규정을 지키면서 `develop`에서 branch를 만들어주세요.
2. 이슈에 맞는 작업을 진행해주세요. 만약, 이슈와 맞지 않는 작업이었다고 판단된다면 [새로운 issue][new-issue]를 생성하고, 다른 branch에서 진행해주세요.
3. `develop`에 merge를 위해 Pull Request를 제출해주세요.
    * 현재까지의 개발에 영향을 주는 수정사항은 description에 작성되어야 합니다.
    * 이슈를 가졌던 Pull Request는 이슈번호를 꼭 적어주세요. 예시: `[#33] Fix bug`
    * Pull Request를 자신에게 배정하세요
    * Pull Request가 작업이 완료되어 merge할 준비가 되었다면, `nostalgic-css/NES.css` 팀으로부터 리뷰를 받아야 합니다.
4. Pull Request가 승인되면, **작업하신분** 이 branch에 수정사항을 merge해야 합니다.

### 커밋 양식

우리는 프로젝트의 커밋이 최대한 읽기 쉽도록 [Commitizen][commitizen] 와 [`commitlint`][commitlint]를 사용하고, [`semantic-release`][semantic-release]를 통해 출시가 자동화되어서, [감성적이지 않으려고 노력합니다][sentimental-versioning].
=> 개발자 임의대로 출시 버전을 지정하지 않도록 한다는 의미입니다.





[code-of-conduct]: CODE_OF_CONDUCT.md
[commitizen]: https://github.com/commitizen/cz-cli
[commitlint]: [https://github.com/marionebl/commitlint]
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[new-issue]: https://github.com/nostalgic-css/NES.css/issues/new/choose
[new-pr]: https://github.com/nostalgic-css/NES.css/compare/develop...develop
[semantic-release]: https://github.com/semantic-release/semantic-release
[sentimental-versioning]: http://sentimentalversioning.org/

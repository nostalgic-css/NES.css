# 贡献

使用其他语言来阅读本文档:
[English](/CONTRIBUTING.md) / [日本語](CONTRIBUTING-jp.md) / [Español](CONTRIBUTING-es.md) / [Português](CONTRIBUTING-pt-BR.md) / [한국어](CONTRIBUTING-ko.md)

你打算为本项目做贡献？太棒了！

## 需要知道的事情

本项目与参与者行为准则保持一致. 我们期望你在参与本项目的时候也赞同并支持该行为准则. 关于报告不可接受的行为，请参考我们的[行为准则][code-of-conduct].

**在忙于你的第一个PR吗?**
[如何在GitHub上面为开源项目做贡献][egghead]

## 如何

* 搭建项目?
  [我们有详细的说明!](#project-setup)

* 找到了bug?
  [请让我们知道!][new-issue]

* 为bug打补丁?
  [提交PR!][new-pr]

* 添加一个新功能?
  请确保[新开一个issue][new-issue] 来描述你的功能, 当你准备好接受反馈的时候再提交一个[新的PR][new-pr]!

## 搭建项目

你有想为我们的项目做贡献，我们真的很高兴! ❤️ 请参考如下的步骤开始吧:

1. Fork 并且 clone 我们的代码仓库
2. 安装必须的依赖:
    ```sh
    $ npm install
    ```
3. 启动开发服务器:  
    To view all available components in an interactive interface, use storybook.
    ```sh
    $ npm run storybook
    ```

### 目录结构
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

> 小建议: 确保你的 `master` 分支指向原始的代码仓库并且从你fork的分支上创建PR. 请按如下命令进行操作:
>
> ```
> git remote add upstream https://github.com/nostalgic-css/NES.css.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> 这样就会把原始的代码仓库添加为一个名为"upstream"的远程连接,并且从这个远程的仓库连接获取git的信息, 然后当你运行`git pull`命令的时候会指定本地的`master`分支去使用`upstream/master`分支. 在这个时候, 你就能基于这个`master` 分支来创建所有你自己的分支. 当你想更新你的`master`的版本信息的时候, 执行一个常规的`git pull`命令即可.

## `nostalgic-css` 组织如何为项目做贡献

`nostalgic-css` 组织的成员必须遵守如下的步骤. 外部的贡献者只需要遵守以上的准则即可.

### 开发步骤

1. 使用下面的格式化规则从`develop`分支来创建自己的分支。
2. 做满足问题要求的必要的工作。如果发现你的工作跟该问题无关，请[创建一个新的问题][new-issue]并且在另外一个分支在进行你的工作。
3. 提交你的PR然后合并回`develop`分支.
    * 任何影响当前开发的改变都必须在文档里面描述清楚.
    * 跟某一问题相关的PRs必须把那个问题的号码标注在标题里. 比如: `[#33] Fix bug`
    * 分配一个问题给你自己.
    * 当这个问题准备合并的时候, 必须向`nostalgic-css/NES.css` 小组申请审核.
4. 一旦PR被批准了，接下来合并分支的更改就是被分配者的义务了。

### 提交格式化

我们使用[Commitizen][commitizen] 以及 [`commitlint`][commitlint] 来确保所有的项目提交都是易于阅读的, 并且使用 [`semantic-release`][semantic-release] 来确保我们的发布是自动化的, [不浪漫的以及不带情感色彩的][sentimental-versioning].





[code-of-conduct]: CODE_OF_CONDUCT.md
[commitizen]: https://github.com/commitizen/cz-cli
[commitlint]: [https://github.com/marionebl/commitlint]
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[new-issue]: https://github.com/nostalgic-css/NES.css/issues/new/choose
[new-pr]: https://github.com/nostalgic-css/NES.css/compare/develop...develop
[semantic-release]: https://github.com/semantic-release/semantic-release
[sentimental-versioning]: http://sentimentalversioning.org/

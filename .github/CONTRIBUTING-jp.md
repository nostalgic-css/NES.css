# 貢献する

このドキュメントを別の言語で表示する：
[English](/CONTRIBUTING.md) / [简体中文](CONTRIBUTING-zh-CN.md) / [Español](CONTRIBUTING-es.md) / [Português](CONTRIBUTING-pt-BR.md) / [한국어](CONTRIBUTING-ko.md)

このプロジェクトに貢献したいですか?素晴らしい!

## 知るべきこと

このプロジェクトはコントリビューター行動規範に準拠しています。参加する場合、あなたにはこの規範を守ることが求められます。許容できない行為の報告の詳細については[行動規範][code-of-conduct]をご覧ください。

**はじめてのPull Requestに取り組んでいますか?**
[GitHubでオープンソースプロジェクトに貢献する方法][egghead]

## どのように行うか

* プロジェクトのセットアップは?
  [カバーしています!](#project-setup)

* バグを見つけましたか?
  [お知らせください！][new-issue]

* バグを修正しましたか?
  [PRをつくってください！][new-pr]

* 新しい機能を追加しましたか?
  必ず機能を説明する[Issueを立てて][new-issue]ください。フィードバックの準備ができたら、[新しいPR][new-pr]を作成してください!

## プロジェクトの設定

私たちはあなたがプロジェクトに貢献したいと思ってくれることを非常に嬉しく思います！ :heart: 以下の手順を実行すると準備ができます:

1. リポジトリをフォークし、クローンする
2. 必要な依存関係をインストールする:
    ```sh
    $ npm install
    ```
3. 開発用サーバを起動する:  
    インタラクティブインターフェースで使用可能なすべてのコンポーネントを表示するには、storybookを使ってください
    ```sh
    $ npm run storybook
    ```

### ディレクトリ
```sh
.
├── index.html: デモページ
├── style.css: デモページのスタイル
├── css: 配布用ファイル
├── docs: Storybookのストーリー
└── scss: ソースファイル
    ├── base
    │   ├── reboot.scss: 変更しないで! (Bootstrap Reboot)
    │   ├── generic.scss: 一般的なスタイルとreboot.cssの上書き
    │   └── variables.scss: 共通変数
    ├── elements
    ├── components
    ├── form
    ├── icons: 16x16のアイコン
    ├── pixel-arts: 16x16以外のアイコン
    └── utilities
```

> Tip: あなたの`master`ブランチは元のリポジトリを指すようにし、フォークしたブランチからPull Requestを作成します。これを行うには:
>
> ```
> git remote add upstream https://github.com/nostalgic-css/NES.css.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> これにより、元のリポジトリが"upstream"という名前の"remote"として追加されます。そのリモートからgitの情報を取得し、`git pull`を実行する度に`upstream/master`ブランチを使用するように、`master`ブランチを設定します。この時点で、この`master`ブランチからすべてのブランチを作成することができます。あなたの`master`のバージョンを更新したいときは、通常の`git pull`を行います。

## `nostalgic-css` Organizationのメンバーに貢献する

以下は、`nostalgic-css` Organizationのメンバーが従わなければならない手順です。外部のコラボレーターは、上記のガイドラインに従うだけです。

### 開発手順

1. 以下の書式ルールで`develop`からブランチを切る。
2. Issue対応に必要な作業。Issueに関係のない問題がある場合は、[新しいIssueを立てて][new-issue]別ブランチで作業してください。
3. `develop`にマージするようPRを作成する
    * 現在の開発に影響を与えるような変更は、その説明を文書化する必要があります。
    * PRのタイトルにIssue番号を含める必要があります。 IE: `[#33] Fix bug`
    * 自分自身にPRをアサインします。
    * PRがマージできるようになったら、レビューは`nostalgic-css/NES.css`チームから依頼する必要があります。
4. PRが承認されたら、変更をマージするのは**assignee**の仕事です。

### コミットフォーマット

プロジェクトへのすべてのコミットは[Commitizen][commitizen]と[`commitlint`][commitlint]を使って読みやすいようにします。さらにリリースが自動化され、[ロマンティックでなく、センチメンタルでもない][sentimental-versioning]ことを保証するために[`semantic-release`]を使用します。





[code-of-conduct]: https://github.com/nostalgic-css/NES.css/blob/master/CODE_OF_CONDUCT.md
[commitizen]: https://github.com/commitizen/cz-cli
[commitlint]: [https://github.com/marionebl/commitlint]
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[new-issue]: https://github.com/nostalgic-css/NES.css/issues/new/choose
[new-pr]: https://github.com/nostalgic-css/NES.css/compare/develop...develop
[semantic-release]: https://github.com/semantic-release/semantic-release
[sentimental-versioning]: http://sentimentalversioning.org/

<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>

  <a href="/README.md">English</a>  / <a href="README-jp.md">日本語</a> / <a href="README-zh-CN.md">简体中文</a> / <a href="README-es.md">Español</a> / <a href="README-pt-BR.md">Português</a> / <a href="README-ru.md">Русский</a> / <a href=".github/README-fr.md">Français</a> 
</div>

NES.css은 **패미컴스타일(8bit 스타일)** CSS 프레임워크입니다.

[![Gitter][gitter-badge]][gitter] [![Commitizen friendly][commitizen-badge]][commitizen]

## 설치

### 스타일

NES.css은 npm(권장), 혹은 Yarn, CDN에서 이용할 수 있습니다.

#### 패키지 매니저 사용

```shell
npm install nes.css
# or
yarn add nes.css
```

우리의 `package.json`에는 다음과 같은 키로 메타데이터가 포함되어 있습니다.
* `sass` - 메인 Sass 소스 파일 경로
* `style` - 비압축 CSS 경로

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
css-loader가 필요합니다.

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

#### CDN 사용

`<link />`를 사용해 CSS를 넣습니다:

```html
<!-- 압축버전 -->
<link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
<!-- 최신버전 -->
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<!-- 코어 스타일 버전 -->
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

### 폰트

NES.css은 어떠한 폰트도 제공하지 않습니다만, 라이브러리와 같이 사용하면 좋은 폰트 목록은 가지고 있습니다.

| 언어         | 폰트                                                           |
| ------------ | ------------------------------------------------------------------ |
| (기본값) | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| 영어         | [Kongtext](https://www.dafont.com/kongtext.font)                   |
| 일본어       | [美咲フォント](http://littlelimit.net/misaki.htm)                  |
| 일본어       | [Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)                 |
| 한국어       | [둥근모꼴](http://cactus.tistory.com/193)                              |
| 중국어       | [Zpix (最像素)](https://github.com/SolidZORO/zpix-pixel-font)      |

## 사용방법

NES.css은 컴포넌트 스타일로만 제공됩니다. 레이아웃은 여러분의 기호에 맞게 정해보세요.

NES.css가 추천하는 폰트는 [Press Start 2P][press-start-2p-font]입니다. 다만 [Press Start 2P][press-start-2p-font]은 영어만 지원됩니다. 영어 이외의 언어에서 이 프레임워크를 사용하려면 다른 폰트를 사용해야합니다. 이를 넣는 방법은 Google Fonts의 [가이드][google-fonts-guide]를 따르거나, 다음과 같이 하시길 바랍니다.

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

## CSS Only

NES.css은 CSS으로만 구성되어 있어, JavaScript에 의존하지 않습니다.

## 브라우저 지원

NES.css은 다음 브라우저들의 최신 버전과 호환성이 있습니다.
* Chrome
* Firefox
* Safari

테스트하지 않은 브라우저
* IE/Edge

## Copyright and license

코드와 문서 copyright 2018 [B.C.Rikko](https://github.com/BcRikko).
코드는 MIT 라이센스로 공개되어 있습니다. 문서는 Creative Commons에 따라 공개되어 있습니다.

## 개발기여

이 프로젝트에 기여하고 싶으시다면, 우리 모든 기여자는 환영합니다! NES.css를 더 멋지게 할 방법이 궁금하시면 [`CONTRIBUTING.md`][contributing-document]를 확인해주시길 바랍니다.





[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[contributing-document]: ./CONTRIBUTING-ko.md
[gitter]: https://gitter.im/nostalgic-css/Lobby
[gitter-badge]: https://img.shields.io/gitter/room/nostalgic-css/Lobby.svg
[google-fonts-guide]: https://developers.google.com/fonts/docs/getting_started
[press-start-2p-font]: https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P

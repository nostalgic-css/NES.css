# Contribuindo

Veja este documento em outro idioma:
[English](/CONTRIBUTING.md) / [日本語](CONTRIBUTING-jp.md) / [简体中文](CONTRIBUTING-zh-CN.md) / [Español](CONTRIBUTING-es.md) / [한국어](CONTRIBUTING-ko.md)

Quer contribuir para este projeto? Legal!

## Coisas para saber

Este projeto adere o código de conduta "Contributor Covenant". Ao participar do projeto, é esperado que você apoie este código. Por favor, verifique o [Código de conduta][code-of-conduct] para mais detalhes sobre como reportar comportamentos inaceitáveis.

**Trabalhando em sua primeira Pull Request?**
[Como Realizar uma Contribuição em um Projeto Open Source no GitHub][egghead]

## Como

* Configurar o projeto?
  [Nós te ajudamos com isto!](#project-setup)

* Encontrou um bug?
  [Nos avise!][new-issue]

* Corrigiu um bug?
  [Faça uma PR!][new-pr]

* Adicionando uma nova funcionalidade?
  Certifique-se de [abrir uma issue][new-issue] descrevendo sua funcionalidade, em seguida faça uma [nova PR][new-pr] quando estiver pronto para o feedback!

## Configurar o projeto

Nós estamos muito felizes de você querer contribuir para o projeto! Os próximos passos irão deixá-lo pronto em pouco tempo:

1. Fork e clone o repositório
2. Instale as dependências necessárias:
    ```sh
    $ npm install
    ```
3. Inicie o servidor de desenvolvimento:  
    To view all available components in an interactive interface, use storybook.
    ```sh
    $ npm run storybook
    ```

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
    ├── components
    ├── form
    ├── icons: 16x16 icons
    ├── pixel-arts: Para ícones que não são 16x16.
    └── utilities
```

> Dica: Deixa sua branch `master` apontando para o repositório de origem, e faça suas pull requests de branchs do seu fork. Para realizar isto, execute:
>
> ```
> git remote add upstream https://github.com/nostalgic-css/NES.css.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> Isto irá adicionar o repositório de origem como um repositório "remoto" chamado de "upstream", então busque as informações do git deste repositório remoto, em seguida defina que a sua branch `master` local irá usar a branch `master` chamada de "upstream" toda vez que você executar o comando `git pull`. Por fim, você poderá executar todas as suas branchs para pull requests com base nesta branch `master`. Toda vez que você desejar atualizar sua versão da `master`, basta realizar um `git pull`.

## Informações de contribuição para os membros da organização `nostalgic-css`

Abaixo estão os passos que devem ser seguidos pelos membros da organização `nostalgic-css`. Colaboradores externos deverão seguir apenas as diretrizes acima.

### Passos para o desenvolvimento

1. Crie uma branch a partir da `develop`, utilizando as regras de formação abaixo.
2. Faça o trabalho requerido para satisfazer toda a issue. Se você identificar algum trabalho não relacionado a esta issue, por favor [crie uma nova issue][new-issue] e faça este trabalho em uma branch separada.
3. Envie suas PRs para serem realizadas o merge de volta a `develop`.
    * Qualquer mudança que possa afetar o desenvolvimento atual, deve ser documentada na descrição.
    * PRs que possuam issue deverão ter seus números inclusos nos títulos. IE: `[#33] Fix bug`
    * Atribua (assign) a PR para você mesmo.
    * Quando a PR estiver pronta para a realização do merge, Uma revisão deve ser solicitada à equipe `nostalgic-css/NES.css`.
4. Uma vez que a PR for aprovada, é de responsabilidade do **atribuído** realizar o merge das mudanças para a branch.

### Formatação de commit

Nós usamos [Commitizen][commitizen] e [`commitlint`][commitlint] a fim de assegurar que todos os commits feitos para o projeto sejam fáceis de ler, e [`semantic-release`][semantic-release] para assegurar que nossas releases sejam automatizadas, [sem romance, e sem sentimentos][sentimental-versioning].





[code-of-conduct]: https://github.com/nostalgic-css/NES.css/blob/master/CODE_OF_CONDUCT-pt-BR.md
[commitizen]: https://github.com/commitizen/cz-cli
[commitlint]: [https://github.com/marionebl/commitlint]
[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[new-issue]: https://github.com/nostalgic-css/NES.css/issues/new/choose
[new-pr]: https://github.com/nostalgic-css/NES.css/compare/develop...develop
[semantic-release]: https://github.com/semantic-release/semantic-release
[sentimental-versioning]: http://sentimentalversioning.org/

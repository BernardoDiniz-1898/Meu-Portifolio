# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não publicado]

## [1.0.2] - 2026-10-14

### Alterado

- Cabeçalho do bloco de código do hero volta a exibir o nome de arquivo
  (`perfil.js`), preservando a leitura do bloco como artefato de código.
  Reverte a mudança da versão 1.0.1.

## [1.0.1] - 2026-10-14

### Alterado

- Bloco de código do hero passa a exibir o nome completo
  ("Bernardo Diniz Nascimento") no cabeçalho, no lugar de "perfil.js".

## [1.0.0] - 2026-10-14

Primeira versão versionada do portfólio.

### Adicionado

- Redesenho completo do site na direção **"Minério"** (ficha técnica
  industrial): preto quente + vermelho-óxido, tipografia Archivo (grotesca) e
  Fira Code (dados), com o horizonte de Minas como assinatura visual.
- Sistema de design em tokens (`--ground`, `--surface`, `--ink`, `--muted`,
  `--signal`, `--rule`) documentado em `DESIGN.md`.
- Tema claro/escuro sem JavaScript, via `:checked` + `:has()`, com sol e lua
  desenhados apenas em CSS.
- Barra de progresso de leitura no topo, via `animation-timeline: scroll()`.
- Animação de entrada do hero com `@keyframes` e revelação de seção.
- Profundidade de fundo (textura de régua fixa) na seção Experiência.
- Habilidades com `role="progressbar"` e nível por variável `--level`.
- Formulário de contato que compõe um `mailto:` (sem backend).
- Higiene de repositório: `.gitignore`, `.editorconfig` e templates de Pull
  Request e de issues em `.github/`.

### Alterado

- Reorganização do projeto em `assets/css/style.css` e `assets/js/main.js`
  (JavaScript extraído do HTML).
- README e documentação alinhados ao novo código e à nova estrutura.
- Adoção do fluxo de trabalho em Git Flow (`main`, `develop`, `feature/*`,
  `release/*` e `hotfix/*`).

### Corrigido

- Acessibilidade: `<main>` com skip link, menu com `aria-expanded`, semântica de
  `progressbar`, suporte a `prefers-reduced-motion` e foco visível.
- Contraste do texto secundário elevado para AA (de ~4,18:1 para ~7,2:1).

[Não publicado]: https://github.com/BernardoDiniz-1898/Meu-Portifolio/compare/v1.0.2...HEAD
[1.0.2]: https://github.com/BernardoDiniz-1898/Meu-Portifolio/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/BernardoDiniz-1898/Meu-Portifolio/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/BernardoDiniz-1898/Meu-Portifolio/releases/tag/v1.0.0

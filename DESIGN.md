---
version: alpha
name: Bernardo Diniz — Portfólio
description: Portfólio de página única de um profissional de TI em Belo Horizonte; deve deixar uma sensação de ficha técnica honesta, industrial e enraizada em Minas Gerais.
colors:
  ground: "#0c0a09"   # preto quente, "poço de mina" — a superfície dominante
  surface: "#171310"  # superfície de seção/cartão, um passo acima do fundo
  ink: "#f2ede7"      # texto principal, ~17:1 sobre o fundo
  muted: "#a39b92"    # texto secundário, ~7,2:1 sobre o fundo (AA+)
  signal: "#dc2626"   # vermelho-óxido: ação e estado "atual" (um só trabalho), igual nos dois temas
  rule: "#2a2420"     # réguas e hairlines estruturais
  # Tema claro (:root:has(#theme-switch:checked))
  light-ground: "#f2ede7"        # papel calcário, o "dia" da mina
  light-surface: "#e9e1d7"
  light-ink: "#1b1613"           # grafite quente
  light-muted: "#5c534b"         # ~6,5:1 sobre o papel (AA+)
  light-signal-strong: "#b91c1c" # vermelho legível como texto sobre o claro
  light-rule: "#d9cfc3"
typography:
  display:
    fontFamily: Archivo
    fontSize: clamp(2.5rem, 6vw, 4.25rem)
    fontWeight: 900
    letterSpacing: -0.02em
  body:
    fontFamily: Archivo
    fontSize: 1rem
    lineHeight: 1.7
  mono:
    fontFamily: Fira Code
    fontSize: 0.8125rem
rounded:
  sm: 3px
  md: 4px
spacing:
  sm: 16px
  md: 34px
  lg: 110px
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: 13px 24px
  theme-toggle:
    # sol/lua desenhados em CSS; alterna via :checked + :has(), por um checkbox nativo
    rounded: 999px
  progress-bar:
    backgroundColor: "{colors.signal}"
    height: 3px
  contact-field:
    backgroundColor: "{colors.ground}"
    borderColor: "{colors.rule}"
    rounded: "{rounded.sm}"
  projects-group-title:
    # rótulo de grupo dos projetos (Principais/Outros); Fira Code com régua de 1px
    fontFamily: Fira Code
    fontSize: 0.8125rem
    color: "{colors.signal}"
  cv-button:
    # atalho para curriculo.html; reaproveita o .btn-secondary
    rounded: "{rounded.sm}"
---

## Overview

Portfólio de página única de Bernardo Diniz, assistente de TI em Belo Horizonte e
técnico em Análise e Desenvolvimento de Sistemas pelo SENAI. A página é um
currículo digital lido por recrutadores, com o trabalho de mostrar trajetória,
habilidades, projetos e contato com leitura rápida.

A direção, **"Minério"**, vem do próprio lugar e do ofício: Minas Gerais é o
estado das minas de ferro, terra vermelha e corte de mina; Belo Horizonte é a
"linha do horizonte"; e a carreira foi construída de baixo para cima (Jovem
Aprendiz → Estagiário → Assistente de TI). O vermelho já presente no projeto foi
mantido e reinterpretado como vermelho-óxido de ferro. O visual é o de uma
**ficha técnica industrial**: alinhamento à esquerda, réguas de 1px, poucos
raios, rótulos legíveis e densidade como honestidade.

## Colors

- **Ground (#0c0a09):** preto *quente*, o interior de uma mina apagada — substitui o preto frio padrão (`#0a0a0a`).
- **Surface (#171310):** separa seções (Experiência, Contato) e o painel de código sem usar borda branca translúcida.
- **Ink (#f2ede7):** off-white calcário, contraste ~17:1 sobre o fundo.
- **Muted (#a39b92):** cinza-cinza quente, ~7,2:1 sobre o fundo — corrige o texto secundário que antes ficava em 4,18:1 (abaixo do AA).
- **Signal (#dc2626):** vermelho-óxido, mantido como a identidade escolhida pelo autor. Um único trabalho: **ação** (botão primário, links) e **"atual"** (marcador do emprego vigente, quadrado junto aos títulos).

## Temas

O site tem **um** sistema com dois temas, não duas folhas de estilo. O tema escuro
é o padrão (a marca preto-e-vermelho do autor). O tema claro é o "dia": mesma
régua, mesmos componentes, com o fundo virando papel calcário e a tinta virando
grafite. Ambos partilham o sinal `#dc2626`; só o vermelho de **texto** muda
(`#ef4444` no escuro, `#b91c1c` no claro) para manter o contraste AA sobre cada
fundo. A troca é 100% CSS — `:root:has(#theme-switch:checked)` sobrescreve os
tokens —, feita por um `<input type="checkbox">` nativo (focável, com rótulo), o
que dá suporte a teclado sem JavaScript. Como não há persistência, o tema volta
ao escuro a cada recarga.

## Typography

**Archivo** (grotesca de linhagem industrial/sinalização) cobre display e corpo
em uma escala real: nome 900, títulos de seção 800, corpo 400. **Fira Code**
aparece só como dado que se lê: código, datas da timeline, códigos de projeto e
tags de tecnologia. Nada abaixo de 13px. Substitui o Inter — que era a fonte
padrão de toda ferramenta de IA — sem cair no cluster Space Grotesk/Instrument
Serif. O nome no hero é sólido (sem gradiente) e dominante; a hierarquia carrega
o peso, não uma palavra colorida.

## Layout

Grade de ficha técnica, tudo alinhado à esquerda: um container de 1080px para o
conteúdo, seções separadas por réguas de 1px e um cabeçalho de seção com um
pequeno quadrado vermelho (a marca). O hero é assimétrico (texto + painel de
código). A ideia estrutural: **os projetos são a espinha** — cada um é uma linha
de ficha (rail com o código do projeto + corpo), não um card arredondado. Os
projetos se organizam em dois grupos — **Principais** (fichas mais altas) e
**Outros** (fichas mais compactas) —, o que dá hierarquia à leitura. O hero
termina numa **curva de horizonte/estrato** em SVG (a assinatura), reaproveitada
como linguagem de régua. Números só onde há sequência real (a timeline).

## Elevation & Depth

Superfícies são planas, separadas por réguas. Sombra só existe onde algo
realmente flutua — o painel de código do hero. Hover muda a cor de fundo ou a
borda para o sinal, nunca uma sombra colorida. A única profundidade de fundo é
uma textura de réguas fixa (`background-attachment: fixed`) na seção Experiência,
desativada no mobile.

## Shapes

Raios mínimos: 3–4px em botões e no painel de código; 2px em tags e chips. Cards
não têm raio grande nem sombra. Marcadores (marca no menu, quadrado nos títulos,
marcador da timeline) são quadrados, sem raio.

## Components

Navbar fixa (blur apenas sobre conteúdo em rolagem), marca quadrada vermelha,
links com sublinhado de sinal em hover/foco, menu móvel com `aria-expanded` e um
alternador de tema com sol/lua desenhados em CSS. Barra de progresso de leitura
no topo (linha de sinal dirigida por `animation-timeline: scroll()`). Botões
`.btn-primary` (fundo de sinal) e `.btn-secondary` (borda de régua). Listas de
ficha (`.spec-item`, `.skill`, `.project`, `.contact-item`) com réguas de 1px.
Formulário de contato (`.contact-form`, `.field`) com estados nativos
(`:focus-visible`, `:valid`, `:user-invalid`) que compõe um `mailto:`. Os
projetos usam dois grupos (`.projects-group-title`, `.projects-list-featured`,
`.projects-list-others`) para marcar hierarquia. O atalho de currículo no hero
leva a `curriculo.html`, que reaproveita os mesmos tokens em uma folha de
impressão. A imagem de compartilhamento (`assets/img/og-preview.png`) segue a
mesma paleta. Todas as páginas futuras reutilizam estes componentes e tokens.

## Do's and Don'ts

- Do reuse the nav, footer, and tokens above on every page, unchanged.
- Do add a token here before a page uses it. Never invent a one-off inside a page.
- Don't change: a identidade preto-e-vermelho e o vermelho `#dc2626` (escolha do autor).
- Don't use: gradiente no texto (`background-clip:text`), Inter, cards de ícone idênticos, emoji como ícones, montanha de sombras coloridas, o mesmo fade-up em cada bloco, `01/02/03` decorativos, rótulos mono minúsculos (<13px).

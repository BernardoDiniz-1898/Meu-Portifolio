# Meu Portfólio | Bernardo Diniz

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Publicado-222222?logo=github&logoColor=white)

Portfólio pessoal de Bernardo Diniz, desenvolvido como uma landing page para
apresentar perfil profissional, formação, experiências, habilidades técnicas e
canais de contato.

## Demonstração

- **Site publicado:**
  [bernardodiniz-1898.github.io/Meu-Portifolio](https://bernardodiniz-1898.github.io/Meu-Portifolio/)
- **Código-fonte:**
  [github.com/BernardoDiniz-1898/Meu-Portifolio](https://github.com/BernardoDiniz-1898/Meu-Portifolio)

## Objetivo

O projeto funciona como um currículo digital de página única. O conteúdo foi
organizado para permitir que recrutadores, empresas e parceiros conheçam a
trajetória profissional do autor e encontrem rapidamente seus meios de contato.

## Funcionalidades

- Navegação por âncoras entre as seções da página.
- Navbar fixa com mudança visual durante a rolagem.
- Menu lateral adaptado para dispositivos móveis.
- Hero com apresentação profissional e chamadas para ação.
- Seção de perfil, formação e objetivos.
- Timeline de experiências profissionais.
- Habilidades em lista técnica com medidores animados e `role="progressbar"`.
- Projetos apresentados como fichas técnicas, com tecnologias e links.
- Tema claro/escuro alternável sem JavaScript (`:checked` + `:has()`), com sol e lua desenhados apenas em CSS.
- Barra de progresso de leitura no topo, dirigida pela rolagem, sem JavaScript.
- Animação de entrada do hero com `@keyframes` e revelação de seção com `IntersectionObserver` (conteúdo visível por padrão quando o JavaScript não está disponível).
- Formulário de contato com estados nativos (`:focus`, `:valid`, `:user-invalid`) que abre o e-mail já preenchido, sem servidor.
- Link para pular ao conteúdo e elemento `<main>` para navegação por teclado.
- Links diretos para e-mail, WhatsApp, LinkedIn e GitHub.
- Layout responsivo para desktop, tablet e celular.
- Rolagem suave com compensação para a navbar fixa.
- Foco visível para navegação por teclado.

## Seções

| Seção | Conteúdo |
|---|---|
| Início | Apresentação, título profissional e chamadas para ação |
| Sobre | Perfil, formação, localização e objetivos |
| Experiência | Histórico profissional em formato de timeline |
| Habilidades | Tecnologias e conhecimentos declarados pelo autor |
| Projetos | Projetos em fichas, com tecnologias e links |
| Contato | E-mail, WhatsApp, LinkedIn, GitHub e formulário de mensagem |

## Tecnologias utilizadas

### Implementação

- HTML5
- CSS3
- JavaScript Vanilla
- CSS Grid e Flexbox
- CSS Custom Properties
- `:has()`, `:checked`, `:user-invalid` e arte em CSS puro
- Animações: `@keyframes`, `transition`, `IntersectionObserver` e `animation-timeline: scroll()`
- Media queries
- GitHub Pages

### Recursos externos

- [Google Fonts](https://fonts.google.com/) para as fontes Archivo e Fira Code.
- [Font Awesome](https://fontawesome.com/) para os ícones da interface.
- [cdnjs](https://cdnjs.com/) para entrega do Font Awesome.

> [!NOTE]
> Python, PHP, Laravel, Linux e Java aparecem como habilidades no conteúdo do
> portfólio, mas não são tecnologias utilizadas na implementação deste site.

## Arquitetura

O projeto não possui backend, banco de dados ou etapa de compilação. Todo o
conteúdo é servido diretamente pelo GitHub Pages.

```text
Navegador
   |
   |-- index.html
   |      |-- estrutura e conteúdo
   |      `-- metadados e dependências externas
   |
   |-- assets/css/style.css
   |      |-- tokens visuais
   |      |-- componentes e animações
   |      `-- responsividade
   |
   `-- assets/js/main.js
          |-- menu e navbar
          `-- revelação de seção e formulário
```

## Estrutura

```text
Meu-Portifolio/
├── .github/                 # Templates de Pull Request e de issues
├── assets/
│   ├── css/
│   │   └── style.css        # Tokens, tema, layout, componentes e responsividade
│   └── js/
│       └── main.js          # Menu, navbar, revelação de seção e formulário
├── .editorconfig            # Padronização de indentação e encoding
├── .gitignore
├── CHANGELOG.md             # Histórico de versões
├── DESIGN.md                # Contrato do sistema visual (tokens e componentes)
├── index.html               # Conteúdo e estrutura
└── README.md                # Documentação do projeto
```

## Como executar

Não é necessário instalar dependências.

Clone o repositório:

```bash
git clone https://github.com/BernardoDiniz-1898/Meu-Portifolio.git
cd Meu-Portifolio
```

### Abrir diretamente

Abra `index.html` em um navegador moderno.

### Servidor HTTP local

Usar um servidor local reproduz melhor o comportamento da publicação.

Com Python:

```bash
python -m http.server 8000
```

No Windows, também é possível usar:

```bash
py -m http.server 8000
```

Acesse `http://localhost:8000`.

## Responsividade

O layout utiliza dois breakpoints principais:

| Largura | Comportamento |
|---|---|
| Acima de 960 px | Hero em duas colunas (texto + painel) e habilidades em três colunas |
| Até 960 px | Hero e grades em coluna única, parallax de fundo desativado |
| Até 640 px | Menu lateral e formulário em coluna única |

No mobile, o bloco decorativo de código é ocultado para priorizar o conteúdo e
reduzir a densidade visual.

## Interatividade

### Menu móvel

O botão hambúrguer alterna a classe `active` na navegação e atualiza
`aria-expanded`. Selecionar um link ou pressionar `Escape` fecha o painel.

### Tema claro/escuro

Um `<input type="checkbox">` oculto, mas focável, alterna o tema sem JavaScript:
o seletor `:root:has(#theme-switch:checked)` troca os tokens de cor. O ícone é
um sol e uma lua desenhados só com CSS.

### Animações de entrada

O hero entra com uma animação `@keyframes` orquestrada. As seções seguintes são
observadas com `IntersectionObserver`; ao entrar na viewport recebem a classe
`in-view` e executam a transição. Sem JavaScript, o conteúdo aparece por padrão.

### Barras de habilidades

Cada habilidade define `--level` em linha. A barra usa
`width: calc(var(--level) * 1%)` e é animada quando a seção entra na área
visível.

### Barra de progresso

Uma linha no topo usa `animation-timeline: scroll()` para acompanhar a leitura.
Navegadores sem esse recurso simplesmente não exibem a barra.

### Formulário de contato

O envio é interceptado no cliente: o formulário valida os campos nativos e abre
o cliente de e-mail com assunto e corpo já preenchidos. Nada é enviado a um
servidor.

### Navbar

Após 50 pixels de rolagem, a navbar recebe fundo semitransparente, blur e borda
inferior.

## Publicação

O site está hospedado no GitHub Pages a partir da branch `main`:

```text
https://bernardodiniz-1898.github.io/Meu-Portifolio/
```

Não existe workflow próprio no repositório. A publicação utiliza o processo de
deploy configurado pelo GitHub Pages.

## Dependências de rede

O HTML e o CSS local continuam disponíveis sem internet, mas a apresentação
completa depende de serviços externos:

- Google Fonts para as fontes personalizadas.
- cdnjs para o Font Awesome.

Se esses serviços estiverem indisponíveis, o navegador usará fontes de sistema
e os ícones poderão não aparecer.

## Acessibilidade

O projeto possui idioma `pt-BR`, hierarquia de títulos, links semânticos e
estados de foco visíveis (`:focus-visible`). Também já estão implementados:

- Link para pular ao conteúdo e elemento `<main>`.
- Menu anunciado com `aria-expanded`/`aria-controls` e fechável com `Escape`.
- Alternador de tema como controle nativo (checkbox) com rótulo acessível e foco visível.
- Formulário com rótulos `<label>` associados e estados nativos de validação.
- Semântica de progresso (`role="progressbar"`) nas habilidades.
- Suporte a `prefers-reduced-motion`.
- Conteúdo visível mesmo sem JavaScript.

## Limitações conhecidas

- O formulário de contato não possui backend: ele abre o cliente de e-mail do usuário com a mensagem preenchida.
- Informações como idade, cargo atual e ano do rodapé exigem atualização manual.
- Ícones e fontes dependem de CDNs externos.
- Não há testes automatizados, linter ou validação de links configurados.
- Metadados de compartilhamento social ainda não foram adicionados.

## Próximos passos

- Adicionar currículo para download.
- Adicionar Open Graph, URL canônica e dados estruturados.
- Criar verificações automatizadas de HTML, CSS, acessibilidade e links.
- Adicionar screenshots da versão desktop e mobile ao repositório.

## Autor

Desenvolvido por [Bernardo Diniz](https://github.com/BernardoDiniz-1898).

## Licença

Este repositório ainda não possui uma licença definida. Consulte o autor antes
de reutilizar ou redistribuir o código.

# Portal de notícias com SASS

CSS convertido para SASS, organizado em módulos (`@use`) e com variáveis.

```
sass/
  _variables.scss   cores, temas das seções (mapa), tipografia, espaçamentos, breakpoints
  _mixins.scss      breakpoints, tema da seção, sombra, foco
  _base.scss        reset e tipografia
  _header.scss      cabeçalho fixo e menu
  _secoes.scss      seções (cores geradas com @each a partir do mapa de temas)
  _cartao.scss      cards de notícia
  _rodape.scss      rodapé
  main.scss         reúne os módulos com @use
```

```bash
npm install
npm run sass          # compila sass/main.scss em css/main.css
npm run sass:watch    # recompila ao salvar
```

# Exercício LESS

Estilo do projeto do Material de apoio convertido para LESS.

```
less/
  variaveis.less   variáveis, mapas (@cores, @espaco) e escapings das media queries
  mixins.less      sombra e botão
  base.less        reset, container e títulos
  header.less      cabeçalho e menu
  produtos.less    grid e cards de produtos
  rodape.less      rodapé com ícones sociais
  main.less        importa todos os arquivos
```

Recursos usados:

- **Variáveis:** `@fonte`, `@raio`, `@transicao`, `@largura-container`
- **Divisão dos arquivos:** `main.less` reúne os módulos com `@import`
- **Escapings:** `@celular: ~"(max-width: 600px)"` e `~"calc(100% - 8px)"`
- **Mapas:** `@cores[primaria]`, `@espaco[m]`

```bash
npm install
npm run less   # compila less/main.less em css/styles.css
```

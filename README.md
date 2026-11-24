# Boas práticas de CSS: BEM

Classes do material de apoio reescritas com a metodologia BEM e estilos em SASS.

| Antes | Depois (BEM) | Tipo |
| --- | --- | --- |
| `.produtos` | `.produtos` | bloco |
| `.produto` | `.produto` | bloco |
| `.produto-imagem` | `.produto__imagem` | elemento |
| `.produto-nome` | `.produto__nome` | elemento |
| `.produto-descricao` | `.produto__descricao` | elemento |
| `.em-destaque` | `.produto--destaque` | modificador |

```
sass/
  _base.scss       reset
  _produtos.scss   bloco produtos (grid)
  _produto.scss    bloco produto, elementos e modificador (com &__ e &--)
  main.scss        reúne os arquivos com @use
css/main.css       CSS compilado (usado pelo index.html)
```

```bash
npm install
npm run sass
```

O visual é o mesmo do projeto original. As imagens de exemplo usam `placehold.co`, já que o `via.placeholder.com` do material não funciona mais.

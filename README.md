# MotoElétrica: portal de notícias com Gulp

Portal de notícias sobre motos elétricas. O código-fonte fica em `src/` e o Gulp gera a versão otimizada em `dist/`.

## Tarefas do Gulp (`gulpfile.mjs`)

| Tarefa | O que faz | Origem → destino |
| --- | --- | --- |
| `estilos` | Compila o SASS em CSS comprimido | `src/styles/main.scss` → `dist/css/main.min.css` |
| `imagens` | Comprime as imagens JPEG (sharp/mozjpeg, qualidade 70) | `src/images/` → `dist/images/` |
| `scripts` | Comprime o JavaScript (uglify) | `src/scripts/` → `dist/js/main.min.js` |
| `build` | Roda as três tarefas em paralelo | |
| `default` | `build` + observa as alterações | |

```bash
npm install
npm run build   # gera a pasta dist
npm run dev     # build e recompila ao salvar
```

Resultado da compressão das imagens: 1,38 MB → 712 KB (cerca de 48% menor).

## Estrutura

```
src/
  styles/    SASS com variáveis e módulos (@use)
  scripts/   JavaScript
  images/    imagens originais (Unsplash)
dist/        arquivos gerados pelo Gulp (usados pelo index.html)
gulpfile.mjs
index.html
```

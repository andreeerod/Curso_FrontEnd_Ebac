# Exercício Grunt

Projeto da loja (estilo em LESS) automatizado com Grunt.

## Tarefas do `Gruntfile.js`

| Tarefa | O que faz | Origem → destino |
| --- | --- | --- |
| `less:desenvolvimento` | Compila o LESS | `src/less/main.less` → `dist/css/styles.css` |
| `less:producao` | Compila o LESS comprimido | `src/less/main.less` → `dist/css/styles.min.css` |
| `uglify` | Comprime o JavaScript | `src/js/main.js` → `dist/js/main.min.js` |
| `build` | `less` + `uglify` | |
| `default` | `build` + `watch` (recompila ao salvar) | |

```bash
npm install
npm run build   # grunt build
npm run dev     # grunt (build + watch)
```

## Estrutura

```
src/
  less/   variáveis, mapas, escapings e arquivos separados
  js/     JavaScript original
dist/     arquivos gerados pelo Grunt (usados pelo index.html)
Gruntfile.js
index.html
```

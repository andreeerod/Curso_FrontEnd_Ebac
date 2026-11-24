import gulp from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import sharp from 'sharp'
import { Transform } from 'node:stream'

const { src, dest, watch, parallel, series } = gulp
const sass = gulpSass(dartSass)

// Plugin simples que comprime cada JPEG com o sharp (motor mozjpeg embutido)
function comprimirJpeg({ qualidade = 70, larguraMaxima = 1200 } = {}) {
    return new Transform({
        objectMode: true,
        async transform(arquivo, _codificacao, pronto) {
            if (arquivo.isNull()) return pronto(null, arquivo)
            try {
                const antes = arquivo.contents.length
                arquivo.contents = await sharp(arquivo.contents)
                    .resize({ width: larguraMaxima, withoutEnlargement: true })
                    .jpeg({ quality: qualidade, progressive: true, mozjpeg: true })
                    .toBuffer()
                const depois = arquivo.contents.length
                console.log(`  ${arquivo.relative}: ${(antes / 1024).toFixed(0)} KB -> ${(depois / 1024).toFixed(0)} KB`)
                pronto(null, arquivo)
            } catch (erro) {
                pronto(erro)
            }
        },
    })
}

const caminhos = {
    estilos: { origem: 'src/styles/main.scss', observar: 'src/styles/**/*.scss', destino: 'dist/css' },
    scripts: { origem: 'src/scripts/**/*.js', destino: 'dist/js' },
    imagens: { origem: 'src/images/**/*.{jpg,jpeg}', destino: 'dist/images' },
}

// 1) Compila o SASS em CSS comprimido
export function estilos() {
    return src(caminhos.estilos.origem)
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(caminhos.estilos.destino))
}

// 2) Comprime as imagens JPEG
export function imagens() {
    return src(caminhos.imagens.origem, { encoding: false })
        .pipe(comprimirJpeg({ qualidade: 70 }))
        .pipe(dest(caminhos.imagens.destino))
}

// 3) Comprime (minifica) o JavaScript
export function scripts() {
    return src(caminhos.scripts.origem)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(caminhos.scripts.destino))
}

// Recompila ao salvar
export function observar() {
    watch(caminhos.estilos.observar, estilos)
    watch(caminhos.scripts.origem, scripts)
    watch(caminhos.imagens.origem, imagens)
}

export const build = parallel(estilos, imagens, scripts)
export default series(build, observar)

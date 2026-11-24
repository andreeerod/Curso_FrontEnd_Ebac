// Destaca no menu a seção que está visível na tela
const links = document.querySelectorAll('nav a[href^="#"]')
const secoes = document.querySelectorAll('main section[id]')

function marcarAtivo(id) {
    links.forEach(function (link) {
        const ativo = link.getAttribute('href') === '#' + id
        link.classList.toggle('ativo', ativo)
        if (ativo) {
            link.setAttribute('aria-current', 'true')
            // no celular, mantém o link ativo visível no menu rolável
            link.scrollIntoView({ block: 'nearest', inline: 'center' })
        } else {
            link.removeAttribute('aria-current')
        }
    })
}

const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) marcarAtivo(entrada.target.id)
    })
}, { rootMargin: '-45% 0px -50% 0px' })

secoes.forEach(function (secao) { observador.observe(secao) })

// Botão de voltar ao topo
const voltarTopo = document.getElementById('voltar-topo')

window.addEventListener('scroll', function () {
    voltarTopo.classList.toggle('visivel', window.scrollY > 600)
}, { passive: true })

voltarTopo.addEventListener('click', function (evento) {
    evento.preventDefault()
    window.scrollTo({ top: 0 })
    document.getElementById('conteudo').focus({ preventScroll: true })
})

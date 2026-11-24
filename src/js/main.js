// Ano atual no rodapé
const ano = document.getElementById('ano')
if (ano) {
    ano.textContent = new Date().getFullYear()
}

// Marca o item de menu clicado como ativo
const linksMenu = document.querySelectorAll('.menu a')

linksMenu.forEach(function (link) {
    link.addEventListener('click', function () {
        linksMenu.forEach(function (outro) {
            outro.classList.remove('ativo')
            outro.removeAttribute('aria-current')
        })
        link.classList.add('ativo')
        link.setAttribute('aria-current', 'page')
    })
})

// Botão "Ver detalhes": mostra o nome do produto escolhido
document.querySelectorAll('.product-button').forEach(function (botao) {
    botao.addEventListener('click', function (evento) {
        evento.preventDefault()
        const produto = botao.closest('.product-item').querySelector('h4').textContent
        botao.textContent = 'Selecionado: ' + produto
        botao.classList.add('selecionado')
    })
})

export const modelos = res => {
    let modelos = document.createElement('div')
    res.forEach(item => {
        modelos.innerHTML += `
            <div class="modelo-item">
                <img class="lazy" data-src="${item.url}" />
            </div>
        `
    });

    return `<div class="ivcard-modelos">${modelos.innerHTML}</div>`
    
}

export const navegacaoDados = dados => {
    let navegacaoDados = document.querySelector('.navegacao-dados');
    let navegacaoDadosInner = navegacaoDados.querySelector('.navegacao-inner');
    let navegacaoDadosClose = navegacaoDados.querySelector('.navegacao-dados-close');
    let navegacao = document.querySelector('.nav-ivcard')

    if (navegacaoDados) {
        navegacaoDadosInner.innerHTML = dados;
        navegacaoDadosInner.style.marginLeft = 0;
        navegacaoDados.classList.remove('close')

        navegacaoDadosClose.addEventListener('click', function (event) {
            let navegacaoDadosInnerWidth = window.getComputedStyle(navegacaoDados).width;
            navegacaoDadosInner.style.marginLeft = `-${navegacaoDadosInnerWidth}`

            setTimeout(function() {
                navegacaoDados.classList.add('close')
                navegacao.querySelector('.active').classList.remove('active')
            },100)
        });

        // Carregamento das imagens
        $('.lazy').Lazy({
            effect: 'fadeIn'
        });
    }
};


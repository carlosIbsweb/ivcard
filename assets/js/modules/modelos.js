export const modelos = res => {
    let modelos = document.createElement('div')
    res.forEach(item => {
        modelos.innerHTML += `
            <div class="modelo-item">
                <img @click="fe" class="lazy" data-src="${item.url}" />
            </div>
        `
    });

    return `<div class="ivcard-modelos">${modelos.innerHTML}</div>`
}

export const carregarDados = {
        props:['navegacao'],
        template: `
        <div>
            <div v-if="$root.navegacao.type == 'modelos'" class="ivcard-modelos">
                <div v-for="item in $root.navegacao.modelos" class="modelo-item">
                    <img @click="$root.bora" class="lazy" :data-src="item.url" />
                </div>
            </div>

            <div v-if="$root.navegacao.type == 'icones'">
                <div class="ivcard-nav-icones">
                    <span @click="$root.AdicionarIcone(icon)" v-for="icon in $root.navegacao.icones" v-html="$root.ivcardIcones(icon.icone)"></span>
                </div>
            </div>

             <div v-if="$root.navegacao.type == 'imagem'">
                <div class="ivcard-nav-imagem">
                <label class="btn waves-effect waves-light darken-4" type="submit" name="action" for="updateImagem">Imagem
                    <i class="material-icons right">add_a_photo</i>
                    <input type="file" @change="$root.handleFileChange" id="updateImagem" style="display:none">
                </label>
                </div>
            </div>

            <div v-if="$root.navegacao.type == 'title'">
                <div class="ivcard-nav-logo">
                <input type="text" @input="$root.editarTemplateTop('nome',event)" :value="$root.getTemplateTopValue('nome')"/>
                </div>
            </div>

            
        </div>`,
}

const icones = res => {
    let modelos = document.createElement('div')
    res.icones.forEach(item => {
        modelos.innerHTML += `
            <div class="modelo-item">
                ${item.icone}
            </div>
        `
    });

    return `<div class="ivcard-modelos">${modelos.innerHTML}</div>`
}

export const components = {
    modelos,
    icones
}



export const navegacaoDados = event => {
    
    let navegacaoDados = document.querySelector('.navegacao-dados');
    let navegacaoDadosInner = navegacaoDados.querySelector('.navegacao-inner');
    let navegacaoDadosClose = navegacaoDados.querySelector('.navegacao-dados-close');
    let navegacao = document.querySelector('.nav-ivcard');
    let navegacaoDadosActive = navegacao.querySelectorAll('.active');
    let itemSelecionado = document.querySelector('.item-selecionado')

        
    //Removendo a classe item-selecionado
    if(itemSelecionado)
        itemSelecionado.classList.remove('item-selecionado')

    if (navegacaoDados) {
        //navegacaoDadosInner.innerHTML = dados;
        navegacaoDadosInner.style.marginLeft = 0;
        navegacaoDados.classList.remove('close')

        // Carregamento das imagens
        $('.lazy').Lazy({
            effect: 'fadeIn'
        });
    }

    awOn('click','.navegacao-dados-close',function(event){
        event.preventDefault()

        let navegacaoDados = document.querySelector('.navegacao-dados');
        let navegacaoDadosInner = navegacaoDados.querySelector('.navegacao-inner');

            let navegacaoDadosInnerWidth = window.getComputedStyle(navegacaoDados).width;
            navegacaoDadosInner.style.marginLeft = `-${navegacaoDadosInnerWidth}`

            setTimeout(function() {
                navegacaoDados.classList.add('close')
                //Removendo os actives
                $('.activeNav').removeClass('activeNav')
            },100)
    })




    function awOn(action, el, call) {
        document.addEventListener(action, function(event) {
            const target = event.target;
    
            // Verificar se o elemento tem a classe especificada
            if (target.classList.contains(el.slice(1)) || 
                // Verificar se o ID corresponde ao especificado
                target.id === el.slice(1) || 
                // Verificar se a tag name corresponde à especificada
                target.tagName.toLowerCase() === el.toLowerCase()) {
                call(event);
            }
        });
    }
};


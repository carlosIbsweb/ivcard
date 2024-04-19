export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.statusText)

// Função para buscar um objeto pelo campo 'type'
export function navegacaoType(dados, type) {
    return dados.find(objeto => objeto.type === type);
}

export function removerObjetoChave(chave,array,item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][item] === chave) {
            array.splice(i, 1); // Remove o objeto com a chave desejada
            break; // Interrompe o loop, já que o objeto foi removido
        }
    }
}

export function updateTemplateTop(title,value,templateTop) {
    for (let i = 0; i < templateTop.length; i++) {
        if (templateTop[i].title === title) {
            templateTop[i].value = value; 
            break;
        }
    }

    return templateTop;
}

export function getTemplateTopValue(title, templateTop) {
    for (let i = 0; i < templateTop.length; i++) {
        if (templateTop[i].title === title) {
            return templateTop[i].value; 
        }
    }

    return null; // Se o título não for encontrado, retorne null ou outro valor padrão.
}

export function inicializarDropdown() {
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: 500,
        hover: false,
        gutter: 0,
        belowOrigin: false,
        alignment: 'left',
        stopPropagation: true
    });
}
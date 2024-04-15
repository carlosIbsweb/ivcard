export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.statusText)

// Função para buscar um objeto pelo campo 'type'
export function navegacaoType(dados, type) {
    return dados.find(objeto => objeto.type === type);
}

export function removerObjetoChave(chave,array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].icone === chave) {
            array.splice(i, 1); // Remove o objeto com a chave desejada
            break; // Interrompe o loop, já que o objeto foi removido
        }
    }
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
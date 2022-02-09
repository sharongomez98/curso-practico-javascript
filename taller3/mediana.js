const lista = [200, 700, 600, 500, 300, 100];
// const lista = [100, 200, 300, 500, 600, 700];

/**
 * 
 * @param {Array} lista 
 * @returns 
 */
const calcularMediana = (list) => {
    const lista = ordernarLista(list);
    if (lista.length % 2 === 0) {
        const medianaAlta = lista[parseInt(lista.length / 2)];
        const medianaBaja = lista[parseInt(lista.length / 2) - 1];
        return (medianaAlta + medianaBaja) / 2;
    } else {
        return lista[parseInt(lista.length / 2)];
    }
}

/**
 * 
 * @param {Array} lista 
 * @returns 
 */
const ordernarLista = (lista) => {
    return lista.sort((a, b) => a - b);
}
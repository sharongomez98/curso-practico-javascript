/**
 * 
 * @param {Array} lista 
 * @returns 
 */
const calcularMediaAritmetica = (lista) => {
    let sumaLista = lista.reduce((sum = 0, x) => x + sum);
    
    return sumaLista / lista.length;
}
const lista = [1, 2, 3, 4, 5, 6, 7, 2, 1, 2, 4, 2, 2, 3, 3, 4, 5, 7];

/**
 *
 * @param {Array} list
 */
const calcularModa = (list) => {
  const listaCount = [];
  list.map((x) => {
    listaCount[x] ? (listaCount[x] += 1) : (listaCount[x] = 1);
  });
  return Object.entries(listaCount)
    .sort((a, b) => a[1] - b[1])
    .pop();
};

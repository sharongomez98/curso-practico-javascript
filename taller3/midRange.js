//1. rango medio

//2. Es una medida de tendencia central que permite calcular el punto medio entre los extremos de un conjunto de datos. 

// 3. Su caso de uso suele ser especial ya que el calculo no es muy robusto. Se considera el estimador de máxima eficiencia para el centro de distribución uniforme, tambien utilizado como estimador L. Es un cálculo simple de entender y realizar. 

lista = [3, 3, 5, 6, 8];

/**
 * 
 * @param {Array} list 
 */
const calcularRangoMedio = (list) =>{
    list.sort((a, b) => a - b);
    return (list.pop() + list.shift()) / 2;

}
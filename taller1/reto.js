//Funcion para triangulo isoceles

function alturaTrianguloIsosceles(lado1, lado2, base) {
    //verificación de los lados
    if (!(lado1 === lado2 && lado1 != base)) return undefined;
    return Math.sqrt((lado1**2) - ((base**2)/4));
}
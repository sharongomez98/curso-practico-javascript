//Codigo de Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

//Codigo de Triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triángulo miden: " +
    ladoTriangulo1 +
    "cm," +
    ladoTriangulo2 +
    "cm," +
    baseTriangulo +
    "cm"
);

const alturaTriangulo = 5.5;

console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;
console.groupEnd();

//Codigo de Triangulo
console.group("Círculos");

//Radio
const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = (radio) => radio * 2;

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => radio * radio * PI;

console.groupEnd();

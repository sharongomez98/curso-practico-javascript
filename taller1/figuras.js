//Codigo de Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

//Codigo de Triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

//Codigo de Triangulo
const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;
const areaCirculo = (radio) => radio * radio * Math.PI;

//Funciones para el html
//Boton de Cuadrado
function calcularDatosCuadrado() {
  const lado = parseFloat(document.getElementById("inputCuadrado").value);

  const labelPerimetro = document.getElementById("perimetroCuadrado");
  labelPerimetro.innerHTML = "Perímetro: " + perimetroCuadrado(lado) + "cm";

  const labelArea = document.getElementById("areaCuadrado");
  labelArea.innerHTML = "Área: " + areaCuadrado(lado) + "cm^2";
}

function calcularDatosTriangulo() {
  const lado1 = parseFloat(document.getElementById("lado1Triangulo").value);
  const lado2 = parseFloat(document.getElementById("lado2Triangulo").value);
  const base = parseFloat(document.getElementById("baseTriangulo").value);
  const altura = parseFloat(document.getElementById("alturaTriangulo").value);

  const labelPerimetro = document.getElementById("perimetroTriangulo");
  labelPerimetro.innerHTML = "Perímetro: " + perimetroTriangulo(lado1, lado2, base) + "cm";

  const labelArea = document.getElementById("areaTriangulo");
  labelArea.innerHTML = "Área: " + areaTriangulo(base, altura) + "cm^2";
}

function calcularDatosCirculo() {
  const radio = parseFloat(document.getElementById("radioCirculo").value);

  const labelPerimetro = document.getElementById("perimetroCirculo");
  labelPerimetro.innerHTML = "Perímetro: " + perimetroCirculo(radio) + "cm";

  const labelArea = document.getElementById("areaCirculo");
  labelArea.innerHTML = "Área: " + areaCirculo(radio) + "cm^2";
}

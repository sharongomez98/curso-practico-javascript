// ---------------------- 1 ----------------------

let nombre = "string";
let apellido = "string";
const usuario = "string";
const edad = "number";
const email = "string";
const mayorDeEdad = "boolean";
let dineroAhorrado = "number";
let deudas = "number";

nombre = "Sharon";
apellido = "Gómez";
const fullName = nombre + " " + apellido;
console.log(fullName);

dineroAhorrado = 1000;
deudas = 100;
const realMoney = dineroAhorrado - deudas;
console.log(realMoney);

// ---------------------- 2 ----------------------

function logName(name, lastName, nickname) {
  const completeName = name + " " + lastName;
  return `Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`;
}

const name = "Juan David";
const lastName = "Castro Gallego";
const nickname = "juandc";

console.log(logName(name, lastName, nickname));

// ---------------------- 3 ----------------------

// replica de switch con if, else y else if

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

// replica de codigo anterior con if, sin else ni else if.

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

//bonus
const suscripciones = [
    {
        suscriptionName: "Free",
        message: "Solo puedes tomar los cursos gratis"
    },
    {
        suscriptionName: "Basic",
        message: "Puedes tomar casi todos los cursos de Platzi durante un mes"
    }, 
    {
        suscriptionName: "Expert",
        message: "Puedes tomar casi todos los cursos de Platzi durante un año"
    }, 
    {
        suscriptionName: "ExpertPlus",
        message: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }, 
];

function getSuscriptionMessage(suscripcionPrueba) {
    for (let suscripcion of suscripciones) {
        if (suscripcionPrueba === suscripcion.suscriptionName) {
            console.log(suscripcion.message);
        }
    }
}

getSuscriptionMessage(tipoDeSuscripcion);

// ---------------------- 4 ----------------------

//replica de ciclos for  con while
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

i = 10;
while (i >=2) {
    console.log("El valor de i es: " + i);
    i--;
}

// prompt loop
function simpleSum(){
    let result = prompt("2+2=");
    if(result == "4") {
        console.log("Felicidades!");
        return true;
    } else {
        console.log("Respuesta " + result + " incorrecta. Intente nuevamente");
        return false;
    }
}

function loopExample(){
    let win = false;
    while(!win) {
        win = simpleSum();
    }
}

// ---------------------- 5 ----------------------

const languages = ["JavaScript", "Java", "Python", "Ruby"];

// print first element from an array.
function getFirstElement(list) {
    console.log(list[0]);
}

//print all elements from array.
function showElements(list) {
    for(let e of list) {
        console.log(e);
    } 
}
getFirstElement(languages);
showElements(languages);

const fruit = {
    name: "manzana",
    color: "red",
    size: "small"
}

function showProperties(objeto) {
    Object.values(objeto).forEach((e) => {
        console.log(e);
    })
}
//print all elements from object.
showProperties(fruit);
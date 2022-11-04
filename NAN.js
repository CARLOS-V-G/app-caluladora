const calculadora = require("./calculadora");

const process = require("process");

let operacion = process.argv[2];

let numeroA = +process.argv[3];
let numeroB = +process.argv[4];

if (operacion === "sumar") {
  resultado = calculadora.sumar(numeroA, numeroB);
} else if (operacion === "restar") {
  resultado = calculadora.restar(numeroA, numeroB);
} else if (operacion === "multiplicar") {
  resultado = calculadora.multiplicar(numeroA, numeroB);
} else if (operacion === "dividir") {
  resultado = calculadora.dividir(numeroA, numeroB);
} else {
  resultado = "ERROR: Agregar dos numero!!!!";
}

console.log(resultado);


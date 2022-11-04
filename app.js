const calculadora = require('./calculadora');


const process = require('process');

const operacion = process.argv[2]

const numeroA = +process.argv[3];
const numeroB = +process.argv[4];


if(operacion === "sumar"){
    resultado = calculadora.sumar(numeroA,numeroB)
}else if(operacion === "multiplicar"){
    resultado = calculadora.multiplicar(numeroA,numeroB)
}else if(operacion === "restar"){
    resultado = calculadora.restar(numeroA,numeroB)
}else if(operacion === "dividir"){
    resultado = calculadora.dividir(numeroA,numeroB)
}else{
    resultado = ('​ERRO: Debes agregar dos números​')
}
console.log(resultado);
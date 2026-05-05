// Tipos de datos primitivos

const texto      = 'Hola';
const numero     = 42;
const booleano   = true; // false
const nulo       = null;
const indefinido = undefined;
const simbolo    = Symbol('id');
const grande     = 123n;

/*

console.log(typeof(texto)); // string
console.log(typeof(numero)); // number
console.log(typeof(booleano)); // boolean
console.log(typeof(nulo)); // object
console.log(typeof(indefinido)); // undefined
console.log(typeof(simbolo)); // symbol
console.log(typeof(grande)); // bigint

*/

// Complejos
const objeto  = { nombre: 'Juan', edad: 30};
const arreglo = [1,2,3,'string'];
const funcion = function() {};

console.log(objeto);
console.log(arreglo);
console.log(funcion);
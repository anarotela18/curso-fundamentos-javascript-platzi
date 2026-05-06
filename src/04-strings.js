// Strings
const nombre = 'Javascript';
const version = 'ES6';
console.log(nombre, version);

const mensaje = 'Bienvenido a ' + nombre + ' version: '+ version;
console.log(mensaje);

// Template literals
const mensaje2 = `Bienvenido y bienvenida al curso de ${nombre} en su versión ${version}`;
console.log(mensaje2);

// Expresiones
const precio = 100;
const cantidad = 3;
const total = `Total: ${precio * cantidad}`;
console.log(total);

// Multilinea
 const nota = `
 #Mi Nota
 Este es el contenido

 - Nota 1
 - Nota 2
 `;
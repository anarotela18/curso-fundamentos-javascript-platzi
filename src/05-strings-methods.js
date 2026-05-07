// Métodos principales en Strings

// Length
const texto = "Hola Mundo";
// console.log(texto.length); // 10

// Slice (inicio, fin)
const texto1 = "Javascript es genial";
//console.log(texto1.slice(0,10)); // javascript
//console.log(texto1.slice(11)); // es genial
//console.log(texto1.slice(-6)); //genial

// Substring (incio, fin)
const texto2 = "Hola Mundo";
//console.log(texto2.substring(0,4));

// Split(separador)
const texto3 = "linea1,linea2,linea3";
const lineas = texto3.split(",");
//console.log(lineas);

// trim(), trimStart(), trimEnd();
const texto4 = " Hola Mundo ";
//console.log(texto4.trim()); //"Hola Mundo"
//console.log(texto4.trimStart()); //"Hola Mundo "
//console.log(texto4.trimEnd());//" Hola Mundo"

// lowercase y uppercase
const texto5 = "Javascript";
//console.log(texto5.toLowerCase()); //javascript
//console.log(texto5.toUpperCase()); // JAVASCRIPT

// includes(subcadena)
const contenido = "Aprende Javascript desde cero";
//console.log(contenido.includes('Javascript')); // true
//console.log(contenido.includes('Python')); //fase

// startsWidth y endsWith
const archivo = 'documento.md';
//console.log(archivo.startsWith('doc')); // true
//console.log(archivo.endsWith('.js')); //false

// replace() y replaceAll(()
const texto6 = "Hola Mundo, Hola Javascript";
console.log(texto6.replace("Hola","Hi")); // Hi Mundo, Hola Javascript
console.log(texto6.replaceAll("Hola","Hi")); // Hi Mundo, Hi Javascript
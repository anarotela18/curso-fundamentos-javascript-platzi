// Function

function saludar(nombre){
    return `Hola, ${nombre}`;
}
const mensaje = saludar('Ana');
console.log(mensaje);

// Parámetros y Argumentos
function crearUsuario(nombre, edad){
    return { nombre, edad};
}
const usuario = crearUsuario('Ana',25);

// Arrow functions funciones de tipo flecha
const multiplicar = (a , b) => a * b;
console.log(multiplicar(4,5));

const crearNota = (contenido, titulo = 'sin titulo') => {
    return {
        titulo,
        contenido,
        creado: Date.now()
    }
}
const nota1 = crearNota('mi contenido');
const nota2 = crearNota('mi otro contenido','otro titulo');
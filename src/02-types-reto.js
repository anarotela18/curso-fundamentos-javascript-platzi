// ============================================
// Reto: Tipos de datos en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// ============================================
// --- Reto 1: Identificar tipos primitivos ---
// Declara las siguientes constantes con los valores indicados:
//   texto = "hola"
//   numero = 42
//   booleano = true
//   nulo = null
//   indefinido = undefined
//   simbolo = Symbol("id")
//   grande = 123n
// Retorna un objeto con el typeof de cada una:
//   { texto, numero, booleano, nulo, indefinido, simbolo, grande }
// donde cada valor es el resultado de typeof sobre la variable.
function identificarPrimitivos() {
  const texto      = "hola";
  const numero     = 42;
  const booleano   = true;
  const nulo       = null;
  const indefinido = undefined;
  const simbolo    = Symbol('id');
  const grande     = 123n;
  return {
        texto: typeof texto,
        numero: typeof numero,
        booleano: typeof booleano,
        nulo: typeof null,
        indefinido: typeof undefined,
        simbolo: typeof simbolo,
        grande: typeof gra
    };
}
// --- Reto 2: Diferenciar string y number ---
// Recibe un parámetro "valor".
// Retorna un objeto con:
//   { tipo: typeof valor, esString: true/false, esNumber: true/false }
function diferenciarStringNumber(valor) {
    return {
      tipo: typeof valor,
      esString: typeof valor == 'string',
      esNumber: typeof valor == 'number'
    }
}
diferenciarStringNumber(1000);

// --- Reto 3: El caso especial de null ---
// Declara una constante "nulo" con valor null.
// Retorna un objeto con:
//   { valor: nulo, tipo: typeof nulo, esNull: true/false }
// Pista: typeof null devuelve "object", pero debes verificar
// si realmente es null usando una comparación estricta (===).
function explorarNull() {
  const nulo = null;
  console.log( {
    valor: nulo,
    tipo: typeof nulo,
    esNull: nulo === null
  });
  return {
    valor: nulo,
    tipo: typeof nulo,
    esNull: nulo === null
  };
}
// --- Reto 4: Undefined vs Null ---
// Declara una variable con let llamada "sinAsignar" (sin asignarle valor).
// Declara una constante "vacio" con valor null.
// Retorna un objeto con:
//   { sinAsignar, vacio, tipoSinAsignar: typeof sinAsignar, tipoVacio: typeof vacio, sonIguales: sinAsignar == vacio, sonEstrictamenteIguales: sinAsignar === vacio }
function compararNullUndefined() {
  let sinAsignar;
  const vacio = null;
  console.log({
    sinAsignar, 
    vacio,
    tipoSinAsignar: typeof sinAsignar,
    tipoVacio: typeof vacio,
    sonIguales: sinAsignar === vacio,
    sonEstrictamenteIguales: sinAsignar === vacio 
  });
}

// --- Reto 5: Symbol y BigInt ---
// Crea un Symbol con la descripción "miID".
// Crea un BigInt con el valor 9007199254740991n.
// Retorna un objeto con:
//   { tipoSymbol: typeof del symbol, tipoBigInt: typeof del bigint, descripcionSymbol: symbol.description, valorBigInt: el bigint creado }
function crearSymbolYBigInt() {
  const simbolo = Symbol('miID');
  const grande  = 9007199254740991n;
  return {
    tipoSymbol: typeof simbolo,
    tipoBigInt: typeof grande,
    descripcionSymbol: simbolo.description,
    valorBigInt: grande
  };
}
// --- Reto 6: Crear un objeto ---
// Crea un objeto "persona" con las propiedades:
//   nombre (string): "Juan"
//   edad (number): 42
//   activo (boolean): true
// Retorna un objeto con:
//   { persona, tipoPersona: typeof persona, propiedades: Object.keys(persona) }
function crearObjeto() {
   const persona = {
    nombre: 'Juan',
    edad: 42,
    activo: true
   };
   return {
    persona,
    tipoPersona: typeof persona,
    propiedades: Object.keys(persona)
   };
}

// --- Reto 7: Trabajar con arrays ---
// Crea un arreglo "mezcla" con los valores: 1, "dos", true, null
// Retorna un objeto con:
//   { arreglo: mezcla, esArreglo: Array.isArray(mezcla), largo: mezcla.length, tipos: [typeof de cada elemento] }
function trabajarConArreglos() {
  const mezcla = [1, "dos", true, null];
  console.log({
    arreglo: mezcla,
    esArreglo: Array.isArray(mezcla),
    largo: mezcla.length,
    tipos: [
      typeof mezcla[0],
      typeof mezcla[1],
      typeof mezcla[2],
      typeof mezcla[3]
    ]
  });
}

// --- Reto 8: Funciones como valor ---
// Crea una constante "saludar" que sea una función que reciba un nombre
// y retorne "Hola, {nombre}!".
// Retorna un objeto con:
//   { tipoFuncion: typeof saludar, resultado: saludar("JavaScript") }
function funcionComoValor() {
  const saludar = function (nombre) {
    return `Hola, ${nombre}!`;
  };
  return{
    tipoFuncion: typeof saludar,
    resultado: saludar("JavaScript")
  }
}
// --- Reto 9: Clasificar tipo de dato ---
// Recibe un parámetro "valor".
// Determina si es primitivo o complejo y retorna un objeto con:
//   { valor, tipo: typeof valor, clasificacion: "primitivo" | "complejo" }
// Reglas:
//   - Si es null, clasificación es "primitivo" (a pesar de typeof).
//   - Si typeof es "object" o "function", clasificación es "complejo".
//   - En cualquier otro caso, clasificación es "primitivo".
// Pista: primero verifica si es null, luego revisa typeof.
function clasificarTipo(valor) {
  let esClasificacion;
  if( valor === null){
    console.log("Es primitivo:",typeof valor );
    esClasificacion = "primitivo";
  }
  else if( typeof valor === "string" ||
      typeof valor === "number" ||
      typeof valor === undefined ||
      typeof valor === Symbol ||
      typeof valor === BigInt){
    console.log("Es primitivo:",typeof valor );
    esClasificacion = "primitivo";
  }else{
    console.log("Es complejo:", typeof valor);
    esClasificacion = "complejo";
  }
  console.log({
    valor,
    tipo: typeof valor,
    clasificacion: esClasificacion
  });

}
clasificarTipo([1,2,"string"]);
// ============================================
// Reto: Operadores aritméticos en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// ============================================

// --- Reto 1: Suma ---
// Recibe dos números "a" y "b".
// Retorna el resultado de sumarlos con el operador +.
function calcularSuma(a, b) {
  console.log(a+b);
  return a+b;
}

// --- Reto 2: Resta ---
// Recibe dos números "a" y "b".
// Retorna el resultado de restar b a a con el operador -.
function calcularResta(a, b) {
  console.log(a - b);
  return a - b;
}

// --- Reto 3: Multiplicación ---
// Recibe dos números "a" y "b".
// Retorna el resultado de multiplicarlos con el operador *.
function calcularMultiplicacion(a, b) {
  console.log(a * b);
  return a * b;
}

// --- Reto 4: División ---
// Recibe dos números "a" y "b".
// Retorna el resultado de dividir a entre b con el operador /.
function calcularDivision(a, b) {
  console.log ( a / b);
  return a / b;
}

// --- Reto 5: Módulo ---
// Recibe dos números "a" y "b".
// Retorna el residuo de la división de a entre b con el operador %.
function calcularModulo(a, b) {
  console.log(a % b);
  return a % b;
}

// --- Reto 6: Exponenciación ---
// Recibe "base" y "exponente" (números).
// Retorna base elevado a exponente con el operador **.
function calcularPotencia(base, exponente) {
   console.log(base ** exponente);
   return base ** exponente;
}

// --- Reto 7: Operador de asignación += ---
// Recibe "valor" e "incremento" (números).
// Usa una variable con let, aplica += (valor += incremento) y retorna el valor resultante.
function aplicarAsignacionSuma(valor, incremento) {
    let valor_con_incremento = valor;
    valor_con_incremento += incremento;
    console.log(valor);
    console.log(valor_con_incremento)
    return valor;
}

// --- Reto 8: Operador de asignación -= ---
// Recibe "valor" y "decremento" (números).
// Usa una variable con let, aplica -= y retorna el valor resultante.
function aplicarAsignacionResta(valor, decremento) {
  let valor_con_decremento = valor;
  valor_con_decremento -= decremento;
  console.log(valor)
  console.log(valor_con_decremento);
  return valor_con_decremento;
}

// --- Reto 9: Operador de asignación *= ---
// Recibe "valor" y "factor" (números).
// Usa una variable con let, aplica *= y retorna el valor resultante.
function aplicarAsignacionMultiplicacion(valor, factor) {
  let valor_multiplicado = valor;
  valor_multiplicado *= factor;
  console.log(valor);
  console.log(valor_multiplicado);
  return valor_multiplicado;
}

// --- Reto 10: Operador de asignación /= ---
// Recibe "valor" y "divisor" (números).
// Usa una variable con let, aplica /= y retorna el valor resultante.
function aplicarAsignacionDivision(valor, divisor) {
  let valor_division = valor;
  valor_division /= divisor;
  console.log(valor);
  console.log(valor_division);
  return valor_division;
}

// --- Reto 11: Incrementar en uno ---
// Recibe un número "contador".
// Retorna el valor de contador incrementado en 1 (equivalente a usar ++).
function incrementarEnUno(contador) {
  return contador + 1;
}

// --- Reto 12: Decrementar en uno ---
// Recibe un número "contador".
// Retorna el valor de contador decrementado en 1 (equivalente a usar --).
function decrementarEnUno(contador) {
   return contador - 1;
}

// --- Reto 13: División por cero (Infinity / -Infinity) ---
// Recibe un booleano "positivo".
// Si positivo es true, retorna el resultado de dividir 1 entre 0 (Infinity).
// Si positivo es false, retorna el resultado de dividir -1 entre 0 (-Infinity).
function resultadoDivisionPorCero(positivo) {
  if(positivo){
    console.log("infinite")
    return (1 / 0);
  }else{
    console.log("-infinity")
    return (-1 / 0);
  }
}

// --- Reto 14: Obtener NaN ---
// Retorna el resultado de una operación que produzca NaN en JavaScript.
// Por ejemplo: 0/0 o multiplicar un string por un número.
function obtenerNaN() {
  console.log("Hola" * 2);
  return ("Hola" * 2);
}

// --- Reto 15: Detectar NaN ---
// Recibe un valor cualquiera.
// Retorna true si el valor es NaN, false en caso contrario.
// Pista: usa Number.isNaN(valor).
function esValorNaN(valor) {
    if(Number.isNaN(valor) ){
        console.log(Number.isNaN(valor));
    }
    return Number.isNaN(valor);
}   
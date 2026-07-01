
for(let i=0; i< 5; i++){
   console.log(i);
}

const notas = ["Nota 1", "Nota 2","Nota 3"];
for(let i=0; i < notas.length; i++){
   console.log(`El indice ${i} : ${notas[i]}`)
}

//for of
const frutas = ['manzana','pera','uva'];
for(const fruta of frutas){
   console.log(fruta);
   if(fruta === 'manzana'){
      console.log('Es una rica manzana');
   }
}

// for in
const persona = { nombre: 'Ana', edad: 25};
for(const clave in persona){
   console.log(`${clave}: ${persona[clave]}`);
}

// while
let contador = 0;
while(contador < 3){
   console.log(contador);
   contador++;
}

// do while
let numero = 0;
do{
   console.log(`Entra en: ${numero}`);
   numero++;
}while(numero < 3){
   console.log(numero);
}

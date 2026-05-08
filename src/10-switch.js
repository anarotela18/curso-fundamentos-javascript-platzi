// Switch
/*
switch(expresion){
    case valor1:
        break
    case valor2:
        break
    default:        
}*/
const dia = 'sabado';
switch(dia){
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log('Dia laboral');
        break
    case 'sabado':
    case 'domingo':
        console.log('Fin de semana');
        break
    default:
        console.log('Día no válido');        
}
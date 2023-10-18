//Uso de var
var age = 28;

{
    console.log('Valor dentro del bloque', age);//28
    var age = 29;
}

console.log('Valor fuera del bloque', age);//29
age = age * 2;
console.log('Valor cambiado', age);//58

//Uso de let
let age1 = 28;

{
    console.log('Valor dentro del bloque', age1);//Error porque age1 no existe en el ambito
    let age1 = 29;
}

console.log('Valor fuera del bloque', age1);//28
age1 = age1 * 2;
console.log('Valor cambiado', age1);//56

//Uso de const
const PI1 = 3.14159;
PI1 = 3.1416;//Aquí da error porque no se puede modificar valor de variable const
console.log(PI1);
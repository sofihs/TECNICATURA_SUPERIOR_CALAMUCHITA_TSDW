/*Ejercicios básicos*/
/* Ejercicio 41 Crea una variable llamada `nombre` y asígnale tu nombre. Luego, muestra el valor de
la variable en la consola*/

let nombre = "Sofia";
console.log(nombre);

/* Ejercicio 42 Define una variable llamada "edad" y asígnale tu edad. Luego, muestra un mensaje que diga "Tienes X años" en la consola, reemplazando X con el valor de la variable*/

let edad = 26;
console.log("Tenés " + edad + " años");

/*43. Crea una variable llamada `esEstudiante` y asígnale `true` si eres estudiante o `false`
si no lo eres. Luego, muestra un mensaje que diga "Eres estudiante" o "No eres
estudiante" en la consola según el valor de la variable.*/

let esEstudiante = true;
if(esEstudiante){
    console.log("Sos estudiante");
}else {
    console.log("No sos estudiante");
}

/*44. Crea una variable llamada `fruta` y asígnale el nombre de tu fruta favorita. Luego,
muestra un mensaje que diga "Mi fruta favorita es [nombre de la fruta]" en la consola.*/

let fruta = "manzana";
console.log("Mi fruta favorita es "+ fruta);

/*45. Define una variable llamada `numero1` y otra llamada `numero2`. Realiza una operación aritmética (suma, resta, multiplicación o división) con estas variables y muestra
el resultado en la consola.*/

/*let numero1 = 5;
let numero2 = 12;
let resultado = numero1 + numero2;
console.log("El resultado es: " + resultado); */

/*Operadores y Expresiones:
46. Crea una variable llamada `temperaturaCelsius` y asígnale un valor en grados
Celsius. Convierte esta temperatura a grados Fahrenheit utilizando la fórmula `F = (C *
9/5) + 32` y muestra el resultado en la consola.*/

let temperaturaCelsius = 27;
let temperaturaFarenheit = (temperaturaCelsius * 9/5) + 32;
console.log("La temperatura Fahrenheit es: " + temperaturaFarenheit);

/*Otra opción: Convertir grados celsius a grados fahrenheit*/

function convertirAF (celsius){
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log("La temperatura Fahrenheit es: " + convertirAF(-30));

function convertirAF (celsius){
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log("La temperatura Fahrenheit es: " + convertirAF(20));

/*47. Define una variable llamada `precioProducto` y otra llamada `cantidadComprada`. Calcula el costo total de la compra multiplicando estas variables y muestra el resultado en
la consola.*/

let precioProducto = 2500;
let cantidadComprada = 2;
let resultado = precioProducto * cantidadComprada;
console.log("El costo total es: " + resultado);

/*48. Crea una variable llamada `radio` y asígnale el radio de un círculo. Calcula el área del
círculo utilizando la fórmula `A = π * r^2` y muestra el resultado en la consola.*/

let radio = 20;
let areaCirculo = Math.PI * Math.pow(radio, 2);
console.log("El área del círculo es: " + areaCirculo);

/*49. Define una variable llamada `num1` y otra llamada `num2`. Escribe una expresión que verifique si `num1` es mayor que `num2` y muestra el resultado (true o false) en la consola. */
let num1 = 15;
let num2 = 2;

console.log(num1>num2);

let num3 = 12;
let num4 = 23;

console.log(num3>num4);


/*50. Crea una variable llamada `cadena1` y otra llamada `cadena2`. Concatena estas dos
cadenas utilizando el operador `+` y muestra la cadena resultante en la consola.*/

let cadena1 = "hi";
let cadena2 = "people";

console.log(cadena1 + " " + cadena2);




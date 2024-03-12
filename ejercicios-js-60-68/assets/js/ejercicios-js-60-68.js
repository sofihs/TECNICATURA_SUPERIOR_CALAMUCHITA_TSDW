/*60. Define tres variables `lado1`, `lado2` y `lado3` que representen las longitudes de los lados de un triángulo. Escribe una estructura condicional para determinar si el triángulo es 
equilátero (todos los lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado 
igual).*/

/*if(true){
Código a ejecutar
}*/


let lado1 = 5;
let lado2 = 6;
let lado3 = 4;

if (lado1 === lado2 && lado2 === lado3){
    console.log("El triángulo es equilátero");
}
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("El triángulo es isósceles");
}
else{
    console.log("El triángulo es escaleno");
}

/*usando operadores ternarios condición ? expresión_si_verdadero : expresión_si_falso; */

let ladoa = 4;
let ladob = 4;
let ladoc = 4;

let tipoTriangulo = (ladoa === ladob && ladob === ladoc) ? "equilátero" :
                    (ladoa === ladob || ladoa === ladoc || ladob === ladoc) ? "isósceles":
                    "escaleno";
console.log("El triángulo es " + tipoTriangulo);


/* 61- Escribe una función llamada esPrimo que tome un número como argumento y retorne 
true si es primo o false si no lo es. Un número primo es aquel que solo es divisible por 1 y 
por sí mismo. */
/*
function esPrimo (numero) {}
    if (numero<=1){
    return false;
}
*/

/*62- Define una función llamada invierteCadena que tome una cadena de texto como 
argumento y retorne una nueva cadena con los caracteres en orden inverso.*/
/*63- Crea una función llamada calcularFactorial que tome un número entero positivo como 
argumento y retorne su factorial. El factorial de un número es el producto de todos los 
números enteros positivos desde 1 hasta ese número.*/
/*64- Escribe una función llamada contarPalabras que tome una cadena de texto como 
argumento y retorne el número de palabras en esa cadena. Supón que las palabras están 
separadas por espacios.*/
/*65- Define una función llamada esPangrama que tome una cadena de texto como 
argumento y determine si es un pangrama. Un pangrama es una frase que contiene todas 
las letras del alfabeto al menos una vez.*/
/*66- Crea una función llamada sumaDigitos que tome un número entero como argumento y 
retorne la suma de sus dígitos. Por ejemplo, si el número es 123, la función debe retornar 
6 (1 + 2 + 3).*/
/*67- Escribe una función llamada calcularPotencia que tome dos números como 
argumento, base y exponente, y retorne el resultado de elevar la base al exponente.*/
/*68- Define una función llamada esPalindromo que tome una cadena de texto como 
argumento y determine si es un palíndromo. Un palíndromo es una palabra o frase que se 
lee igual de izquierda a derecha y de derecha a izquierda, ignorando espacios y signos de 
puntuación.
*/

/*area de triangulo */
//con let en base que es una variable voy a estar por medio del prompt tomando un valor que lo guardo en base. definis la variable base y le asignas el valor prompt//

let base = parseFloat (prompt("ingrese la base")); 
let altura = parseFloat (prompt("ingrese la altura")); 
let area = (base * altura) / 2;
console.log(`el área del triángulo es ${area}`); 


//mejora: usar funcion parse float, esto me asegura que me va adevolver un numero con punto flotante. parse float es un método.

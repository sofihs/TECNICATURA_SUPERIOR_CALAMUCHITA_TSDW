/*51. Crea una variable llamada `edad` y asigna un valor numérico. Escribe una condición 
que verifique si la persona es mayor de 18 años y muestra un mensaje en la consola, como "Eres mayor de edad", si se cumple la condición. */

let edad = 26;
if (edad>=18);{
    console.log("Sos mayor de edad");
}


/*52. Define una variable llamada `puntuacion` y asigna un valor numérico entre 0 y 100. Utiliza una estructura condicional `if...else` para mostrar un mensaje en la consola que 
indique si la puntuación es "Aprobada" (si es mayor o igual a 60) o "Reprobada" (si es 
menor a 60).*/

let puntuacion = 50;
if (puntuacion>=60){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

/*53. Crea una variable llamada `diaSemana` y asígnale el nombre de un día de la semana. 
Utiliza una declaración `switch` para mostrar un mensaje que indique si es un "Día 
laboral" o "Fin de semana" en función del valor de `diaSemana`.*/

let diaSemana = "viernes";
    switch (diaSemana){
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
        console.log("Dia laboral");
        break;
        case "sabado":
        case "domingo":
        console.log("Fin de semana");
        break;
        default:
        console.log("El valor no es válido para día de la semana");
    }
/*54. Define dos variables, `numero1` y `numero2`, y realiza una comparación para determinar cuál de los dos números es mayor. Luego, muestra el número mayor en la 
consola.*/

let numero1 = 30;
let numero2 = 20;
    if (numero1>numero2){
    console.log(numero1);
} else {
    console.log(numero2);
}

/*55. Crea una variable llamada `color` y asígnale el nombre de un color. Utiliza una serie 
de declaraciones `if...else if` para determinar si el color es "Rojo," "Verde," o "Azul," y 
muestra un mensaje correspondiente en la consola.*/

let color = "rojo";
    if (color ===  "rojo") {
        console.log("El color es rojo");
    } else if (color === "amarillo"){
        console.log("El color es amarillo");
    } else if (color === "azul") {
        console.log("El color es azul");
    } else {
        console.log("El color no es rojo, amarillo ni azul");
    }
/*56. Crea una variable llamada `calificacion` y asígnale un valor numérico entre 0 y 100. Utiliza una estructura condicional `if...else if...else` para mostrar en la consola si la 
calificación es "Excelente," "Aprobado," o "Reprobado" según un rango de calificaciones.*/

let calificacion = 80;
    if (calificacion >= 75){
        console.log("Excelente");
    } else if (calificacion >= 60){
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
/*57. Define una variable `numero` y verifica si es positivo, negativo o igual a cero utilizando una declaración `if` y muestra el resultado en la consola.*/
/*
let numero = 70;
if (numero > 0){
    console.log("El número es positivo");
} else if (numero < 0){
    console.log("El número es negativo");
} else {
    console.log("El número es igual a cero");
}

*/
/*58. Escribe una función llamada `esPar` que tome un número como argumento y retorne 
`true` si es par o `false` si es impar. Luego, muestra el resultado en la consola.*/

function esPar(numero) {
    return numero % 2 === 0;
}

let numero = 3;
    console.log(esPar(numero));

/*59. Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una 
estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en 
función de la hora. */

let hora = 20;
if(hora<12){
    console.log("Buenos días");
} else if(hora<18){
    console.log("Buenas tardes");
}else {
    console.log("Buenas noches");
}
    
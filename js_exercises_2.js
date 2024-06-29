/*
Exercise #2 (sugerencia map() )
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

/* map() se utiliza en arrays para iterar sobre cada elemento del array y aplicar una función 
a cada uno de ellos, creando un nuevo array con los resultados de aplicar esa función a cada 
elemento. */

/* Usando map(), se mete a una función para llamarlo desde el botón en HTML */

function duplicarNumeros() {
    let numeros = [1, 2, 4, 5];
    let arrayDuplicado = numeros.map(numero => numero * 2);
    console.log("El nuevo array es:", arrayDuplicado); // El nuevo array es: (4) [2, 4, 8, 10]
}

duplicarNumeros();

/* Usando for(), se mete a una función para llamarlo desde el botón en HTML */

function doblarNumeros() {
    let numeros = [1, 2, 4, 5];
    let arrayDuplicado = [];

    for (let i = 0; i < numeros.length; i++) {
        arrayDuplicado[i] = numeros[i] * 2;
    }

    console.log("El nuevo array es:", arrayDuplicado); // El nuevo array es: (4) [2, 4, 8, 10]
}

doblarNumeros();


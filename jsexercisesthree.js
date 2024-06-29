/*
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

/* El método reduce() en JavaScript se utiliza principalmente para reducir (o "reducir a un solo 
valor") los elementos de un array a un único valor. Es una forma eficaz de procesar todos los
 elementos de un array y producir un resultado basado en ellos. */

 /* Usando reduce(), se mete a una función para llamarla desde el botón en HTML */ 

 function calcularSumaYProducto() {
    let numeros = [1, 2, 3, 4];
    let resultados = numeros.reduce((acc, num) => {
        acc.suma += num;
        acc.producto *= num;
        return acc;
    }, { suma: 0, producto: 1 });

    console.log(`The sum is ${resultados.suma}. The product is ${resultados.producto}.`); // The sum is 10. The product is 24.
}

calcularSumaYProducto();

/* Usando for, se mete a una función para llamarlo desde el botón en HTML */ 

function calcularSumaYProductoConFor() {
    let numeros = [1, 2, 3, 4];
    let suma = 0;
    let producto = 1;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        producto *= numeros[i];
    }

    console.log(`The sum is ${suma}. The product is ${producto}.`); // The sum is 10. The product is 24.
}

calcularSumaYProductoConFor();

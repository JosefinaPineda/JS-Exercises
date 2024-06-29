/*
Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/

/* El ordenamiento de burbuja (Bubble Sort en inglés) es un sencillo algoritmo de ordenamiento.
 Funciona revisando cada elemento de la lista que va a ser ordenada con el siguiente, intercambiándolos
  de posición si están en el orden equivocado.
*/

function algoritmoBurbuja(arreglo) {
    let n = arreglo.length;
    while (n > 1) {
        for (let i = 0; i < n - 1; i++) {
            if (arreglo[i] > arreglo[i + 1]) {
                [arreglo[i], arreglo[i + 1]] = [arreglo[i + 1], arreglo[i]];
            }
        }
        n--;
    }
    return arreglo;
}

let arregloEntrada = [3, 6, 12, 5, 100, 1];
let arregloOrdenado = algoritmoBurbuja(arregloEntrada);
console.log(arregloOrdenado); // (6) [1, 3, 5, 6, 12, 100]

/* Se agrega otra función solo para poder llamarla desde el botón del HTML */

function ordenarYMostrar() {
    let arregloEntrada = [3, 6, 12, 5, 100, 1];
    let arregloOrdenado = algoritmoBurbuja(arregloEntrada);
    console.log(arregloOrdenado); // (6) [1, 3, 5, 6, 12, 100]
}

ordenarYMostrar();
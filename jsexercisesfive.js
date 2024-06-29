/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

/* Se mete a una función solo para poder llamarla desde el botón del HTML */

function manipularArrayDePersonas() {
    let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

    // 1. Imprimir todas las personas en la lista.
    console.log("Todas las personas:", personas);

    // 2. Eliminar a "Dani" del array.
    personas.splice(personas.indexOf("Dani"), 1);
    console.log("Dani eliminado del array:", personas);

    // 3. Eliminar a "Juan" del array.
    personas.splice(personas.indexOf("Juan"), 1);
    console.log("Juan eliminado del array:", personas);

    // 4. Mover a "Luis" al frente del array.
    personas.unshift(personas.splice(personas.indexOf("Luis"), 1)[0]);
    console.log("Luis movido al inicio del array:", personas);

    // 5. Agregar tu nombre al final del array.
    personas.push("Josefina");
    console.log("Mi nombre se agrega al array:", personas);

    // 6. Usando un bucle, iterar a través de este array y después de console.log "Maria", salir del bucle.
    for (let persona of personas) {
        console.log(persona);
        if (persona === "Maria") {
            break;
        }
    }
    // 7. Escribir el comando que da el indexOf donde se encuentra "Maria".
    console.log("Índice de Maria:", personas.indexOf("Maria"));

    // "Al final del ejercicio, debería haber 4 personas en el array."
    console.log("Las personas finales:", personas);
}

manipularArrayDePersonas();


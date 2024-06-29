/* Exercise #1 ( sugerencia join() ) 
Copy the code below into your workspace: */

/* Complete the function to print out the string: This is a sentence.*/

/*  join() es útil en situaciones donde necesitas convertir los elementos de un array en una 
sola cadena de texto con un formato específico de separación entre los elementos.  */

/* Usando join() */


let arr = ["This", "is", "a", "sentence."];

const printOutString = () => {
  console.log(arr.join(" ")); // This is a sentence.
};

printOutString();


/* Usando for */

let palabras = ["This", "is", "a", "sentence."];

const printOutStringFor = () => {
  let oracion = "";
  for (let i = 0; i < palabras.length; i++) {
    oracion += palabras[i];
    if (i < palabras.length - 1) {
      oracion += " ";
    }
  }
  console.log(oracion); // This is a sentence.
};

printOutStringFor();






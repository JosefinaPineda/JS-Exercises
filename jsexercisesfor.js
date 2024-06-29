/* Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

/* filter() es un método de los arrays en JavaScript que crea un nuevo array con todos
 los elementos que pasan una prueba (proporcionada como una función).
 includes() es un método de los arrays que determina si un array incluye un determinado elemento, 
 devolviendo true o false. */
 
/* Usando filter() e includes() y se mete a una función para llamarla desde el botón en HTML */

function encontrarComunesCursos() {
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];

    let cursosComunes = student1Courses.filter(curso => student2Courses.includes(curso));

    if (cursosComunes.length > 0) {
        console.log("Cursos comunes:", cursosComunes); // Cursos comunes: ['Programming']
    } else {
        console.log("No hay cursos comunes.");
    }
}

encontrarComunesCursos(); 


/* Usando for en una función para llamarla desde el botón de HMTL */

function encontrarCursosComunes() {
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];

    let cursosComunes = [];

    for (let i = 0; i < student1Courses.length; i++) {
        let curso = student1Courses[i];
        if (student2Courses.includes(curso)) {
            cursosComunes.push(curso);
        }
    }

    if (cursosComunes.length > 0) {
        console.log("Cursos comunes:", cursosComunes); // Cursos comunes: ['Programming']
    } else {
        console.log("No hay cursos comunes.");
    }
}

encontrarCursosComunes();
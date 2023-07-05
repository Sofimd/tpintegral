//document.getElementById('nota').innerHTML
/*function notaAlumnosSecundaria() {
    const nota_alumno = parseInt(input("Ingrese su nota:"));

    if (nota_alumno >= 1 && nota_alumno <= 3) {
        console.log("La materia está desaprobada, debe rendir final");
    } else if (nota_alumno >= 4 && nota_alumno <= 6) {
        console.log("La materia está aprobada, debe recuperar");
    } else if (nota_alumno >= 7 && nota_alumno <= 10) {
        console.log("La materia está promocionada");
    } else {
        console.log("La nota ingresada no es válida");
    }
}

notaAlumnosSecundaria(); */

function notaAlumnosSecundaria() {
    const notaInput = document.getElementById("nota");
    const nota_alumno = parseInt(notaInput.value);
    const resultadoDiv = document.getElementById("resultado");

    if (nota_alumno >= 1 && nota_alumno <= 3) {
        resultadoDiv.textContent = "La materia esta desaprobada, debe rendir final";
    } else if (nota_alumno >= 4 && nota_alumno <= 6) {
        resultadoDiv.textContent = "La materia esta aprobada, debe recuperar";
    } else if (nota_alumno >= 7 && nota_alumno <= 10) {
        resultadoDiv.textContent = "La materia esta promocionada";
    } else {
        resultadoDiv.textContent = "La nota ingresada no es valida";
    }
}

const evaluarButton = document.getElementById("evaluar");
evaluarButton.addEventListener("click", notaAlumnosSecundaria);


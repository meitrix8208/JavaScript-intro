const nombre = "Mauricio";
const apellido = "Rodriguez";

const nombreCompleto = `${nombre} ${apellido}`;

// console.log(`resultado : ${1 + 1}`);

function getSaludo(nombre) {
    return "Hola " + nombre;
}
console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);
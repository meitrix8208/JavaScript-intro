const persona = {
    nombre: "tony",
    apellido: "stark",
    edad: 45,
    direccion: {
        ciudad: "new york",
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    },
};


//! operador spread
const persona2 = {...persona}

persona2.nombre = "Peter"

console.log(persona);
console.log(persona2);

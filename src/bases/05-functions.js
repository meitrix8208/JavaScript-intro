// function saludar(nombre) {
//     return `hola ${nombre}`;
// }
const saludar = (nombre) => `hola ${nombre}`;

// console.log(saludar("tony"));

const getUser = () => ({
    uid: "ABC123",
    username: "peter",
});
// console.log(getUser());

const heroes = [
    {
        id: 1,
        name: "Batman",
    },
    {
        id: 2,
        name: "Superman",
    },
];

const result = heroes.some((hero) => hero.id === 1);
const { name } = heroes.find((hero) => hero.id === 1);

console.log(result);
console.log(name);

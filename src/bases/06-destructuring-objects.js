const person = {
    name: "Tony",
    age: 45,
    codeName: "IronMan",
};

const { name, age, codeName } = person;

// console.log(name);
// console.log(age);
// console.log(codeName);
const createHero = ({ name, age, codeName, power = "superSpeed" }) => ({
    id: 123455,
    name,
    age,
    codeName,
    power,
});

console.log(createHero(person));

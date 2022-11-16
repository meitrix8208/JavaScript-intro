// console.log("inicio");
// new Promise((resolve, reject) => {
// console.log("promesa");
// resolve("promesa resuelta");
// reject("promesa resuelta con error");
// }).then(console.log).catch(console.log);
// console.log("fin");

import { getHeroById } from "./bases/08-import-export";

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero !== undefined) {
                resolve(hero);
            } else {
                reject("No se pudo encontrar el héroe");
            }
        }, 1000);
    });
};

getHeroesByIdAsync(3).then(h => {
    console.log(`el héroe es ${h.name}`);
})
.catch(console.log);

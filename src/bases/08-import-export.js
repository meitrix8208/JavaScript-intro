// import { owners } from "./data/heroes";
import superHeroes from "../data/heroes";

export const getHeroById = (id) => superHeroes.find((hero) => hero.id === id);
export const getHeroesByOwner = (owner) => superHeroes.filter((hero) => hero.owner === owner);

//!#=========================index.js===========================#
// en index.js
// import { getHeroById, getHeroesByOwner } from "./bases/08-import-export";
//console.log(getHeroById(2));
//console.log(getHeroesByOwner("Marvel"));
const characters = ["Mario", "Luigi", "Peach", "Toad"];

// const [, , Peach] = characters; // Destructuring assignment 3

const [m, l, p, t = "Toad leader"] = characters; // Destructuring assignment 4

const returnArray = ([letters , numbers]) => {
    return [letters, numbers];
};

const [letters, numbers] = returnArray(["ABC", 456]); // Destructuring assignment

console.log(letters, numbers);

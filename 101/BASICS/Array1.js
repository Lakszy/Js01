let marvel=['thor','IronMan','Wanda','Scarlet'];
let dc=['Flash','WonderWoman','Batman','Supergirl'];


//! We can merge these arrays bt concat and by spreading 

const conArray = marvel.concat(dc);
console.log(conArray);

// Spreading the arrays 
const spArray = [...marvel, ...dc];
console.log(spArray);


const another_array=[1,2,3,[4,5,6],7,[8,9,[7,6,5]]];
const flated=another_array.flat(Infinity);
console.log(flated);


// Converting into Array

console.log(Array.isArray("Lakshay"));
console.log(Array.from("Lakshay"));

// This returns a empty Array
console.log(Array.from({name:"Lakshay"}));

let s1=100;
let s2=200;
let s3=300;

const sumUp= Array.of(s1,s2,s3);
console.log(` I Am OF ${sumUp}`);
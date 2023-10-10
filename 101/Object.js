// Singelton -> when object is made through constructor
// Object.create   this is a constructor(SINGLETON)


// ! We have declare a Symbol

const mySym = Symbol("KEY1");


const JS={
    name: "Lakshay",
    email:"Lakshaykhattar0208@gmail.com",
    "full name":"Lakshay Khattar",
    [mySym]:"myKey1"
}

// WE acnn access email by two methods but the square 
// brackets method is prefered because if a key is defined 
// in string there is no way of accessing it using dot op

console.log(JS.email);
console.log(JS["email"]);
console.log(JS["full name"]);

// It prevents the changes to be made
// Object.freeze(JS);
JS.email="kajkaj@";

console.log(JS);

// ! if we want to acess something within a Object then we use This

JS.greetings = function(){
    console.log(`Hello ${this["full name"]}`);
}
// This will work when we remove the freeze
console.log(JS.greetings());


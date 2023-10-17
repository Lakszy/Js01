//? this is meant to target the current context
//? only and only wroks in *OBJECTS* not in function

const User={
    userName:"lakshay",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`)
        console.log(this);
    }
}
User.welcomeMessage();

// *Because we have not hardcoded with 
// *direct username we have papssed using Username

User.userName="Hitesh"
User.welcomeMessage();

function LakshaY(){
    console.log(this);
}
LakshaY();


// In Arrow function **this** is not accesible
const Lakshay = () => {
console.log(this);
}
console.log(":::::::::::::::::::")
Lakshay();



//? Implicit return In Arrow same
 const addTwo = ( num1, num2 ) => num1 + num2 ;

 const addTwos = ( num1, num2 ) => (num1 + num2) 
 
 const addTwo_ = ( num1, num2 ) => ({userName:"Lakshay"}) 
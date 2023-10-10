let score = null;
console.log(typeof(score));

let valInNumber = Number(score);
console.log(typeof(valInNumber));
console.log(valInNumber);

// "33"->33
// "33abc"->Nan
// null->0
// undefined->undefined

// * similarly Boolean/String is thier

//++++++++++++++++++++++++++++++++++++++++

//! Stack(Primitive)  and heap(Non-Primitive)
let oneName="lakshay";
let twoName=oneName;

// *Since these are primitive so we will get the copy and  
// *the original will remain unaffected


let user1={
    email:"1234@gmail.com",
    password: 123
}
let user2 = user1;

//?  Since this Non-primitive so we get the direct refrence of user1  
//? SO user2 can directly change the value of user1  

user2.email="37737@gmail.com";
console.log(user1.email);
console.log(user2.email);
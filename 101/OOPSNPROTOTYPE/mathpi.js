const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const laks ={
    name:"lakshay",
    number:12345,

//! When we are itearting to this object with Object.entries this will break execution
    getName : function(){
 console.log(name)
    }
}
console.log(Object.getOwnPropertyDescriptor(laks,"name"));
/*{
  value: 'lakshay',
  writable: true,
  enumerable: true -> looping power
  configurable: true
}*/

// We are setting the Property of our own 
 Object.defineProperty(laks,'name',{
    writable:false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(laks,"name"));
// {
// value: 'lakshay',
// writable: false,
// enumerable: false,
// configurable: true
// }

// Checking for enumerable
for (const [key,value] of Object.entries(laks)) {
 if( typeof value !== "function"){
  console.log(key,value)
 }
}
addOne(9);
function addOne(num){
    console.log(num + 1);
}

// Calling function before declaration is known as Hoisting but it comes with certain limitaions
// ! above is the example we cant declare an expression and hoist
//!hositing works in such way that if done within
//!function it will check for value in parent block  

var x=21;
const fun = function(){
    console.log(x);
    var x = 20;
}

fun()

// ! Func declaration vs Expression

//* storing fucntion in something expression
//* and normally using the function is simple Declaration

const isSum = function sum(a, b) {
  return a + b;
};
// console.log(sum(10,20));
console.log(isSum(10, 20));

//! What are first call function
// * When a function is treated a parameter

function multiply(p, q) {
  return p * q;
}

function print(fn) {
  console.log(fn(20, 20));
}

print(multiply);


// iifee imm invioked func() call own thier own

;(function sumw(a,b) {
    console.log((a+b))
})(10,202);

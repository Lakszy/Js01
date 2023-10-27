// Currying

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(2));
/*At the back what happening is that when a is 
being called fucn b() is inovking to the func c() which 
will give us the final output
ƒ (b){
        return function(c){
            return a+b+c
        }
    }
*/

console.log(sum(2)(9));
/*
ƒ (c){
    return a+b+c
}
*/

console.log(sum(2)(9)(3));




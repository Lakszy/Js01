//! we prevent the pollution of the global scope variable and to get functio execute immediately

(function coffee(){
console.log("DB CONNECTED")
})();


((name) =>{
    console.log("DB CONEECTED " + name)
})("lakshay")

// SPREAD OR REST 
function calculatePrice(...num){
    return num;
}

console.log(calculatePrice(200,300,440));

const user = {
    userName:"lakshay",
    prices:199
}

// This can recive value from a API or an object 
function handleObject(anyObj){
    if(!anyObj.userName || !anyObj.price){
        console.log("UserName or Password is Wrong");
    }
    else{
        console.log(`Username is ${anyObj.userName} and the price is ${anyObj.price}`)
    }
}

handleObject(user);

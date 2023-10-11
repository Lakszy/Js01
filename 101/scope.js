// :Global scope
let a = 300
  
// Block Scope
if (true){
    const c = 30
    let a = 10
    var b = 20
console.log(`I am inside ${a}`);
}

console.log(`I am outside ${a}`);

// we dont want b to be accesible outside thatswhy we avoid var
console.log(b)



//* +++++++++++++++++++++++++++++++++ //


if(true){
    const userName = "hitesh";
    if (userName === "hitesh"){
        const website = "youtube"
        console.log(userName+website);
    }
    // This will cuase and error beacuse it is called outside of the block 
    // console.log(website);
}
// This will cuase and error beacuse it is called outside of the block 
console.log(userName);

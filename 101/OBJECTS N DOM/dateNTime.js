myDate = new Date();
console.log(myDate.toLocaleString());

// let myCreateDate = new Date( 2023, 0 , 23);
let myCreateDate = new Date( 2023-1-23);
console.log(myCreateDate.toLocaleString());

let myTimeStamps = Date.now();
console.log(myTimeStamps);
console.log(Math.floor(Date.now()/1000));

// getDay,getMonth,getFullYear

newDate.toLocaleString('default',{
    weekday: "long",
})

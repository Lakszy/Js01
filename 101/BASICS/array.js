const myArr= [0,1,2,3,4,5,6,7,8,9,10];
    // myArr.push(100);
    // myArr.push();
    // myArr.unshift(1);
    // myArr.shift();
    // console.log(myArr);

    // // COnverts arry into string 
    // const newArray = myArr.join();
    // console.log(newArray);

// SPLICE AND SLICE

// IN slice original array doesnt get effected
const myn1 = new myArr.slice(1,3);
console.log(myn1);

// IN splice  original array get effected
const myn2 = new myArr.splice(1,3);
console.log(myn2);


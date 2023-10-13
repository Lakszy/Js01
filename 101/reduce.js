const arr = [6, 5, 4, 3, 2, 1];
const intial = 0;
//! intial goes only one/first time in the accumulator


const sum = arr.reduce((acc, curr) => acc + curr, intial);
console.log("IAM SUM",sum);


//* PRO is zero becuse intial value is 0
const pro = arr.reduce((acc, curr) => acc * curr, intial);
console.log("IAM PRODUCT",pro);

const cart=[
    {
        name:"JS Coutse",
        price:999
    },
    {
        name:"React Coutse",
        price:9199
    },
    {
        name:"Dsa Coutse",
        price:7999
    },
    {
        name:"PY Coutse",
        price:1999
    },
];

const In = 0;
const total = cart.reduce((acc,item)=>acc+item.price,In)
console.log(total)
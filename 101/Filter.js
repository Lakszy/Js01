const myNums=[11,22,33,4,5,6,7,8,9,10]

const newNumss = myNums.filter((nums)=>nums>5)

const newNums =myNums.filter((num)=>{
    return num>4
})
console.log(newNums);
console.log(newNumss);

const books=[
{title:'BookOne',genre:'Fiction' , publish:1981,edition:2004},
{title:'BookTwo',genre:'Fiction' , publish:1981,edition:2004},
{title:'BookThree',genre:'History' , publish:1981,edition:2004}
];

//? We ahve to define certain bk and call from it in the books
const newF = books.filter( (bk) => bk.genre === 'Fiction')
console.log(newF);

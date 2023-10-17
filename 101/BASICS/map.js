const numNums=['lakshay','khattar','arjun','Verma']

numNums.map((i)=>{
    console.log("Sup",i.toUpperCase())
})

const numbers=[1,2,3,4,5,6,7,8,9,10]
const show = numbers
                   .map((num)=> num *10)
                   .map((num)=> num +1)
                   .filter((num)=>num>40)

console.log(show)
// for of 
const arr=['lakshay','khattar','1','2','3'];
for (const i of arr) {
    console.log(i); 
}


// Maps-> holds the key values and pairs pairs
// it holds the order of entry and the  unique value

const map = new Map();
map.set('IN',"INDIA")
map.set('GR',"GERMANY")
map.set('FR',"FRANCE")

// console.log(map);
// Now destructring to print with for of
for (const [key, values] of map) {
    console.log(key,"->",values);
}

const Obj = {
  game1:"NFS",
  game2:"spiderman"
}
//! THIS WILL NOT WORK
// for (const [key,values] of obj) {
//     console.log(key,"->",values); 
// }
for (const key in Obj) {
     console.log(Obj[key]);   
    }

const arr2=['0','1','2','3'];

// for each 
arr2.forEach((item,index,arr)=>{
console.log(item,index,arr);
})



const myCoding = [
    {
        lang:"JAVASCRIPT",
        slang:"js"
    },
    {
        lang:"CPP",
        slang:"c++"
    },
    {
        lang:"PYTHON",
        slang:"py"
    },
]
myCoding.forEach(element => {
    console.log(element.lang, " ->", element.slang)
});


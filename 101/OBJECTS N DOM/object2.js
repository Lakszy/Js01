const userName={
    fullName:{
     userFullname:{
         fname:"lakshay101"
      }
    }
 }
 console.log(userName.fullName?.userFullname.fname);
 
 const obj1 = {1:'a', 2:'b'}
 const obj2 = {3:'c', 4:'d'}

//  Now there are three ways of assigning both of them into third object

const obj3d = {obj1,obj2}
console.log(obj3d)
console.log("");

// passes a new empty object and assings the rest passed
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3)
console.log("");

const obj3s={...obj1, ...obj2}
console.log(obj3s);


// !if we create objects then we can access keys and CSSFontFeatureValuesRule
//* Object.keys
//* Object.values
//* Object.entries


const course ={
    courename:"JS",
    courseins:"HItesh",
}
// To make clear and get idea of react destructing
const {courseins: ins} = course;
// Such that we are calling couresins just by destructring
console.log(ins)

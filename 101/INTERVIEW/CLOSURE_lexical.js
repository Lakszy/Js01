/* Lexical means variable defined outside 
a fucntion can be used inside the function 
after the declaration of the variable */

var username = 'Lakshay'

function getUsername(){
    console.log(username)
}
getUsername()


//*Closure gives you acess to an outside 
//*function scope from an inner function
var bigName = 'KHATTAR'
function makeFunc(){
    var name = "MDN";
    function dName(){
    console.log(name,bigName)// this console have the 
//access to the all inputs makeFunc() and dName() 
//also,this is called scope chaining 
    }
    return dName;
}
var myFunc =  makeFunc ();
myFunc()
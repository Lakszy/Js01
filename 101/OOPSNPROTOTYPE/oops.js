const user = {
  username: "Lakshay",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //This will not give any error will passing but it will not
    //be able to generate output because of the working of JS
    //memory agent, so we have to retrieve using this
    // console.log(username);
    console.log(this.username);

    // In local context
    console.log(this);
  },
};
console.log(user.getUserDetails());

// In Global Context
console.log(this) //-> {} empty object sihnnifying that nothing is declared in the global context

// !CONSTRUCTOR
function User(username,isLogedIn,loginCount){
// * becuase this is a empty obj so we are creating and assigning username in that empty object  
    this.username = username;
    this.isLogedIn = isLogedIn;
    this.loginCount = loginCount;

return this
}
const userOne = User("Lakshay",true,12)

//!Now without invoking userTwo will ovverride 
//! the userOne thats why we use **new**

const userTwo = new  User("Khattar",false,2)
console.log(userOne);
console.log(userTwo.constructor());

// instanceof we can check whether a paricular methods or datatypes is related to the class/Object
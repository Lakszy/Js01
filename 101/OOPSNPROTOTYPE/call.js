// explicit calling using .call and holding the refrence 
function SetUsername (username){
    this.username=username
    console.log("Called");
}


function createUser(username,email, password){
    SetUsername.call(this, username)
    this.email=email;
    this.password=password
}
//! this is correct but it will not show any output ?
//! const lak = createUser("lakshay","123@gmail.com",123)
//! console.log(lak);

const lak = new createUser("lakshay","123@gmail.com",123)
console.log(lak);
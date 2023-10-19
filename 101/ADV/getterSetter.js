class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //With the constructor we are setting
  //the value and same we are doing with the set

  // ! OVERRIDDEN
  //? So we have to create a new variable because get and set
  //? are the main code through which password is passing

  get password() {
    return this._password.slice(3, 7);
  }
  set password(value) {
    this._password = value;
  }
}

const laks = new user("lakshay@123", "khattar123");
console.log(laks.password);

//*Actual passsword is (khattar123) but we are getting(ttar)

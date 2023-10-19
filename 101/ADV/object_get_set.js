const user = {
    // ( _ ) makes the property  private

    _email:"h@hc.com",
    _passowrd: "abc",

//! We use get and set to access the private and overrides it  
    get email(){
        return this._email.toLocaleUpperCase()
    },

    set email(value){
    this._email = value;
    }
}
const mine = Object.create(user)
console.log(mine.email);
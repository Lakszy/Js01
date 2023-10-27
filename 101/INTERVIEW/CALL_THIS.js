//?function passed into another function as argument

// document.addEventListener("click", function (params) {});


// We cant use this keyword in the arrow function

let user = {
  username: "Lakshay",
  rc1: () => {
    console.log("Hello " + this.username);
  },
  rc2() {
    console.log("Hello " + this.username);
  },
};
user.rc1();
user.rc2();

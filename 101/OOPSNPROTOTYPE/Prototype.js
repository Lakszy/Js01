let myHeros = ["thor", "hulk"];
let heroPower = {
  thor: "hammer",
  hulk: "Strength",

  getThorPower: function () {
    console.log(this.thor);
  },
};

// Creating/Injecting Our own Defined Property
//! Array.prototype.lakshay = function(){ ->this will give power to array only

Object.prototype.lakshay = function () {
  console.log("Iam present in all objects ");
};
heroPower.lakshay();

//* Inheritance

const User = {
  mame: "COFFEE",
};
const Teacher = {
  makeVideo: true,
};

const TaechingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeTest: "JS TEST",
  fullTime: true,
  __proto__: TaechingSupport,
};
Teacher.__proto__ = User;









// (kiski prop, kismai inject krni hai )
Object.setPrototypeOf(TaechingSupport, Teacher);

let myName = "lakshay      ";
//? We want a by default method with all
//? string named(trueLength) which trim the spaces

// INjecting your own predefined method
Object.prototype.trueLength = function (str) {
  console.log(this);
  console.log(this.trim().length);
};

myName.trueLength();

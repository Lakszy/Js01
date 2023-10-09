const accountId=1234;
let accountEmail = "lakshay@123";
var accountPassword = "1234";
acountCity="Delhi";
let accountState;

console.table([accountId,accountEmail,acountCity,accountPassword]);

// accountId = 2; //? Not allowed
accountEmail = "laks@gmail";
accountPassword="21212";
acountCity="tokyo";

console.table([accountId,accountEmail,acountCity,accountPassword,accountState]);

// var have the issue with the functional scope and the block scope
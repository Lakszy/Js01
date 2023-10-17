// * METHOD 1

const promiseOne = new Promise(function (res, rej) {
  // One can do DB task ; async task
  setTimeout(function () {
    console.log("Async task is completed ;)");
    res();
  }, 1000);
});
// then is related to resolve
promiseOne.then(function () {
  console.log("Promise is consumed here!");
});

// * METHOD 2

new Promise(function (res, rej) {
  setTimeout(function () {
    console.log("Async task 2");
  }, 1000);
}).then(function () {
  console.log("Async task 2 is consumed here");
});

const promiseThree = new Promise(function (res, rej) {
  setTimeout(function () {
    res({ username: "Lakshay", email: "Lakshay@123" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (res, rej) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      res({ username: "Lakshay", password: 123 });
    } else {
      rej("ERROR:Something went wrong");
    }
  });
}, 1000);

promiseFour
  .then((user) => {
    // console.log(user); This wont work
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally("The promise is either rejected or resolved");

//! ASYNC AND AWAIT    //
const promiseFive = new Promise(function (res, rej) {
    setTimeout(function () {
      let error = false;
      if (!error) {
        res({ username: "javascript", password: "123" });
      } else {
        rej("ERROR: JS went wrong");
      }
    }, 1000);
  });
  
  async function consumePromiseFive() {
    try {
      const response = await promiseFive;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  consumePromiseFive();
  
  //?-> Now fetch
  
  async function getAll() {
    try {
      const response = await fetch("https://anything/api.com");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  //* getAll is function so we have to call this 
  getAll()
  
  
  
  //* Now implementing above same using then and catch()
  
  fetch("https://anyhting/api.com")
  .then((response)=>{
      return response.json()
  })
  .then((data)=>{
  console.log(data)
  })
  .catch((err) => console.log(err))
function mulByFive(num){
    return num*5;
}
mulByFive.power = 2

console.log(mulByFive(5))
console.log(mulByFive.power)
console.log(mulByFive.prototype)

// !We know that Array Strings And Function,
// !All three are Objects {}

function createUser(username,score){
    this.username = username
    this.score = score
}
createUser.prototype.incremnet = function(){
    this.score++
}
const latte = createUser("latte",350)
const coffee = createUser("coffee",90)
A new 




























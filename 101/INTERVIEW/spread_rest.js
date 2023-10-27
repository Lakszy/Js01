// spread is that wen you send a in ... form
// rest is that wen you recieved in ... form

function multi(...nums) {
  console.log(nums[0] * nums[1]); //?Rest  Operator
}
var arr = [5, 6];
multi(...arr); //?Spread Operator

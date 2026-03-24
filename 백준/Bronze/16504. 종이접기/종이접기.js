const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])

let answer = 0
for (let i = 1; i <= N; i++) {
  
  let nums = input[i].split(" ").map(Number)
  
  let sum = nums.reduce((acc,cur) => acc + cur)
  
  answer += sum
}

console.log(answer)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let arr = []

for (let i = 1; i < input.length; i++) {
  arr.push(BigInt(input[i]).toString().length)
}
console.log(arr.join("\n"))
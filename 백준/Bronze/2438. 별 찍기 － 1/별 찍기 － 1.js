const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0])
let i = 1
while (N >= i) {
  console.log("*".repeat(i))
  i++
}
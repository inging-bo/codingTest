const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0]

for (let i = 1; i <= T; i++) {
  let min = Math.min(...input[i].split(" ").map(Number))
  console.log(min)
}
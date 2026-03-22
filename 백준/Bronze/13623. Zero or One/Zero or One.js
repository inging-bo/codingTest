const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input[0].split(" ").map(Number)
let arr = [0,0]
N.map((item) => arr[item] += 1)
if (!arr.includes(3)) {
  let [A, B, C] = N
  if (A === B) {
    console.log('C')
  } else if (A === C) {
    console.log('B')
  } else {
    console.log('A')
  }
} else {
  console.log('*')
}
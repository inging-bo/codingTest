const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let A = +input[0]
let B = +input[1]
let C = +input[2]
let arr = []
arr.push(A, B, C)
let ans = new Set(arr)

if (A + B + C === 180) {
  if (ans.size === 3) {
    console.log("Scalene")
  } else if (ans.size === 2) {
    console.log("Isosceles")
  } else {
    console.log("Equilateral")
  }
} else {
  console.log("Error")
}
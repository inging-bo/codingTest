const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let [A, B, C] = input[i].split(" ").map(Number).sort((a,b) => b - a)
  if (A < B + C) {
    let ans = new Set([A, B, C])
    if (ans.size === 3) {
      console.log("Scalene")
    } else if (ans.size === 2) {
      console.log("Isosceles")
    } else {
      console.log("Equilateral")
    }
  } else {
    console.log("Invalid")
  }
}
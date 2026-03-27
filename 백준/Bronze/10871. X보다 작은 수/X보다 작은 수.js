const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, X] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)
let answer = []
for (let i = 0; i < N; i++) {
  if (arr[i] < X) answer.push(arr[i])
}

console.log(answer.join(" "))
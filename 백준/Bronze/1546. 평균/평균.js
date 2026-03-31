const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
const scores = input[1].split(" ").map(Number)
let max = 0
let newScores = []
let sum = 0
for (let i = 0; i < N; i++) {
  if (max < scores[i]) max = scores[i]
}

for (let i = 0; i < N; i++) {
  newScores.push((scores[i] / max) * 100)
}

for (let i = 0; i < N; i++) {
  sum += newScores[i]
}

console.log(sum / N)
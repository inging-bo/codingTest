const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arrs = Array.from({length: 9}, () => Array(9).fill(0))

let max = 0
let pos = [0,0]
for (let i = 0; i < 9; i++) {
  let arr = input[i].split(" ").map(Number)
  for (let j = 0; j < 9; j++) {
    arrs[i][j] = arr[j]
    if (arrs[i][j] >= max) {
      max = arrs[i][j]
      pos[0] = i + 1
      pos[1] = j + 1
    }
  }
}

console.log(max)
console.log(pos.join(" "))
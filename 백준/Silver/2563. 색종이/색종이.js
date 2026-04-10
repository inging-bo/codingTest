const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let canvers = Array.from({length:100},() => Array(100).fill(0))
let count = 0
for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(" ").map(Number)
  
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (canvers[x + i][y + j] !== 1) {
        canvers[x + i][y + j] = 1
        count++
      }
    }
  }
}
console.log(count)
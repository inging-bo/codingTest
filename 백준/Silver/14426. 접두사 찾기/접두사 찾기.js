const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let count = 0
let root = {}

function insert(str) {
  let node = root
  for (const ch of str) {
    if (!node[ch]) node[ch] = {}
    node = node[ch]
  }
}

function findWord(str) {
  let node = root
  for (const ch of str) {
    if (!node[ch]) return false
    node = node[ch]
  }
  return true
}

for (let i = 1; i <= N; i++) {
  insert(input[i])
}

for (let i = N + 1; i <= N + M; i++) {
  if (findWord(input[i])) count++
}
console.log(count)
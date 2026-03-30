const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  let [t1, t2] = input[i].split(" ").map(BigInt)
  console.log((t1 + t2).toString())
}
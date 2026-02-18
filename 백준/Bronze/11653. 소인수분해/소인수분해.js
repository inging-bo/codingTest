const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];
let factors = [];

for (let i = 2; i * i <= N; i++) {
  while (N % i === 0) {
    factors.push(i);
    N /= i;
  }
}
if (N > 1) factors.push(N);

console.log(factors.join("\n"));
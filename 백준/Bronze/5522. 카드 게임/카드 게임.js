const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let ans = 0
for (let i = 0; i < input.length; i++) {
  let n = +input[i]
  ans += n
}
console.log(ans)
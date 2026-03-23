const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [m , n] = input[0].split(" ").map(Number)
let j = m
if (m === 0 ) {
  console.log(0)
  return
}
let ans = []
while (j > 0) {
  let div = j % n
  switch (div) {
    case 10 : div = "A"; break
    case 11 : div = "B"; break
    case 12 : div = "C"; break
    case 13 : div = "D"; break
    case 14 : div = "E"; break
    case 15 : div = "F"; break
  }
  ans.push(div)
  j = Math.floor(j / n)
}
let answer = ""
while (ans.length > 0) {
  answer += ans.pop()
}
console.log(answer)
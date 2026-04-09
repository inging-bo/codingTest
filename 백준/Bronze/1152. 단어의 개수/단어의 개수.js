const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0]
if (T.length === 0) {
  console.log(0)
} else {
  console.log(T.split(" ").length)
}
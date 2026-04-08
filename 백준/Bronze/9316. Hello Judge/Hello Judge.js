const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  console.log(`Hello World, Judge ${i}!`)
}
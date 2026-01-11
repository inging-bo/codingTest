const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stdin = [];

rl.on('line', (line) => {
  stdin.push(line.trim());
});

rl.on('close', () => {
  let N = parseInt(stdin[0]);
  let j = 1
  let time = 0
  while (N > 0) {
    if (N < j) {
      j = 1
    }
    N -= j
    j++
    time++
  }
  console.log(time)
});
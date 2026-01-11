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
  const N = BigInt(stdin[0n]);
  let j = N
  let findZero = 0n
  let checkNum = 0n
  let ft = 1n
  while (j > 0n) {
    ft *= j
    j--
  }
  
  while (ft % 10n === 0n) {
    ft /= 10n
    findZero++
  }
  console.log(findZero.toString())
});
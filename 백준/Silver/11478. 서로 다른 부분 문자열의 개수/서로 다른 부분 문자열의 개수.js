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
  const S = stdin[0];
  let i = 1
  let answer = 0

  let map = new Map()
  while (i <= S.length) {
    for (let j = 0; j + i <= S.length; j++) {
      map.set(S.slice(j, j + i), 1)
    }
    
    i++
  }
  console.log(map.size)
});
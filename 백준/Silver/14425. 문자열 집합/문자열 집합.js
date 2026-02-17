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
  const [N, M] = stdin[0].split(' ').map(Number);
  const setS = new Set();
  const stringsToCheck = {};

  for (let i = 1; i <= N; i++) {
    setS.add(stdin[i])
  }

  let count = 0
  for (let i = N + 1; i <= N + M; i++) {
    if (setS.has(stdin[i])) {
      count++
    }
    
  }

  console.log(count)
  
});
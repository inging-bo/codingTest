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
  const N = parseInt(stdin[0]);
  const weights = stdin.slice(1).map(Number).sort((a,b) => a - b);

  let maxWights = 0
  
  for (let i = 0; i < N; i++){
    let w = weights[i] * (N - i)
    if (maxWights < w) {
      maxWights = w
    }
  }
  console.log(maxWights)
});
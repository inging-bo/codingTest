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

  if (N === M) return console.log(1)
  return console.log(0)
});
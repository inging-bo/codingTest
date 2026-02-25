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
  const M = parseInt(stdin[1]);
  const locations = stdin[2].split(' ').map(Number);

  let needHeight = locations[0]

  for (let i = 1; i < M; i++) {
    let diff = locations[i] - locations[i - 1]
    let half = Math.ceil(diff / 2)
    if (half > needHeight) {
      needHeight = half
    }
  }

  
  if (N - locations[M - 1] > needHeight) {
    needHeight = N - locations[M - 1]
  }

  console.log(needHeight)
});
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
  const n = parseInt(stdin[0]);
  const cards = stdin[1].split(' ').map(Number);
  const m = parseInt(stdin[2]);
  const targets = stdin[3].split(' ').map(Number);

  let haveCards = new Map()
  for (let i = 0; i < n; i++) {
    haveCards[cards[i]] = haveCards[cards[i]] + 1 || 1
  }
  let answer = []
  for (let i = 0; i < m; i++) {
    answer.push(haveCards[targets[i]] || 0)
  }
  console.log(answer.join(" "))

});
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
  const unheard = stdin.slice(1, N + 1);
  const unseen = stdin.slice(N + 1);

  let map = new Map()

  for (let i = 0; i < N; i++) {
    map.set(unheard[i], 1)
  }

  let map2 = new Map()
  for (let i = 0; i < M; i++) {
    if (map.get(unseen[i])) {
      map2.set(unseen[i], 1)
    }
  }
  console.log(Array.from(map2.keys()).length)
  console.log(Array.from(map2.keys()).sort().join("\n"))
});
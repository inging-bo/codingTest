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
  const records = stdin.slice(1);

  let map = new Map()
  
  for (let i = 0; i < n; i++) {
    const [name, action] = records[i].split(' ');
    if (action === 'enter') {
      map.set(name, action)
    } else {
      map.delete(name)
    }
  }
  console.log(Array.from(map.keys()).sort().reverse().join("\n"))
  
});
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

  let obj = {}
  
  for (let i = 0; i < n; i++) {
    const [name, action] = records[i].split(' ');
    if (obj[name]) {
      delete obj[name]
    } else {
      obj[name] = action
    }
  }
  let answer = []
  for (let [key, value] of Object.entries(obj)) {
    answer.push(key)
  }
  console.log(answer.sort((a,b) => (a > b ? -1 : 1)).join("\n"))
  
});
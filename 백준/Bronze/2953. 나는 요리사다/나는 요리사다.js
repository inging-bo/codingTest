const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const stdin = [];

const input = (() => {
  let i = -1;

  return () => stdin[++i];
})();

rl.on('line', (line) => {
  stdin.push(line.trim());
});

rl.on('close', () => {
  for (let i = 0; i < stdin.length; i++) {
    stdin[i] = stdin[i].split(" ").map(Number).reduce((acc, cur) => acc + cur)
  }
  
  console.log(stdin.indexOf(Math.max(...stdin)) + 1, Math.max(...stdin))

})

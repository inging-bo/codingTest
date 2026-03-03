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
  const numbers = stdin[1].split(' ').map(Number);
  let set = new Set(numbers)

  
  let sort = Array.from(set).sort((a,b) => a - b)
  
  let obj = {}
  
  for (let i = 0; i < sort.length; i++) {
    obj[sort[i]] = i
  }
  let answer = []
  for (let i = 0 ; i < N; i++) {
    answer.push(obj[numbers[i]])
  }

  console.log(answer.join(" "))
});
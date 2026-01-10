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
  const isbn = stdin[0];

  const str = isbn.split("")
  let star = 0
  let starWeight = 1
  let fullSum = 0
  let first = 0
  let check = Number(str[str.length - 1])

  for (let i = 0; i < 13; i++) {
    if (str[i] === "*") {
      star = i
      starWeight = i % 2 === 0 ? 1 : 3
      continue
    }

    const num = Number(str[i])
    const weight = i % 2 === 0 ? 1 : 3
    fullSum += num * weight
  }

  for (let i = 0; i <= 9; i++) {
    
    if ((fullSum + (i * starWeight)) % 10 === 0) {
      console.log(i)
    }
  }
  
  
});
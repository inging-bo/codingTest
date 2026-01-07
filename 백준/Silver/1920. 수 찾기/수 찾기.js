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
  const A = stdin[1].split(' ').map(Number);
  const M = parseInt(stdin[2]);
  const numbersToCheck = stdin[3].split(' ').map(Number);
  
  let obj = {}
  for (let i = 0; i < M; i++) {
    obj[numbersToCheck[i]] = 0
  }
  
  for (let i = 0; i < N; i++) {
    if (obj[A[i]] === 0) {
      obj[A[i]] = 1
    }
  }

  for (let i = 0; i < M; i++) {
    console.log(obj[numbersToCheck[i]])
  }

});
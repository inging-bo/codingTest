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
  const words = stdin.slice(1);

  let obj = {}
  
  for (let i = 0; i < N; i++) {
    obj[words[i]] = words[i].length
  }

  let sort = Object.entries(obj).sort(([keyA, valueA],[keyB, valueB]) => {
    if (valueA > valueB) {
      return 1
    } 
    if (valueA < valueB) {
      return -1
    } 
    if (valueA === valueB) {
      if (keyA > keyB) {
        return 1
      }
      if (keyA < keyB) {
        return -1
      }
    }
    return 0
  })

  for ([str,length] of sort) {
    console.log(str)
  }
  
});
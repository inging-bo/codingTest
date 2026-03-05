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
  const word = stdin[0];
  let left = 0
  let right = word.length - 1
  let answer = true
  while (left < right) {
    if (word[left++] !== word[right--]) {
      answer = false
      break
    } 
  }
  console.log(answer)
});
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
  const numbers = stdin[1].split(' ').map(Number).sort((a,b) => a - b);
  const x = parseInt(stdin[2]);
  let [left, right] = [0, numbers.length - 1]
  let answer = 0
  
  while (left < right) {
    if (numbers[left] + numbers[right] === x) {
      answer += 1
      left += 1
      right -= 1
    } 
    if (numbers[left] + numbers[right] < x) {
      left += 1
    }
    if (numbers[left] + numbers[right] > x) {
      right -= 1
    }
  }
  console.log(answer)
});
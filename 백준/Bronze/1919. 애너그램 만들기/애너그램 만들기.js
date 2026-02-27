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
  const [word1, word2] = stdin;

  let obj = {}
  let obj2 = {}
  for (let char of word1) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let char of word2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  let common = 0

  for (let key in obj) {
    if (obj2[key]) {
      common += Math.min(obj[key], obj2[key])  
    }
    
  }
  
  console.log(word1.length + word2.length - (common * 2))
  
});
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
  const [H, W] = stdin[0].split(' ').map(Number);
  let heights = stdin[1].split(' ').map(Number);
  let totalWater = 0
  for (let i = 1; i < heights.length - 1; i++) {
    let left = Math.max(...heights.slice(0, i))
    let right = Math.max(...heights.slice(i + 1, heights.length))
    let curH = heights[i]
    let minH = Math.min(left, right)
    if (minH - curH > 0) {
      totalWater += (minH - curH)
    }
  }

  console.log(totalWater)
  
});
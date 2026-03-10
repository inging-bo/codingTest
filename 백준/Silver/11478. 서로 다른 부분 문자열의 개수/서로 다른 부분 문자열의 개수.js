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
  const S = stdin[0];
const n = S.length;

let suffixes = [];
for (let i = 0; i < n; i++) {
    suffixes.push(S.slice(i));
}

suffixes.sort();

let totalSubstrings = (n * (n + 1)) / 2;

let lcpSum = 0;
for (let i = 1; i < n; i++) {
    let prev = suffixes[i - 1];
    let curr = suffixes[i];
    let j = 0;
    
    while (j < prev.length && j < curr.length && prev[j] === curr[j]) {
        j++;
    }
    lcpSum += j;
}

console.log(totalSubstrings - lcpSum);
});
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  solve();
  process.exit();
});

function solve() {
  let [N, M] = lines[0].split(" ").map(Number)
  const treesArr = lines[1].split(" ").map(Number)
  const sort = treesArr.sort((a,b) => a - b)
  let left = 0
  let right = sort[sort.length - 1]
  let answer = 0
  while (left <= right) {
    let sum = 0
    let mid = Math.floor((left + right) / 2)
    for (let i = 0; i < N; i++) {
      if (sort[i] - mid > 0) {
        sum += (sort[i] - mid)
      }
    }

    // 적어도 M미터의 나무를 집에가져가야한다는 말은
    // 딱 맞지 않을 수도 있다는 말
    if (sum >= M) {
      answer = mid
      left = mid + 1
    } else if (sum < M) {
      right = mid - 1
    }
  }
  console.log(answer)
}
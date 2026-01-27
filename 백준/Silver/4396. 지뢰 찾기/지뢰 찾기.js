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
  const mineLocations = [];
  const grid = [];

  for (let i = 1; i <= n; i++) {
    mineLocations.push(stdin[i]);
  }

  for (let i = n + 1; i < stdin.length; i++) {
    grid.push(stdin[i]);
  }

  let board = Array.from({length: n}, () => Array.from({length : n}, () => "."))
  
  let boom = []
  let fail = 0
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1]
  let dy = [0, -1, -1, -1, 0, 1, 1, 1]
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
      if (grid[i][j] === "x") {
        let boomCount = 0
        for (let k = 0; k < 8; k++) {
          if (i + dx[k] < 0 || j + dy[k] < 0 || i + dx[k] >= n || j + dy[k] >= n) continue
          if (mineLocations[i + dx[k]][j + dy[k]] === '*') {
            boomCount += 1
          }
        }
        board[i][j] = boomCount
      }
      if (grid[i][j] === "x" && mineLocations[i][j] === "*") {
        fail = 1
      }
      if (mineLocations[i][j] === "*") {
        boom.push([i,j])
      }
    }
  }
  if (fail) {
    for (let i = 0; i < boom.length; i++) {
      let [x, y] = boom[i]
      board[x][y] = "*"
    }
    console.log(board.map(item => item.join("")).join("\n"))
  } else {
    console.log(board.map(item => item.join("")).join("\n"))
  }
  // 이후 처리 로직을 추가해주세요
});
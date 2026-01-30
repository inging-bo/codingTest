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
  const [n, m] = stdin[0].split(' ').map(Number);
  const canvas = [];

  for (let i = 1; i <= n; i++) {
    canvas.push(stdin[i].split(' ').map(Number));
  }

  let visit = Array.from({length : n}, () => Array(m).fill(0))

  let dx = [0, 1, 0, -1]
  let dy = [1, 0, -1, 0]
  let imgCount = []
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (canvas[i][j] === 1 && !visit[i][j]) {
        let count = 0

        function dfs(x, y) {
          visit[x][y] = 1
          count++
          for (let i = 0; i < 4; i++) {
            let dirRow = x + dx[i]
            let dirCol = y + dy[i]
            if (dirRow < 0 || dirRow >= n || dirCol < 0 || dirCol >= m) continue
            
            if (canvas[dirRow][dirCol] === 1 && !visit[dirRow][dirCol]) {
              dfs(dirRow, dirCol)
            }
          }
          return
        }
        
        dfs(i,j)
        imgCount.push(count)
      }
    }
  }
  if (imgCount.length === 0) {
    console.log(0) 
    console.log(0) 
  } else {
    console.log(imgCount.length)
    console.log(Math.max(...imgCount))  
  }
  
  
});
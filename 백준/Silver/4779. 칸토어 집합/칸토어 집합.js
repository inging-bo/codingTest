const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stdin = [];

rl.on('line', (line) => {
  stdin.push(parseInt(line));
});

rl.on('close', () => {
  let answer = []
  for (let i = 0; i < stdin.length; i++) {

    let memo = { 0 : "-"}
    
    let j = stdin[i]
    
    function getCantor(num) {
      if (memo[num] !== undefined) {
        return memo[num]
      }

      let prev = getCantor(num - 1)
      let space = " ".repeat(prev.length)

      return prev + space + prev
    }
 
    answer.push(getCantor(j))
  }

  console.log(answer.join("\n"))
});
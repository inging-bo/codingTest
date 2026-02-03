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
    
    let j = stdin[i]
    let num = 1
    
    while (j) {
      num *= 3
      j--
    }

    let line = Array(num).fill("-")
    
    function recursion(start, len) {
      if (len < 3) return

      let three = len / 3

      for (let i = start + three; i < start + 2 * three; i++) {
        line[i] = " "
      }

      recursion(start, three)
      recursion(start + three * 2, three)
      
    }
    
    recursion(0, num)

    answer.push(line.join(""))
  }

  console.log(answer.join("\n"))
});
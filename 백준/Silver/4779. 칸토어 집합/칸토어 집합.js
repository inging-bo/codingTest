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
    let curAnswer = []  
    let j = stdin[i]
    
    let num = 1
    while (j) {
      num *= 3
      j--
    }
    
    if (num === 1) {
      answer.push("-") 
      continue
    } 

    let line = Array.from({length : num}, () => " ")
    
    recursion(1, num)
    function recursion(start,last) {
      if (last - start === 2) {
        curAnswer.push(start)
        curAnswer.push(last)
        return
      }
      
      let rightDivide = (last - start + 1) / 3
      
      recursion(start, start + rightDivide - 1)
      recursion(start + rightDivide * 2, last)
      
    }
    for (let i = 0; i < curAnswer.length; i++){
      line[curAnswer[i] - 1] = "-"
    }
    answer.push(line.join(""))
  }
  console.log(answer.join("\n"))
});
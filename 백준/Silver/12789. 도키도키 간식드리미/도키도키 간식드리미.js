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
  const N = parseInt(stdin[0]);
  const students = stdin[1].split(' ').map(Number);

  let minNum = Math.min(...students)
  
  let sort = [...students].sort((a,b)=> a - b)

  let findMin = 0
  let temp = []
  
  for (let i = 0; i < N; i++) {
    
    if (students[i] === minNum && students[students.length - 1] !== minNum) {
      minNum = sort[++findMin]
      if (temp.length > 0 ) {
        while (minNum === temp[temp.length - 1]) {
          minNum = sort[++findMin]
          temp.pop()
        }
      }
      continue
    }
    
    if (temp.length > 0 && temp[temp.length - 1] < students[i]) {
      console.log("Sad")
      return
    }
    
    if (minNum < students[i]) {
      temp.push(students[i])
    } 

  }
  console.log("Nice")

});
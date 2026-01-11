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
  let obj = []
  for (let i = 1; i <= n; i++) {
    const [age, name] = stdin[i].split(' ');
    obj[i - 1] = [i - 1, Number(age), name]
  }

  let sort = obj.sort(([signUpA, ageA, nameA],[signUpB, ageB, nameB]) => {
    if (ageA > ageB) {
      return 1
    }
    if (ageA < ageB) {
      return -1
    }
    return 0
  })

  let answer = []
  for (let i = 0; i < sort.length; i++) {
    const [signUpA, age, name]= sort[i]
    answer.push([age, name].join(" "))
  }
  console.log(answer.join("\n"))
  
});
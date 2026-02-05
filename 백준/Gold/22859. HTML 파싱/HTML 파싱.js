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
  const inputData = stdin[0]; 
  const dataArr = inputData
    .replaceAll("/", "")
    .replaceAll("<main>", "")
    .replaceAll("<div>", "")
    .replaceAll('<div title="', "title : ")
    .replaceAll('">', "")
    .split("<p>")
    .filter(item => item !== "")
  
  let answer = []
  
  for (let i = 0; i < dataArr.length; i++) {
    
    if (!dataArr[i].includes("title : ")) {
      
      let prevDataArr = dataArr[i]
      let count = 0
      let pText = dataArr[i].replace(/<[^>]*>/g, "");
      
      let pText2 = pText.trim().replace(/\s+/g, " ");
      dataArr[i] = pText2
    }
    
  }
  console.log(dataArr.join("\n"))
  
});
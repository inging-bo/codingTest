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
  const fileNames = stdin.slice(1);

  let obj = {}

  // obj key 값은 extension
  // 같은 key 값이 나오면 value에 1을 더한다.
  for (let i = 0 ; i < N; i++) {
    const [name, extension] = fileNames[i].split(".")
    
    if (obj[extension]) {
      obj[extension] += 1
    } else {
      obj[extension] = 1
    }
  }

  // key 값이 확장자 기준으로 정렬
  let extensionSort = Object.entries(obj).sort(([Akey, Avelue],[Bkey, Bvalue]) => {
    if (Akey < Bkey) {
      return -1;
    }
    if (Akey > Bkey) {
      return 1;
    }
  })
  
  for (let i = 0; i < extensionSort.length; i++) {
    console.log(`${extensionSort[i][0]} ${extensionSort[i][1]}`)  
  }
  
});
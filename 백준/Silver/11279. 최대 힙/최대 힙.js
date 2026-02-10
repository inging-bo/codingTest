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
  let heap = [];
  let answer = []
  for (let i = 1; i <= N; i++) {
    const x = parseInt(stdin[i]);
    
    if (x !== 0) {
      maxHeap(x)
    } else {
      answer.push(popHeap())
    }
    
  }
  
  console.log(answer.join("\n"))

  function popHeap() {
    let head = heap[0] // [3, 2, 1] => 3
    
    if (heap.length === 0) return 0 // length = 3
    
    if (heap.length <= 1) return heap.pop() // length = 3
    heap[0] = heap.pop() // [1, 2]
    let curIdx = 0

    while (curIdx < heap.length) { // 0 < 3
      let leftIdx = curIdx * 2 + 1
      let rightIdx = curIdx * 2 + 2
      let minIdx
      if (heap[rightIdx]) {
        minIdx = heap[leftIdx] > heap[rightIdx] ? leftIdx : rightIdx  
      } else {
        minIdx = leftIdx
      }
      if (heap[minIdx] > heap[curIdx]) {
        [heap[minIdx] , heap[curIdx]] = [heap[curIdx] , heap[minIdx]]
        curIdx = minIdx
      } else {
        break
      }
    }
    return head
  }
  
  function maxHeap(num) {
    heap.push(num)
    let curIdx = heap.length - 1

    while (curIdx !== 0) {
      let parentIdx = Math.floor((curIdx - 1) / 2)

      if (heap[curIdx] > heap[parentIdx]) {
        [heap[curIdx] , heap[parentIdx]] = [heap[parentIdx] , heap[curIdx]]
        curIdx = parentIdx
      } else {
        break
      }
    }
  }
});
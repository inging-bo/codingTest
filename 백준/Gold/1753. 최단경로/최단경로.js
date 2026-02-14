const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [V, E] = input[0].split(" ").map(Number)
const K = +input[1]

let node = Array.from({length : V + 1}, () => [])

for (let i = 2; i < input.length; i++) {
  let [u, v, w] = input[i].split(" ").map(Number)

  node[u].push([v, w])
}

let dist = Array(V + 1).fill(Infinity)
let heap = []
dist[K] = 0
pushHeap([0, K])

function pushHeap(item) {
  heap.push(item)
  let index = heap.length - 1
  while (index > 0) {
    let parent = Math.floor( (index - 1) / 2)
    if (heap[parent][0] > heap[index][0]) {
      [heap[parent] , heap[index]] = [heap[index] , heap[parent]]
    } else break
    index = parent
  }
}

function popHeap() {
  if (heap.length === 1) return heap.pop()
  let root = heap[0]
  heap[0] = heap.pop()
  let index = 0
  while (true) {
    let left = (2 * index) + 1
    let right = (2 * index) + 2
    let min = index
    if (left < heap.length && heap[left][0] < heap[min][0]) min = left;
    if (right < heap.length && heap[right][0] < heap[min][0]) min = right;
    if (min === index) break
    [heap[min] , heap[index]] = [heap[index] , heap[min]];
    index = min
  }
  return root
}

while (heap.length !== 0) {
  let [curDist, cur] = popHeap()
  if (curDist > dist[cur]) continue;
  for (let [next, weight] of node[cur]) {
    if (dist[next] > curDist + weight) {
      dist[next] = curDist + weight
      pushHeap([dist[next], next])
    }
  }
}
let ans = [];

for (let i = 1; i < dist.length; i++) {
  if (dist[i] === Infinity) {
    ans.push('INF')
  } else {
    ans.push(dist[i])
  }
}
console.log(ans.join("\n"))
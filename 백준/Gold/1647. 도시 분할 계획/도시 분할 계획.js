const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)
let edges = []
for (let i = 1; i <= M; i++) {
  const num = input[i].split(" ").map(Number)
  edges.push(num)
}
edges.sort((a,b) => a[2] - b[2])
let parent = Array.from({length : N + 1}, (_,i) => i)
function find(num) {
  if (parent[num] !== num) parent[num] = find(parent[num])
  return parent[num]
}
function union(a, b) {
  const rootA = find(a)
  const rootB = find(b)

  if (rootA === rootB) return false;
  if (parent[rootA] < parent[rootB]) {
    parent[rootB] = rootA
  } else if (parent[rootB] < parent[rootA]) {
    parent[rootA] = rootB
  }
  return true;
}

const mst = [];
let mstWeight= 0;

for (const [u, v, w] of edges) {
  if (N === 2) break
  if (union(u, v)) {
    mst.push([u,v,w]);
    mstWeight += w;
    if (mst.length === N - 2) break
  }
}
console.log(mstWeight)
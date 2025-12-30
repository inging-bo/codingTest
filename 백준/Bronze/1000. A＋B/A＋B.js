
const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(
  input[0].split(' ').reduce((acc,cur) => Number(acc) + Number(cur))
);
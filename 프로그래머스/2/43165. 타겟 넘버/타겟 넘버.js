function solution(numbers, target) {

  let answer = 0
  let queue = []
  queue.push([0,0])
  let j = 0
  while (queue.length > j) {
    
    let [idx, sum] = queue[j]
    if (idx === numbers.length) {
      if (sum === target) {
        answer++
      }
      j++
      continue
    }
    queue.push([idx + 1, sum + numbers[idx]])
    queue.push([idx + 1, sum - numbers[idx]])
    j++

  }

  return answer
}
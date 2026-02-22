function solution(numbers, target) {
  
  let answer = 0
  dfs(0, 0)
  function dfs(num, sum) {
    
    if (num === numbers.length) {
      if (sum === target) {
        answer++
      }
      return
    }
    
    dfs(num + 1, sum + numbers[num])
    dfs(num + 1, sum - numbers[num])
    
  }
  
  return answer
}
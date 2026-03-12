function solution(numbers) {
    
    let arr = Array.from(numbers).fill(-1)
    
    let stack = []
    
    for (let i = 0; i < numbers.length; i++) {
        
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            let idx = stack.pop()
            arr[idx] = numbers[i]
        }
        stack.push(i)
    }
    
    return arr;
}
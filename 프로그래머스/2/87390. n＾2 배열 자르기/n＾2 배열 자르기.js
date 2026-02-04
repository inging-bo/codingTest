function solution(n, left, right) {
    
    let array = []
    
    for (let i = left; i <= right; i++) {
        let col = i % n
        let row = Math.floor(i / n)
        let max = Math.max(col, row)
        array.push(max + 1)
    }
    
    return array
}
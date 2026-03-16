function solution(k, tangerine) {
    let map = new Map()
    for (let i = 0; i < tangerine.length; i++) {
        map.set(tangerine[i], (map.get(tangerine[i]) || 0) + 1)
    }
    let sort = Array.from(map).sort((a,b) => b[1] - a[1])
    
    let count = 0
    let fruit = 0
    while (fruit < k) {
        fruit += sort[count++][1]
    }
    
    return count;
}
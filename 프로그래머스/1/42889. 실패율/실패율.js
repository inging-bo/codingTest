function solution(N, stages) {
    
    let arr = Array.from({length : N + 1}, (_,i) => [i, 0])
    
    let sort = stages.sort((a,b) => b - a)
    
    for (let i = 0; i < sort.length; i++) {
        if (N + 1 !== sort[i]) {
            arr[sort[i]][1] += 1
        }
    }
    for (let i = 1; i <= N; i++) {
        if (sort.includes(i)) {
            arr[i][1] = arr[i][1] / (sort.lastIndexOf(i) + 1)    
        }
    }
    
    let answer = []
    arr = arr.slice(1).sort((a,b) => b[1] - a[1])
    for (let [idx, per] of arr) {
        answer.push(idx)
    }
    return answer;
}
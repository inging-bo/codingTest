function solution(n, lost, reserve) {
    const answer = Array.from({length : n + 1}, () => 1)
    
    for (let i = 0; i < lost.length; i++) {
        let lostIdx = lost[i]
        answer[lostIdx] = 0
    }
    for (let i = 0; i < reserve.length; i++) {
        let reserveIdx = reserve[i]
        if (lost.includes(reserveIdx)) {
            answer[reserveIdx] = 1    
        } else {
            answer[reserveIdx] = 2
        }
        
    }
    
    for (let i = 0; i < answer.length; i++) {
        const leftIdx = i - 1
        const rightIdx = i + 1
        const reserveIdx = answer[i] === 2
        if (reserveIdx) {
            if (leftIdx > 0 && !answer[leftIdx]) {
                answer[leftIdx] = 1
            } else if (rightIdx <= n && !answer[rightIdx]) {
                answer[rightIdx] = 1
            }
        }
        
    }
    
    let count = n
    for (let i = 1; i <= answer.length; i++) {
        if (answer[i] === 0) {
            count--
        }
    }
    return count;
}
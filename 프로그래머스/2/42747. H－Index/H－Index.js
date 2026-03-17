function solution(citations) {
    let sort = citations.sort((a,b) => a - b)
    let answer = 0
    for (let i = 0 ; i < sort.length; i++) {
        let hIdx = sort.length - i
        if (sort[i] >= hIdx) {
            answer = hIdx
            break
        }
    }
    
    return answer
}
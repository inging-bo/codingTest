function solution(n) {
    let answer = 0
    for (let i = 1; i <= n; i++) {
        let count = 0
        let j = i
        while (count < n) {
            count += j
            j++
        }
        if (count === n) {
            answer++
        }
    }
    return answer;
}
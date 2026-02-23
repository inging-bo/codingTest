function solution(A,B){
    
    let minArr = A.sort((a,b) => a - b)
    let maxArr = B.sort((a,b) => b - a)
    let answer = 0
    for (let i = 0; i < A.length; i++) {
        answer += minArr[i] * maxArr[i]
    }


    return answer;
}
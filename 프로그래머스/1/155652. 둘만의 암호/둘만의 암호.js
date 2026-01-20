function solution(s, skip, index) {
    
    let alp = 'abcdefghijklmnopqrstuvwxyz'
    
    for (let skipStr of skip) {
        alp = alp.replace(skipStr, "")
    }
    let answer = ""
    for (let i = 0; i < s.length; i++) {
        let curStr = (alp.indexOf(s[i]) + index) % alp.length
        answer += alp[curStr]
    }
    
    return answer;
}
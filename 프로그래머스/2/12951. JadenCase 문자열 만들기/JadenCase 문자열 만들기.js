function solution(s) {
    
    let split = s.split(" ")
    let answer = []
    for (let i = 0; i < split.length; i++) {
        
        if (!Number(split[i][0]) && split[i]) {
            answer.push(split[i][0].toUpperCase() + split[i].slice(1).toLowerCase())
        } else {
            answer.push(split[i].toLowerCase())
        } 
        
    }
    
    return answer.join(" ")
}
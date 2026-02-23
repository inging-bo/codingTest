function solution(s) {
    var answer = [0,0];
    
    while (1) {
        if (s === "1") {
            answer[0]++
            return answer
        }
        if (s.indexOf("0") < 0) {
            s = changeBin(s.length)
            console.log(s)
        } else {
            s = "1".repeat(countOne(s))
        }
    }
    
    
    
    function changeBin(num) {
        answer[0]++
        return num.toString(2)
    }
    
    function countOne(str) {
        let count = 0
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "1") {
                count++
            } else {
                answer[1]++
            }
        }
        return count
    }
    return s;
}
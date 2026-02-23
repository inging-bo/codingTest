function solution(n) {
    let next = n + 1
    let startCount = 0
    let bin = n.toString(2)
    for (let i = 0 ; i < bin.length; i++) {
        
        if (bin[i] === "1") {
            startCount++
        }
    }
    while (1) {
        let count = 0
        let nextBin = next.toString(2)
        for (let i = 0; i < nextBin.length; i++) {
            if (nextBin[i] === "1") {
                count++
            }
        }    
        if (startCount === count) {
            return next
        }
        next += 1
    }
    
    return ;
}
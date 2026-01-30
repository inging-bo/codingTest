function solution(fees, records) {
    let [basicTime, basicFee, unitTime, unitFee] = fees
    
    let history = {}
    let parkingTimes = {}
    
    for (let i = 0; i < records.length; i++) {
        let [time, carNum, move] = records[i].split(" ")
        let [hourStr, minuteStr] = time.split(":")
        let hour = Number(hourStr)
        let minute = Number(minuteStr)
        
        
        if (!isNaN(history[carNum])) {
            
            let curTime = hour * 60 + minute
            let inTime = history[carNum]
            parkingTimes[carNum] += curTime - inTime
            history[carNum] = "re"
        } else {
            
            if (history[carNum] === "re") {
                history[carNum] = hour * 60 + minute        
            } else {
                history[carNum] = hour * 60 + minute    
                parkingTimes[carNum] = 0    
            }
        }
    }
    
    
    for (let [key, value] of Object.entries(parkingTimes)) {
        if (history[key] !== "re") {
            value += 1439 - history[key]
        }
        if (value > basicTime) {
            parkingTimes[key] = basicFee + Math.ceil((value - basicTime) / unitTime) * unitFee    
        } else {
            parkingTimes[key] = basicFee
        }
    }
    
    let answer = []
    
    let sort = Object.entries(parkingTimes).sort(([key,value],[keyB, valueB]) => key - keyB)
    for (let [key, value] of sort) {
        answer.push(value)
    }
    return answer;
}
function solution(keymap, targets) {
    
    let obj = {}
    
    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            if (obj[keymap[i][j]]) {
                if (obj[keymap[i][j]] > j) {
                    obj[keymap[i][j]] = j + 1
                }
            } else {
                obj[keymap[i][j]] = j + 1
            }
        }
    }
    
    let answer = []
    for (let i = 0; i < targets.length; i++) {
        let count = 0
        for (let j = 0; j < targets[i].length; j++) {
            if (obj[targets[i][j]]) {
                count += obj[targets[i][j]]
            } else {
                
                count = -1
                break
            }
        }
        answer.push(count)
    }
    
    return answer;
}
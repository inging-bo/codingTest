function solution(lottos, win_nums) {
    
    let obj = {}
    
    for (let i = 0; i < 6; i++) {
        
        if (obj[lottos[i]]) {
            obj[lottos[i]] += 1
        } else {
            obj[lottos[i]] = 1
        }
    }
    
    let collect = 0
    for (let i = 0; i < 6; i++) {
        if (obj[win_nums[i]]) {
            collect++
        }
    }
    let answer = []
    if (collect === 6) {
        return [1, 1]
    } else {
        let no
        if (obj[0]) {
            no = collect + obj[0];    
        } else {
            no = collect
        }
        
        const min = collect
        
        switch (min) {
            case 6:
                answer[1] = 1
                break;
            case 5:
                answer[1] = 2
                break;
            case 4:
                answer[1] = 3
                break;
            case 3:
                answer[1] = 4
                break;
            case 2:
                answer[1] = 5
                break;
            case 1:
                answer[1] = 6
                break;
            case 0:
                answer[1] = 6
                break;
        }
        switch (no) {
            case 6:
                answer[0] = 1
                break;
            case 5:
                answer[0] = 2
                break;
            case 4:
                answer[0] = 3
                break;
            case 3:
                answer[0] = 4
                break;
            case 2:
                answer[0] = 5
                break;
            case 1:
                answer[0] = 6
                break;
            case 0:
                answer[0] = 6
                break;
        }
    }
    
    return answer;
}
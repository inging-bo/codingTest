function solution(clothes) {
    let map = {}
    for (let i = 0; i < clothes.length; i++){
        let [name, type] = clothes[i]
        if (map[type]) {
            map[type] += 1
        } else {
            map[type] = 1
        }
    }
    let answer = 1
    for (let [key, value] of Object.entries(map)) {
        answer *= value + 1
    }
    return answer - 1;
}
function solution(n, w, num) {
    
    
    let floor = Math.ceil(n / w)
    let box = Array.from({length : floor} , () => 
                         Array.from({length : w}, () => 0)
                        )
    
    let number = 1
    let [y, x] = [0,0]
    for (let i = 0; i < box.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < w; j++){
                if (number === num) {
                    [y, x] = [i,j]
                }
                if (number > n) {
                    break
                }
                box[i][j] = number++
            }
        } else {
            for (let j = w - 1; j >= 0; j--){
                if (number === num) {
                    [y, x] = [i,j]
                }
                if (number > n) {
                    break
                }
                box[i][j] = number++
            }    
        }
    }
    let count = 0
    for (let i = y; i < floor; i++) {
        if (box[i][x]) {
            count++
        }
    }
    
    return count;
}
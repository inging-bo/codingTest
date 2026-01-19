function solution(babbling) {
    
    let str = ["aya", "ye", "woo", "ma"]
    let count = 0
    for (let i = 0; i < babbling.length; i++){
        let curStr = babbling[i]
        let chk = []
        let st = ""
        let k = 0
        let possible = true
        while (curStr.length > k) {
            st += curStr[k]
            
            for (let thisStr of str) {
                if (st.includes(thisStr)) {
                    if (st.length === thisStr.length) {
                        chk.push(thisStr)
                        if (chk[chk.length - 2] === thisStr) {
                            possible = false
                            break
                        }
                        
                        st = ""
                    } else {
                        chk.push(st.slice(0, st.length - thisStr.length))
                        chk.push(thisStr)
                        possible = false
                        break
                        st = ""
                    }
                }
            }
            k++
        }
 
        if (st === "" && possible) {
            count++
        }
        
    }
    
    return count;
}
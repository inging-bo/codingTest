function solution(s)
{
    let temp = []
    let j = s.length - 1
    while (j >= 0) {
        if (s[j] === temp[temp.length - 1]) {
            temp.pop()
        } else {
            temp.push(s[j])
        }
        j--
    }
        
    return temp.length === 0 ? 1 : 0;
}
let i = 10
while (i < 100) {
  let test1 = Number(i.toString().split("").reverse().join("")) % 4 === 0
  let [one, two] = i.toString().split("").map(Number)
  let test2 = (one + two) % 6 === 0
  if (test1 && test2 && i !== 8) {
    console.log(i)
    return
  }
  i++
}
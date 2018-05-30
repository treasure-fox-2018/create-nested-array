function nestedArray(jumlahRow, jumlahCol) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let arr = []
  for (let a = 0; a < jumlahRow; a++) {
    let fillerArr = []
    arr.push(fillerArr)
    for (let b = 0; b < jumlahCol; b++) {
      arr[a].push(alphabet[Math.floor((Math.random() * alphabet.length) + 1)])
    }
  }
  return arr
}

console.log(nestedArray(4, 4))
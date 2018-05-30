function createdNestedArr(jumlahRow, jumlahCol) {
  const abjad = 'abcdefghijklmnopqrstuvwxyz'
  let arrUtama = []

  for (let a = 0; a < jumlahRow; a++) {
    var isiArr = []
    for (let b = 0; b < jumlahCol; b++) {
      isiArr.push(abjad.charAt(Math.floor(Math.random() * abjad.length)))
    }
    arrUtama.push(isiArr)
  }
  return arrUtama
}
console.log(createdNestedArr(5, 4))
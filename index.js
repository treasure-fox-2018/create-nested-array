function createNestedArr(jumlahRow, jumlahCol) {
  let abjad = 'abjdefghijklmnopqrstuvwxyz'
  let mainBoard = []

  for (let i = 0; i < jumlahRow; i++) {
    let rowArr = []
    mainBoard.push(rowArr)

    for (let j = 0 ; j < jumlahCol; j++ ){
    mainBoard[i].push(abjad[(Math.floor(Math.random() * abjad.length))])

    }
  }
return mainBoard
}
console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));

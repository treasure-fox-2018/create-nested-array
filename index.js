function createNestedArr(row, col) {
  let abjad = 'abcdefghijklmnopqrstuvwxyz';
  let dalam = []
  let luar = []

  for (let i = 0; i < row; i++) {
    dalam = []
    for (let j = 0; j < col; j++) {
      dalam.push(abjad[Math.floor(Math.random() * abjad.length)])
    }
    luar.push(dalam)
  }
  return luar
}

console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))

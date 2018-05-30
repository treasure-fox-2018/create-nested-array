function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
// console.log(getRandomInt(0, 26))

function createNestedArr(jumlahRow, jumlahCol) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var mainArr = []
  // console.log(count)
  for (var a = 0; a < jumlahRow; a++) {
    var strArr = []
    mainArr.push(strArr)
    for (var b = 0; b < jumlahCol; b++) {
      var count = getRandomInt(0, 26)
      var str = alphabet[count]
      mainArr[a].push(str)
    }
  }
  return mainArr
}

console.log(createNestedArr(5, 3))
console.log(createNestedArr(5, 3))
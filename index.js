function createNestedArr(jumlahRow, jumlahCol) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var row = []
  for (var i = 0; i < jumlahRow; i++) {
    var col = []
    for (var j = 0; j < jumlahCol; j++) {
      var idx = Math.floor(Math.random()*alphabet.length)
      var count = alphabet[idx]
      // console.log(count);
      col.push(count)
    }
    row.push(col)
  }
  return row;
}

console.log(createNestedArr(5,3));

console.log(createNestedArr(4,2));

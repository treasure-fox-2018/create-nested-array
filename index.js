function createNestedArr(jumlahRow, jumlahCol) {

  var calculation = jumlahRow * jumlahCol

  var huruf = 'abcdefghijklmnopqrstuvwxyz'
  var result = []
  for (var i = 0; i < jumlahRow; i++) {
    var save = []
    for (var j = 0; j < jumlahCol; j++) {

      var each = huruf.charAt(Math.round(Math.random() * huruf.length))
      save.push(each)
    }
    result.push(save)
  }
  console.log(result)



}
createNestedArr(5, 3)
createNestedArr(4, 2)

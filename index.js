function createNestedArr (jumlahRow, jumlahCol) {
  var array = [];
  var huruf = 'abcdefghijklmnopqrstuvwxyz';
  var arrayHuruf = [];
  var index = 0;

  for (var i = 0; i <= jumlahRow*jumlahCol - 1; i++) {
    arrayHuruf.push(huruf.charAt(Math.floor(Math.random()* huruf.length)))
  }

  for (var i = 0; i <= jumlahRow - 1; i++) {
    array.push([]);
    for (var j = 0; j <= jumlahCol - 1; j++) {
      array[i].push(arrayHuruf[index]);
      index++;
    }
  }
  return array;
}

console.log(createNestedArr(5,4));
console.log(createNestedArr(3,3))
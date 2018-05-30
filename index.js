function createNestedArr(row, col){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var board = [];

  for (var i = 0; i < row; i++) {
    var hurufArr = [];
    for (var j = 0; j < col; j++) {
      hurufArr.push(alphabet[Math.floor(Math.random()*alphabet.length)]);
    }
    board.push(hurufArr);
  }
  return board;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));

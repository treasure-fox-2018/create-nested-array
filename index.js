function createNestedArr(row, col) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let rowArr = [];

  for (let i = 0; i < row; i++) {
    let colArr = []
    for (let j = 0; j < col; j++) {
      let randomChar = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      // console.log(randomChar)
      colArr.push(randomChar);
    }
    rowArr.push(colArr);
  }
  return rowArr;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
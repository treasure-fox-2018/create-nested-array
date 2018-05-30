function createNestedArr(jumlahRow, jumlahCol){
  let motherBoard = [];
  for (let i = 0; i < jumlahRow; i++){
    let row = [];
    for (let i = 0; i < jumlahCol; i++){
      row.push('a');
    }
    motherBoard.push(row);
    }
  debugger;
  return motherBoard;
}


console.log(createNestedArr(5,3))

function createNestedArr(jumlahRow, jumlahCol) {
  let arrOutside = []
  let count = 1
  for(let i=0; i<jumlahRow; i++){
    arrOutside.push([]);
    var randomAlpha = "abcdefghijklmnopqrstuvwxyz";
    for(let j=0; j<jumlahCol; j++){
      arrOutside[i].push(randomAlpha.charAt(Math.floor(Math.random() * randomAlpha.length)));
    }
  }
  console.log(randomAlpha);
  return arrOutside;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));

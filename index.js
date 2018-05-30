let createNestedArr = (jumlahRow,jumlahCol) => {
  let dictChar = 'abcdefghijklmnopqrstuvwxyz';
  dictChar = dictChar.split("");
  let output = [];
  for (let i = 0 ; i < jumlahRow ; i++) {
    let temp = [];
    for (let j = 0 ; j < jumlahCol ; j++) {
      let randomChar = dictChar[Math.floor(Math.random()*(dictChar.length-1))]  //note random disini kemungkinkan berulang dulu ga apa2 dah , di soal berikut nya ada contoh yg ga berulang
      temp.push(randomChar)
    }
    output.push(temp);
  }
  return output
}

console.log(createNestedArr(4,6))

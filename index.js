function nestedArray(jumlahRow, jumlahCol) {
  var arrFinal = [];
  for (var j = 0; j < jumlahRow; j++) {
   var arrCollumn = [];
   for (var i = 0; i < jumlahCol; i++) {
     var str = randomCharacter();
     arrCollumn.push(str)
   }
   arrFinal.push(arrCollumn)
}
  return arrFinal;
}

function randomCharacter() {
  var alphabet = "abcdeghijklmnopqrstuvwxyz";
  var randomStr = "";
  randomStr += alphabet.charAt(Math.trunc(Math.random() * alphabet.length));
  return randomStr;
}

console.log(nestedArray(3, 5));

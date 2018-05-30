function createNestedArr(jumlahRow, jumlahCol) {
  var dictionary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var arrParent = [];
  for (var i = 0; i < jumlahRow; i++) {
    var newArr = [];
    for (var j = 0; j < jumlahCol; j++) {
      var randomStr = dictionary[Math.floor(Math.random() * dictionary.length)];
      newArr.push(randomStr);
    }
    arrParent.push(newArr);
  }
  return arrParent;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(2,4));

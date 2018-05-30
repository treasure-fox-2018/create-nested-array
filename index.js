function createNestedArr(jumlahRow, jumlahCol){
  var arrNew = []
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
 for(var i = 0; i<jumlahRow; i++){
   arrNew.push([]);
   for(var j = 0; j<jumlahCol; j++){
     var random = Math.random()*(abjad.length-1)
     var randomAbjad = abjad[Math.round(random)]
     if(arrNew[i].length !== jumlahCol){
       arrNew[i].push(randomAbjad)
     }
   }
 }
 // console.log(arrNew)
 return arrNew
}

console.log(createNestedArr(5, 3))
/*
output:
[['p','s','w'],
 ['r','a','i'],
 ['q','x','c'],
 ['r','q','w'],
 ['m','o','y']]
*/

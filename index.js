function createNestedArray(jumlahRow, jumlahCol){
    var arr = []
    var temp = []
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    for(var i = 0; i < jumlahRow; i++){
        for(var j = 0; j < jumlahCol; j++){
            temp.push(alpha[Math.floor(Math.random()*26)])
        }
        arr.push(temp)
        temp = []
    }
    return arr
    
}

console.log(createNestedArray(4,2));

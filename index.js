function createNestedArr(row, col){
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var result = []
    for(let i=0; i<row; i++){
        var arr=[]
        for(let j=0; j<col; j++){
            let random = Math.floor(Math.random()*alphabet.length)
            arr.push(alphabet[random])
        }
        result.push(arr)
    }
    return result
}
console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
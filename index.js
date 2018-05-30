
function createNestedArr(jumlahRow, jumlahCol) {
    
    let rowcolArr = []

    for (let i = 0; i < jumlahRow; i++) {
        let rowArr = []
        
        for (let j = 0; j < jumlahCol; j++) {
            let alphabet = 'abcdefghijklmnopqrstuvwxyz'
            rowArr.push(alphabet[Math.floor(Math.random()*alphabet.length)])
        }
        rowcolArr.push(rowArr)
    }
    return rowcolArr
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
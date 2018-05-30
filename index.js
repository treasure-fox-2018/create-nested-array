const createNestedArr = (row,column) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let array = []
    for(let z = 0; z < row ; z ++){
        array.push([])
        for(let k = 0; k < column; k++){
            array[z].push(alphabet[Math.floor(Math.random() *( alphabet.length))])
        }
    }
    return array
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))


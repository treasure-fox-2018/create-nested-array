function createNestedArray(jumlahRow, jumlahCol){

    let arr = [];
    let alp = 'abcdefghijklmnopqrstuvwxyz'
    for( let row = 0; row < jumlahRow; row++){
        arr.push([])
        for(let col = 0; col < jumlahCol; col++){
            let idxRandmAlp = Math.floor(Math.random()*alp.length) 
            arr[row].push(alp[idxRandmAlp])
        }
    }


    return arr
}

console.log(createNestedArray(5,3))
function createNestedArr(jumlahRow,jumlahCol){
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    var hasil = []
    for(let i=0;i<jumlahRow;i++){
        hasil.push([])
        for(let j=0;j<jumlahCol;j++){
            var random = huruf[(Math.round(Math.random() * huruf.length))]
            hasil[i].push(random)
        }
    }
    return hasil
}
console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
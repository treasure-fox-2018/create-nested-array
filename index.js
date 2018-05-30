function createNestedArr(jmlRow, jmlCol) {
    var huruf = 'qwertyuioplkjhgfdsazxcvbnm'
    var arr = []
    for (let i = 0; i < jmlRow; i++) {
        var isi = []
        for (let j = 0; j < jmlCol; j++) {
            var num = Math.floor(Math.random() * 10)
            isi.push(huruf[num])
       }
       arr.push(isi)
    }
    return arr
}

console.log(createNestedArr(5,3));

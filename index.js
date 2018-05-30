function createNestedArr(jumlahRow, jumlahCol) {
    var mainBoard = []
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var randomize = 0;

    for (let i = 0; i < jumlahRow; i++) {
        var rowArr = [];
        for (let j = 0; j < jumlahCol; j++) {
            randomize = (Math.floor(Math.random() * 26 + 0));
            rowArr.push(alphabet.charAt(randomize));
            // console.log(randomize);
        }
        mainBoard.push(rowArr);
    }
    return mainBoard;
}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));
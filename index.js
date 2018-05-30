/**
 * @function createNestedArr
 * membuat nested array / multidimensional array dengan isi afabet acak sesuai jumlah kolom dan baris yg ditentukan
 * @param {integer} jumlahrow jumlah baris/ row and @param {integer} jumlahCol jumlah kolom/ column
 * @returns {array} mengembalikan array multidimensi berisi alfabet acak dengan jumlah kolom dan baris yg sesuai
 */

function createNestedArr(jumlahrow, jumlahCol) {
    var boardArr = [];
    var randomNumber = 0;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < jumlahrow; i++) {
        let innerBoardArr = [];

        for (let j = 0; j < jumlahCol; j++) {
            randomNumber = Math.floor((Math.random() * 26) + 0);

            innerBoardArr.push(alphabet.charAt(randomNumber));
        }

        boardArr.push(innerBoardArr);
    }

    return boardArr;

}

console.log(createNestedArr(5,3));

console.log(createNestedArr(4,2));

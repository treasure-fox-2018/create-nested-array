

function generateRandom(possible) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

}



function generateNestedArr(jumlahRow, jumlahCol) {


    var BoardNum = jumlahCol * jumlahRow

    var board = [];

    for (let i = 0; i < jumlahRow ; i++) {

        var arr = [];

        board.push(arr);

        for (let j = 0; j <jumlahCol ; j++) {
            var randomStr = generateRandom()


            if (jumlahRow > jumlahCol) {

                arr.push(randomStr);

            } else {

                arr.push(randomStr);
            }

        }
    }


    return board


}
console.log(generateNestedArr(5, 3))
console.log(generateNestedArr(4, 2))







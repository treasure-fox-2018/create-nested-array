function createNestedArray(jumlahRow, jumlahCol) {
    let arrLetter = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for(let i = 0; i < jumlahRow; i++) {
        arrLetter.push([])

        for(let j = 0; j < jumlahCol; j++) {
            let rnd = Math.floor(Math.random()*26);
            arrLetter[i].push(alphabet[rnd]);
        }
    }

    return arrLetter;
}

console.log(createNestedArray(5, 3));
console.log(createNestedArray(4, 2));
console.log(createNestedArray(5, 5));
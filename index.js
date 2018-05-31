"use strict"

function createNestedArray (row, col) {

    var result = []
    var alphabet ='abcdefghijklmnopqrstuvwxyz'

    for(var i=0; i<row; i++) {
        result.push([])
    }

    for(var x=0; x<row; x++) {
        for(var y=0; y<col; y++) {
            result[x].push(alphabet[(Math.floor(Math.random()*26))])
        }
    }

    return result
}

console.log(createNestedArray(5, 3))
console.log(createNestedArray(2, 7))

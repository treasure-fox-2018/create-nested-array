function matriksRandomAlphabet(totalRow, totalCol){
	var dict = 'abcdefghijklmnopqrstuvwxyz'
	var mainMatriks = []

	for(let a = 0; a < totalRow; a++){
		let matriks = []
		for(var b = 0; b < totalCol; b++){
			matriks.push(dict.substr(Math.floor(Math.random()* dict.length),1))
		}

		mainMatriks.push(matriks)
	}

	return mainMatriks;
}


console.log(matriksRandomAlphabet(4,4))
console.log(matriksRandomAlphabet(3,2))
console.log(matriksRandomAlphabet(5,3))
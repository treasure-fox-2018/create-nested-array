
function createNested(totalRow, totalCol) {
  const dictionary = 'abcdefghijklmnopqrstuvwxyz';
  let rows = [];

  for (let i = 0; i < totalCol; i++) {
    for (let j = 0; j < totalRow; j++) {
      let letter = dictionary[Math.floor(Math.random() * dictionary.length)];
      if (rows[j] === undefined) {
        rows[j] = []
      }
      rows[j].push([letter]);
    }
  }
  return rows;
}

console.log(createNested(5,3));
console.log(createNested(4,2));

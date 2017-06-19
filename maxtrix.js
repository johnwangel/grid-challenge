
function makeArray(rows, columns){
  let matrix = [];
  for (var i = 0; i < rows; i++) {
      matrix.push([]);
      for (var j = 0; j < columns; j++) {
          matrix[i].push([j+1]);
      }
  }

  return matrix;

  console.log(matrix);
}

console.log(makeArray(5,10));

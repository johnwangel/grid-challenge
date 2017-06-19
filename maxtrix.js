
function make2DArray(rows, columns, fill){
  let matrix = [];
  for (var i = 0; i < rows; i++) {
      matrix.push([]);
      for (var j = 0; j < columns; j++) {
          matrix[i].push([fill]);
      }
  }

  return matrix;
}

firstArray = make2DArray(5, 10, "ham");

function expand2DArray(firstArray, rows, columns, fill){
  for (var i = 0; i < rows; i++) {
      if (firstArray[i] == undefined) { firstArray.push([]); }
      for (var j = firstArray[i].length; j < columns; j++) {
          if (firstArray[i][j] == undefined) { firstArray[i].push([fill]); }
      }
  }
  return firstArray;
}

secondArray = expand2DArray(firstArray, 10, 15, "spam");

console.log(secondArray);
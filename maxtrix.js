
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

firstArray = make2DArray(5, 10, "spam");

function expand2DArray(firstArray, rows, columns, fill){
  let newRows = rows - firstArray.length;

  for (var i = firstArray.length; i < rows; i++) {
      firstArray.push([]);
      let newCols = columns - firstArray[i].length;
      for (var j = firstArray[i].length; j < columns; j++) {
          firstArray[i].push([fill]);
      }
  }

  return firstArray;
}

secondArray = expand2DArray(firstArray, 10, 15, "ham");

console.log(secondArray);
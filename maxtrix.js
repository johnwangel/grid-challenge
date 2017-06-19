
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

function expand2DArray(rows, columns, fill, array){
  if (array == undefined ){ let array = []; }

  let len1 = (function() {
    if (array.length > rows) { return array.length; }
      else { return rows; }
  })();
  for (var i = 0; i < len1; i++) {
    if (i > rows-1) {
      array.pop();
      continue;
    }
    else if (array[i] == undefined) {
      array.push([]);
    }
    let len2 = (function() {
      if (array[i] && array[i].length > columns) { return array[i].length; }
        else { return rows; }
    })();
    for (var j = 0; j < len2; j++) {
      if (j > columns-1) { array[i].pop(); }
      else if (array[i][j]) {}
      else { array[i].push([fill]); }
    }
  }
  return array;
}

//secondArray = expand2DArray(firstArray, 10, 15, "spam");

//console.log(secondArray);

secondArray = expand2DArray(15, 15, "spam", firstArray);
secondArray = expand2DArray(3, 3, "spam", firstArray);
console.log(secondArray);
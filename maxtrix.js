function expand2DArray(rows, columns, fill, array){
  if (array){}
  else {  array = []; }

  let len1 = (function() {
    if (array && array.length > rows) { return array.length; }
      else { return rows; }
  })();
  for (var i = 0; i < len1; i++) {
    if (i > rows-1) {
      array.pop();
      continue;
    } else if (array[i]) {
      array[i].push([]);
    } else {
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



let firstArray = expand2DArray(5, 10, "ham");
let secondArray = expand2DArray(15, 15, "spam", firstArray);
let thirdArray = expand2DArray(7, 8, "spam", secondArray);
console.log(thirdArray);
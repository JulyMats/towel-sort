module.exports = function towelSort (matrix) {
  let arr = [];

  if(!matrix) {
    return [];
  }

  for(let i = 0; i < matrix.length; i += 1) {
    if(i % 2 === 0) {
      for(let j = 0; j < matrix[i].length; j += 1) {
        arr.push(matrix[i][j]);
      }
    } else {
      for(let j = matrix[i].length - 1; j >= 0; j -= 1) {
        arr.push(matrix[i][j]);
      }
    }
  }
  return arr;
}

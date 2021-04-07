function getMatrixElementsSum(matrix) {
  return matrix.map((e, i, arr) => {
    if (i === 0) {
      return e.reduce((sum, elem) => sum + elem);
    }
    return e.reduce((sum, elem, z) => ((arr[i - 1][z] !== 0) ? sum + elem : sum), 0);
  }).reduce((sum, elem) => sum + elem);
}

module.exports = getMatrixElementsSum;

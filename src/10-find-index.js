function findIndex(array, value) {
  let start = 0;
  let end = array.length;
  let middle = null;
  let position = null;

  function binarySearch() {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === value) {
      position = middle;
    } else if (value < array[middle]) {
      end = middle - 1;
      binarySearch();
    } else {
      start = middle + 1;
      binarySearch();
    }
  }
  binarySearch();
  return position;
}

module.exports = findIndex;

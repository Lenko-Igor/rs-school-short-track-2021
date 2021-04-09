function findIndex(array, value) {
  let count = Math.ceil(array.length / 2);

  function getHalfNumber(arr) {
    const halfLength = Math.ceil(arr.length / 2);
    const index = halfLength - 1;
    const num = arr[index];

    if (num === value) {
      count -= 1;
    } else if (value > num) {
      const newArr = arr.slice(halfLength);
      const step = Math.ceil(newArr.length / 2);
      count += step;

      getHalfNumber(newArr);
    } else {
      const newArr = arr.slice(0, index);

      if (newArr.length === 2) {
        const step = newArr.length / 2 + 1;
        count -= step;
      } else {
        const step = Math.ceil(newArr.length / 2);
        count -= step;
      }

      getHalfNumber(newArr);
    }
  }

  getHalfNumber(array);

  return count;
}

module.exports = findIndex;

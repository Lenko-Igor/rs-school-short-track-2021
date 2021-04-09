/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const accum = [];
  const array = str.split('');
  let count = 1;

  array.forEach((elem, i, arr) => {
    if (elem === arr[i + 1]) {
      count++;
    } else {
      if (count === 1) {
        accum.push(elem);
      } else {
        accum.push(count + elem);
      }
      count = 1;
    }
  });

  const string = accum.join('');

  return string;
}

module.exports = encodeLine;

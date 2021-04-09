/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const array = n.toString().split('').map((e) => +e);
  let result = null;

  function getSumm(arr) {
    const sum = arr.reduce((prov, current) => prov + current);

    if (sum < 10) {
      result = sum;
    } else {
      const sumNext = sum.toString().split('').map((e) => +e);
      getSumm(sumNext);
    }
  }

  getSumm(array);
  return result;
}

module.exports = getSumOfDigits;

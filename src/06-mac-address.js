/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const etalonLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const inputArray = n.split('-');

  const checked = inputArray.map((elem) => {
    let booleanArray = null;

    if (+elem >= 0) {
      booleanArray = true;
    } else {
      const firstPart = etalonLetters.find((e) => e === elem[0]);
      const secondPart = etalonLetters.find((e) => e === elem[1]);

      if ((firstPart || elem[0] >= 0) && (secondPart || elem[1] >= 0)) {
        booleanArray = true;
      } else {
        booleanArray = false;
      }
    }

    return booleanArray;
  });

  const result = !checked.some((e) => e === false);
  return result;
}

module.exports = isMAC48Address;

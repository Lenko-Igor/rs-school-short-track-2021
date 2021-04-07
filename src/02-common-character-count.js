/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj1 = {}
  const obj2 = {}

  const arr1 = [...s1].forEach(e => {
    (!obj1[e])? obj1[e] = 1 : obj1[e] = obj1[e]+1
  });
  const arr2 = [...s2].forEach(e => {
    (!obj2[e])? obj2[e] = 1 : obj2[e] = obj2[e]+1
  });

  const arrKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])]

  return arrKeys.map(e => {
    if(obj1[e] + obj2[e]){
      return (obj1[e] > obj2[e])? obj2[e] : obj1[e]
    } else {
      return 0
    }
  }).reduce((sum, elem) => sum + elem)
}

module.exports = getCommonCharacterCount;

function getCommonCharacterCount(s1, s2) {
  const obj1 = {};
  const obj2 = {};
  const arr1 = [...s1];
  const arr2 = [...s2];

  arr1.forEach((e) => {
    if (!obj1[e]) {
      obj1[e] = 1;
    } else {
      obj1[e] += 1;
    }
  });
  arr2.forEach((e) => {
    if (!obj2[e]) {
      obj2[e] = 1;
    } else {
      obj2[e] += 1;
    }
  });

  const arrKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];

  return arrKeys.map((e) => {
    if (obj1[e] + obj2[e]) {
      return (obj1[e] > obj2[e]) ? obj2[e] : obj1[e];
    }
    return 0;
  }).reduce((sum, elem) => sum + elem);
}

module.exports = getCommonCharacterCount;

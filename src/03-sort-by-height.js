function sortByHeight(arr) {
  let i = 0;
  const arrSortWhithHeight = arr.filter((item) => (item !== -1)).sort((a, b) => a - b);
  const result = [];

  arr.forEach((e) => {
    if (e === -1) {
      result.push(e);
    } else {
      result.push(arrSortWhithHeight[i++]);
    }
  });

  return result;
}

module.exports = sortByHeight;

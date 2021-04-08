function deleteDigit(n) {
  const array = [...n.toString()];
  const arraySort = array.map((e) => +e).sort((a, b) => a - b);
  const numForDelete = arraySort[0].toString();

  const i = array.findIndex((e) => (e === numForDelete));

  const resultArray = array.map((e, z) => {
    let elem = null;
    if (z !== i) { elem = e; }
    return elem;
  });

  const result = +resultArray.join('');

  return result;
}

module.exports = deleteDigit;

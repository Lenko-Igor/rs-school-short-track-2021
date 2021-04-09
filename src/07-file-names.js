/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const copyName = names;
  const result = copyName.map((elem, i, arr) => {
    let count = 1;

    for (let z = i + 1; z < arr.length; z++) {
      if (elem === arr[z]) {
        copyName[z] = `${elem}(${count})`;
        count++;
      }
    }
    return elem;
  });

  return result;
}

module.exports = renameFiles;

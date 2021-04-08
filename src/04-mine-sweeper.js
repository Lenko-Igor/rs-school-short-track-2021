function minesweeper(matrix) {
  const result = [];

  matrix.forEach((elem, i, arr) => {
    const lastInd = arr.length - 1;

    if (i === 0) {
      const newRow = elem.map((e, z, row) => {
        const lastZ = elem.length - 1;
        let x = 0;

        if (z === 0) {
          if (row[z + 1]) { x += 1; }
          if (arr[i + 1][z]) { x += 1; }
          if (arr[i + 1][z + 1]) { x += 1; }
        } else if (z === lastZ) {
          if (row[lastZ - 1]) { x += 1; }
          if (arr[i + 1][lastZ]) { x += 1; }
          if (arr[i + 1][lastZ - 1]) { x += 1; }
        } else {
          if (row[z - 1]) { x += 1; }
          if (row[z + 1]) { x += 1; }
          if (arr[i + 1][z]) { x += 1; }
          if (arr[i + 1][z + 1]) { x += 1; }
          if (arr[i + 1][z - 1]) { x += 1; }
        }

        return x;
      });

      result[i] = newRow;
    } else if (i === lastInd) {
      const newRow = elem.map((e, z, row) => {
        const lastZ = elem.length - 1;
        let x = 0;

        if (z === 0) {
          if (row[z + 1]) { x += 1; }
          if (arr[i - 1][z]) { x += 1; }
          if (arr[i - 1][z + 1]) { x += 1; }
        } else if (z === lastZ) {
          if (row[lastZ - 1]) { x += 1; }
          if (arr[i - 1][lastZ]) { x += 1; }
          if (arr[i - 1][lastZ - 1]) { x += 1; }
        } else {
          if (row[z - 1]) { x += 1; }
          if (row[z + 1]) { x += 1; }
          if (arr[i - 1][z]) { x += 1; }
          if (arr[i - 1][z + 1]) { x += 1; }
          if (arr[i - 1][z - 1]) { x += 1; }
        }

        return x;
      });

      result[i] = newRow;
    } else {
      const newRow = elem.map((e, z, row) => {
        const lastZ = elem.length - 1;
        let x = 0;

        if (z === 0) {
          if (row[z + 1]) { x += 1; }
          if (arr[i - 1][z]) { x += 1; }
          if (arr[i - 1][z + 1]) { x += 1; }
          if (arr[i + 1][z]) { x += 1; }
          if (arr[i + 1][z + 1]) { x += 1; }
        } else if (z === lastZ) {
          if (row[lastZ - 1]) { x += 1; }
          if (arr[i - 1][lastZ]) { x += 1; }
          if (arr[i - 1][lastZ - 1]) { x += 1; }
          if (arr[i + 1][lastZ]) { x += 1; }
          if (arr[i + 1][lastZ - 1]) { x += 1; }
        } else {
          if (row[z - 1]) { x += 1; }
          if (row[z + 1]) { x += 1; }
          if (arr[i - 1][z]) { x += 1; }
          if (arr[i - 1][z + 1]) { x += 1; }
          if (arr[i - 1][z - 1]) { x += 1; }
          if (arr[i + 1][z]) { x += 1; }
          if (arr[i + 1][z + 1]) { x += 1; }
          if (arr[i + 1][z - 1]) { x += 1; }
        }

        return x;
      });

      result[i] = newRow;
    }
  });

  return result;
}

module.exports = minesweeper;

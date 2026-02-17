const arr = [4, 2, 9, 1, 5];

function getMaxAndMin() {
  let min = Infinity;
  let max = -Infinity;

  for (let item = 0; item < arr.length; item++) {
    if (arr[item] > max) {
      max = arr[item];
    }

    if (arr[item] < min) {
      min = arr[item];
    }
  }

  return { min, max };
}

const res = getMaxAndMin();
console.log(res);

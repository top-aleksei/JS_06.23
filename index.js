// Task 1

Array.prototype.customFilter = function (fn, context) {
  if (!fn || typeof fn !== 'function') {
    throw new Error('Invalid argument.');
  } else if ((context && typeof context !== 'object') || context === null) {
    throw new Error('Invalid argument.');
  } else {
    const filteredArr = [];
    for (let i = 0; i < this.length; i++) {
      if (fn.call(context, this[i], i, this)) {
        filteredArr.push(this[i]);
      }
    }
    return filteredArr;
  }
};

// Task 2

function bubbleSort(arr) {
  if (!arr.every((el) => isFinite(el) && !isNaN(el) && typeof el === 'number')) {
    throw new Error('Invalid argument.');
  }
  const results = arr.slice();
  for (let i = 0; i < results.length - 1; i++) {
    for (let j = 0; j < results.length - i; j++) {
      if (results[j] > results[j + 1]) {
        let temp = results[j];
        results[j] = results[j + 1];
        results[j + 1] = temp;
      }
    }
  }
  return results;
}

// Task 3

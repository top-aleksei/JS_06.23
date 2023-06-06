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

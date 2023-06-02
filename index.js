// Task 1

function makeDeepCopy(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    throw new Error();
  } else {
    return makeDeepCopyWithoutValidation(obj);
  }
}

function makeDeepCopyWithoutValidation(obj) {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  } else {
    if (obj instanceof Map) {
      cloneObj = new Map();
      for (const [key, value] of obj.entries()) {
        cloneObj.set(key, makeDeepCopyWithoutValidation(value));
      }
      return cloneObj;
    } else if (obj instanceof Set) {
      cloneObj = new Set();
      for (const value of obj.values()) {
        cloneObj.add(makeDeepCopyWithoutValidation(value));
      }
      return cloneObj;
    } else {
      const cloneObj = Array.isArray(obj) ? [] : {};
      for (const key in obj) {
        cloneObj[key] = makeDeepCopyWithoutValidation(obj[key]);
      }
      return cloneObj;
    }
  }
}

// Task 2

// const test = {
//   name: 'top',
//   cont: {
//     main: {
//       work: '23',
//       home: 12,
//     },
//   },
// };
// const test2 = {
//   name: 'top',
//   main: {
//     work: ['asd', { ob: 'test' }],
//     home: 12,
//   },
// };

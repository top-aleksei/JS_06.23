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

function createIterable(from, to) {
  const args = [...arguments];
  if (
    args.length != 2 ||
    !args.every(
      (el) =>
        typeof el === 'number' && Number.isFinite(el) && !Number.isNaN(el) && Number.isInteger(el),
    ) ||
    to <= from
  ) {
    throw new Error('');
  } else {
    return {
      from: from,
      to: to,
      [Symbol.iterator]: function () {
        return {
          current: this.from,

          next() {
            if (this.current <= to) {
              return { value: this.current++, done: false };
            } else {
              return { done: true };
            }
          },
        };
      },
    };
  }
}

// Task 3

function createProxy(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    throw new Error();
  } else {
    const proxyHandlers = {
      get(target, property) {
        if (
          target[property] &&
          !target[property].readAmount &&
          target[property]?.readAmount !== 0
        ) {
          const tempValue = target[property];
          target[property] = { value: tempValue, readAmount: 0 };
        }
        target[property].readAmount++;
        return target[property];
      },
      set(target, prop, value) {
        if (target[prop]) {
          if (typeof target[prop].value === typeof value) {
            target[prop].value = value;
          } else {
            return;
          }
        } else {
          target[prop] = { value: value, readAmount: 0 };
        }
      },
    };
    const proxy = new Proxy(obj, proxyHandlers);
    return proxy;
  }
}

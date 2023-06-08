function createDebounceFunction(cb, num) {
  if (arguments.length != 2) {
    console.log('ups');
  }
  if (typeof cb !== 'function') {
    console.log('ups cb');
  }
  if (
    typeof num !== 'number' ||
    isNaN(num) ||
    !isFinite(num) ||
    num < 0 ||
    !Number.isInteger(num)
  ) {
    console.log('ups num', num);
  }
  let timerFn;
  let timerValue;
  return () => {
    console.log('inFu');
    if (timerFn) {
      clearTimeout(timerFn);
    }
    timerFn = setTimeout(() => {
      cb.call(this);
    }, num);
  };
}

const fn = () => {
  console.log('fn1');
};
const deb = createDebounceFunction(fn, 6000);
deb();

setTimeout(deb, 3000);
// createDebounceFunction(() => {}, 'a');
// createDebounceFunction(() => {}, 0);
// createDebounceFunction(() => {}, 0.5);
// createDebounceFunction(() => {}, Infinity);
// createDebounceFunction(() => {}, 10);
// createDebounceFunction(() => {}, -10);
// createDebounceFunction(() => {}, -Infinity);
// createDebounceFunction(() => {}, NaN);

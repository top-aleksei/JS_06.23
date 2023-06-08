// Task 1

function createDebounceFunction(cb, time) {
  if (arguments.length != 2) {
    throw new Error('Invalid argument.');
  }
  if (typeof cb !== 'function') {
    throw new Error('Invalid argument.');
  }
  if (
    typeof time !== 'number' ||
    isNaN(time) ||
    !isFinite(time) ||
    time < 0 ||
    !Number.isInteger(time)
  ) {
    throw new Error('Invalid argument.');
  }
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb.call(this);
    }, time);
  };
}

// const fn = () => {
//   console.log('fn1');
// };
// const deb = createDebounceFunction(fn, 6000);
// deb();

// setTimeout(deb, 3000);
// createDebounceFunction(() => {}, 'a');
// createDebounceFunction(() => {}, 0);
// createDebounceFunction(() => {}, 0.5);
// createDebounceFunction(() => {}, Infinity);
// createDebounceFunction(() => {}, 10);
// createDebounceFunction(() => {}, -10);
// createDebounceFunction(() => {}, -Infinity);
// createDebounceFunction(() => {}, NaN);

// Task 2

class RickAndMorty {
  ENDPOINT = 'https://rickandmortyapi.com/api/';
  getCharacter(id) {
    if (!isValidNumber(id)) {
      throw new Error('Invalid character id');
    }
    fetch(`${this.ENDPOINT}character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        return data.error ? null : data;
      });
    // .then((res) => console.log(res));
  }
  async getEpisode(id) {
    if (!isValidNumber(id)) {
      throw new Error('Invalid episode id');
    }
    try {
      const response = await fetch(`${this.ENDPOINT}episode/${id}`);
      const data = await response.json();
      const result = data.error ? null : data;
      console.log(result);
    } catch {
      throw new Error('Err on fetching episode');
    }
  }
}

const rick = new RickAndMorty();
// console.log('rick.endpoint: ', rick.ENDPOINT);
// rick.getCharacter(1050);
// rick.getEpisode(25);

// number validation(positive, integer, finite, notNaN)

function isValidNumber(num) {
  console.log(typeof num);
  return (
    typeof num === 'number' && !isNaN(num) && isFinite(num) && num >= 0 && Number.isInteger(num)
  );
}
// console.log(isValidNumber(5));
// console.log(isValidNumber(-5));
// console.log(isValidNumber('5'));
// console.log(isValidNumber(NaN));
// console.log(isValidNumber(2.3));

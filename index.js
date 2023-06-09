// Task 1

function createDebounceFunction(cb, time) {
  if (arguments.length != 2) {
    throw new Error('Invalid argument.');
  }
  if (typeof cb !== 'function') {
    throw new Error('Invalid argument.');
  }
  if (!isValidNumber(time)) {
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
      })
      .catch(() => null);
  }

  async getEpisode(id) {
    if (!isValidNumber(id)) {
      throw new Error('Invalid episode id');
    }
    try {
      const response = await fetch(`${this.ENDPOINT}episode/${id}`);
      const data = await response.json();
      return data.error ? null : data;
    } catch {
      return null;
    }
  }
}

// UTILS
// number validation(positive, integer, finite, notNaN)

function isValidNumber(num) {
  return (
    typeof num === 'number' && !isNaN(num) && isFinite(num) && num >= 0 && Number.isInteger(num)
  );
}

class Stack {
  limit;
  stack = [];
  size = 0;
  constructor(limit = 10) {
    if (limit && !isValidNumber(limit)) {
      throw new Error('wrong limit');
    }

    this.limit = limit;
  }

  push(el) {
    if (this.size >= this.limit) {
      throw new Error('Limit exceeded');
    }
    this.stack = [...this.stack, el];
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      throw new Error('Empty stack');
    }
    const lastEl = this.stack[this.size - 1];
    this.size--;
    let tempArr = [];
    for (let i = 0; i < this.size; i++) {
      tempArr = [...tempArr, this.stack[i]];
    }
    this.stack = tempArr;
    return lastEl;
  }

  peek() {
    const lastEl = this.stack[this.size - 1];
    return lastEl ? lastEl : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    return [...this.stack];
  }

  static fromIterable(iterable) {
    if (!Symbol.iterator in Object(iterable)) {
      throw new Error('Not iterable');
    }

    const iterableLength = 0;
    for (const el of iterable) {
      iterableLength++;
    }
    const resultStack = new Stack(iterableLength);
    for (const val of iterable) {
      resultStack.push(val);
    }
    return resultStack;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(el) {
    const newNode = { value: el, next: null };
    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  prepend(el) {
    const newNode = { value: el, next: null };
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  find(el) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === el) {
        return currentNode.value;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  toArray() {
    const res = [];
    let currentNode = this.head;
    while (currentNode) {
      res.push(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  static fromIterable(iterable) {
    if (!Symbol.iterator in Object(iterable)) {
      throw new Error('Not iterable');
    }
    const newList = new LinkedList();
    for (const val of iterable) {
      newList.append(val);
    }
    return newList;
  }
}

class Car {
  #brand = '';
  #model = '';
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20;
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;

  get brand() {
    return this.#brand;
  }

  set brand(val) {
    if (typeof val != 'string' || val.trim().length < 1 || val.trim().length > 50) {
      throw new Error('Invalid brand name');
    }
    this.#brand = val.trim();
  }

  get model() {
    return this.#model;
  }

  set model(val) {
    if (typeof val != 'string' || val.trim().length < 1 || val.trim().length > 50) {
      throw new Error('Invalid model name');
    }
    this.#model = val.trim();
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(val) {
    if (!isValidNumber(val) || val > new Date().getFullYear() || val < 1950) {
      throw new Error('Invalid year of manufacturing');
    }
    this.#yearOfManufacturing = val;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(val) {
    if (!isValidNumber(val) || val < 100 || val > 330) {
      throw new Error('Invalid max speed');
    }
    this.#maxSpeed = val;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(val) {
    if (!isValidNumber(val) || val < 20 || val > 100) {
      throw new Error('Invalid max fuel volume');
    }
    this.#maxFuelVolume = val;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(val) {
    if (!isValidNumber(val) || val <= 0) {
      throw new Error('Invalid fuel consumption');
    }
    this.#fuelConsumption = val;
  }

  get damage() {
    return this.#damage;
  }

  set damage(val) {
    if (!isValidNumber(val) || val < 1 || val > 5) {
      throw new Error('Invalid damage');
    }
    this.#damage = val;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  get healt() {
    return this.#health;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Car has already started');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error("Car hasn't started yet");
    }
    this.#isStarted = false;
  }

  fillUpGasTank(val) {
    if (!isValidNumber(val) || val <= 0) {
      throw new Error('Invalid fuel amount');
    }
    if (this.#currentFuelVolume + val > this.#maxFuelVolume) {
      throw new Error('Too much fuel');
    }
    if (this.#isStarted) {
      throw new Error('You have to shut down your car first');
    }
    this.#currentFuelVolume += val;
  }

  drive(speed, duration) {
    if (!isValidNumber(speed) || speed <= 0) {
      throw new Error('Invalid speed');
    }
    if (!isValidNumber(duration) || duration <= 0) {
      throw new Error('Invalid duration');
    }
    if (speed > this.#maxSpeed) {
      throw new Error("Car can't go this fast");
    }
    if (!this.#isStarted) {
      throw new Error('You have to start your car first');
    }

    const distance = speed * duration;
    const reqiredFuel = (distance * this.#fuelConsumption) / 100;
    const reqiredHealth = (distance * this.#damage) / 100;

    if (reqiredFuel > this.#currentFuelVolume) {
      throw new Error("You don't have enough fuel");
    }
    if (reqiredHealth > this.#health) {
      throw new Error('Your car won’t make it');
    }

    this.#currentFuelVolume -= reqiredFuel;
    this.#health -= reqiredHealth;
    this.#mileage += distance;
  }

  repair() {
    if (this.#isStarted) {
      throw new Error('You have to shut down your car first');
    }
    if (this.#currentFuelVolume != this.#maxFuelVolume) {
      throw new Error('You have to fill up your gas tank first');
    }
    this.#health = 100;
  }

  getFullAmount() {
    return this.#maxFuelVolume - this.#currentFuelVolume;
  }
}

// UTILS
function isValidNumber(num) {
  return (
    typeof num === 'number' && !isNaN(num) && isFinite(num) && num >= 0 && Number.isInteger(num)
  );
}

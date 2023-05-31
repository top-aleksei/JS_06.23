function getDistance(aX, aY, bX, bY) {
  const args = [...arguments];
  if (args.length !== 4 || !args.every((el) => Math.abs(el) <= 1000 && typeof el === 'number')) {
    throw new Error();
  } else {
    const res = ((bX - aX) ** 2 + (bY - aY) ** 2) ** (0.5).toFixed(2);
    const trunkRes = Math.trunc(res * 100) / 100;
    return trunkRes;
  }
}

function switchPlaces(arg) {
  if (!Array.isArray(arg)) {
    throw new Error();
  } else {
    const middleIndex = Math.trunc(arg.length / 2);
    if (arg.length % 2 === 0) {
      return [...arg.slice(middleIndex, arg.length), ...arg.slice(0, middleIndex)];
    } else {
      return [
        ...arg.slice(middleIndex + 1, arg.length),
        arg[middleIndex],
        ...arg.slice(0, middleIndex),
      ];
    }
  }
}

function getDivisors(num) {
  if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
    throw new Error();
  } else {
    const results = [];
    for (let i = Math.abs(num); i > 0; i--) {
      if (num % i === 0) {
        results.push(i);
      }
    }
    return results;
  }
}

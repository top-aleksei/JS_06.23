function getDistance(aX, aY, bX, bY) {
  const args = [...arguments]
if (args.length !== 4 || !args.every(el => Math.abs(el) <= 1000 && typeof el === 'number')) {
  // throw new Error('oups')
  console.log('oups: ');
} else {
  const res = ((bX - aX)**2 + (bY - aY)**2)**0.5.toFixed(2)
  const trunkRes = Math.trunc(res * 100) / 100
  console.log(res);
  console.log(trunkRes);
}
}

function switchPlaces(arg) {
if (!Array.isArray(arg)) {
console.log('ups');
} else if (arg.length === 0) {
   console.log(arg);
  return arg
} else {
  const middleIndex = Math.trunc(arg.length / 2)
  if(arg.length % 2 === 0) {
    console.log([...arg.slice(middleIndex, arg.length), ...arg.slice(0, middleIndex)]);
  } else {
    console.log([...arg.slice(middleIndex + 1, arg.length), arg[middleIndex], ...arg.slice(0, middleIndex)]);
  }

}
}

// getDistance(15, 8, -4.5, -9000)

// switchPlaces([1, 2, 3, 4, 5])
// switchPlaces([1, 2, 3, 4, 5, 6])
// switchPlaces({})
// switchPlaces([1, 3])


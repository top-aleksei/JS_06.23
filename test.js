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

getDistance(15, 8, -4.5, -9000)
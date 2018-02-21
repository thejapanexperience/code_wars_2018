const sumOfDivided = nums => {
  console.log('nums: ', nums);
  let obj = {}

  nums.forEach(num => {
    let numFactors = factors(num)
    numFactors.forEach( primeFactor => {
      if (!obj[primeFactor]) {
        obj[primeFactor] = 0
      }
      obj[primeFactor] += num
    })
  })

  console.log(Object.keys(obj).map(key => {
    return [Number(key), obj[key]]
  }));

  return Object.keys(obj).map(key => {
    return [Number(key), obj[key]]
  });
}

const isPrime = num => {
  // console.log('isPrime num: ', num);
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false;
    return num !== 1;
}

const factors = num => {
  num < 0 ? num *= -1 : num
  const half = Math.floor(num / 2)
  let factorsArr = []
  let i, j;
  // Determine our increment value for the loop and starting point.
  num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);
  for (i; i <= half; i += j) {
    num % i === 0 && isPrime(i) ? factorsArr.push(i) : false;
  }
  factorsArr.length === 0 ? factorsArr.push(num) : false
  return(factorsArr);
}

sumOfDivided([12,15])
sumOfDivided([15,21,24,30,45]);
sumOfDivided([15, 30, -45]);
sumOfDivided([ 107, 158, 204, 100, 118, 123, 126, 110, 116, 100 ]);

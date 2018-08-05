// triangle number generator
const triangleNumber = n => {
  if (n == 1) {
    return 1;
  } else {
    return triangleNumber(n - 1) + n;
  }
};

//  returns an array inhabitated with prime divisors of our number
const getAllPrimeFactors = number => {
  let helper = [];
  while (number % 2 == 0) {
    number = number / 2;
    helper.push(2);
  }
  while (number % 3 == 0) {
    number = number / 3;
    helper.push(3);
  }
  let divizor = 6;
  while (number != 1) {
    let smaller = divizor - 1;
    let bigger = divizor + 1;
    while (number % smaller == 0) {
      number = number / smaller;
      helper.push(smaller);
    }
    while (number % bigger == 0) {
      number = number / bigger;
      helper.push(bigger);
    }
    divizor += 6;
  }
  return helper;
};
// calculates number of divisor (see fundamental theorem of arithmetics)
const getNumberOfDivisors = number => {
  let primes = getAllPrimeFactors(number);
  let numberOfDivisors = 1;
  let i = 0;
  let counter = 1;
  while (i < primes.length) {
    if (primes[i] == primes[i + 1]) {
      counter++;
      i++;
    } else {
      numberOfDivisors *= counter + 1;
      counter = 1;
      i++;
    }
  }
  return numberOfDivisors;
};

// program
let i = 1;
while (true) {
  if (getNumberOfDivisors(triangleNumber(i)) > 500) {
    break;
  }
  i++;
}
console.log(triangleNumber(i));

let number = 600851475143;
let biggestPrime = 0;
let divizor = 6;
while (number != 1) {
  let smaller = divizor - 1;
  let bigger = divizor + 1;
  while (number % smaller == 0) {
    number = number / smaller;
    biggestPrime = smaller;
  }
  while (number % bigger == 0) {
    number = number / bigger;
    biggestPrime = bigger;
  }
  divizor = divizor + 6;
}
console.log(biggestPrime);
// notice that for all primes (except 2 and 3) p = 6*k + 1 or p = 6*k - 1,
// where k is a natural number

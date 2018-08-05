// read: https://brilliant.org/wiki/sum-of-n-n2-or-n3/
let n = 100;
let sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
let squareOfSum = ((n * (n + 1)) / 2) ** 2;
console.log(
  `The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is ${squareOfSum -
    sumOfSquares}`
);

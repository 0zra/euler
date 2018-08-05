let first = (1 + 5 ** (1 / 2)) / 2;
let second = (1 - 5 ** (1 / 2)) / 2;
let n = 0;
let sum = 0;
let fib = 0;

while (fib < 4 * 10 ** 6) {
  fib = Math.round((first ** n - second ** n) / 5 ** (1 / 2));
  if (fib % 2 == 0) {
    sum += fib;
  }
  n += 1;
}
console.log(sum);
// theory behind the madness: https://en.wikipedia.org/wiki/Fibonacci_number

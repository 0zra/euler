const isPrime = number => {
  for (let i = 2; i <= number ** (1 / 2) + 1; i++) {
    if (number % i == 0) return false;
  }
  return true;
};

let sum = 2 + 3;

for (let i = 6; i < 2 * 10 ** 6; i = i + 6) {
  if (isPrime(i - 1)) {
    sum = sum + i - 1;
  }
  if (isPrime(i + 1)) {
    sum = sum + i + 1;
  }
}
console.log(sum);

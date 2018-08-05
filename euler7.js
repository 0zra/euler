const isPrime = number => {
  for (let i = 2; i <= number ** (1 / 2); i++) {
    if (number % i == 0) return false;
  }
  return true;
};

let counter = 2; // skipping 2 and 3
let i = 6;
while (counter != 10001) {
  if (isPrime(i - 1)) {
    counter++;
    if (counter == 10001) {
      i = i - 1;
      break;
    }
  }
  if (isPrime(i + 1)) {
    counter++;
    if (counter == 10001) {
      i = i + 1;
      break;
    }
  }
  i += 6;
}
console.log(`10001s prime is ${i}`);

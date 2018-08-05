const solution = {
  sequenceLength: 0,
  number: 1
};
const nextNumber = number => {
  if (number % 2 == 0) {
    return number / 2;
  } else {
    return 3 * number + 1;
  }
};

for (let i = 2; i < 10 ** 6; i++) {
  let counter = 1;
  let number = i;
  while (true) {
    if (number == 1) {
      break;
    } else {
      number = nextNumber(number);
      counter++;
    }
  }
  if (counter > solution.sequenceLength) {
    solution.sequenceLength = counter;
    solution.number = i;
  }
}

console.log(solution.number);

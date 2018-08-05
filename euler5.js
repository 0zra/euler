// see euler3.js for expalanation
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
// the original problem was trivial so I generalised it
//you can substitute n with any natural number
let smallestDivisible = 1;
let n = 20;
for (let i = 2; i <= n; i++) {
  let helper = smallestDivisible;
  let divisorsOfDivisor = getAllPrimeFactors(i);
  divisorsOfDivisor.forEach(function(item) {
    if (helper % item != 0) {
      smallestDivisible *= item;
    } else {
      helper = helper / item;
    }
  });
}
console.log(smallestDivisible);

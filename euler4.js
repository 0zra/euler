"use strict";
/*breaks for 17+ digit numbers, read:
https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin

*/
const isPalindrome = number => {
  let helperVariable = number.toString().split("");
  while (helperVariable.length > 1) {
    let first = helperVariable.shift();
    let last = helperVariable.pop();
    if (first !== last) {
      return false;
    }
  }
  return true;
};

let helperArray = [];
for (let i = 999; i > 100; i--) {
  for (let j = i; j > 100; j--) {
    if (isPalindrome(i * j)) {
      helperArray.push(i * j);
    }
    if (i * j < Math.max(...helperArray)) {
      break;
    }
  }
}
console.log(
  `${Math.max(
    ...helperArray
  )} is the largest palidrome made as a product of two 3-digit numbers`
);

'use strict'

function maxDivide(number, divisible) { //replace maxDivides to maxDivide
  while (number % divisible == 0) {
    number = number / divisible;
  }
  return number;//replace numbers to number
}

function isUgly(numberUgly) {
  numberUgly = maxDivide(numberUgly, 2);
  numberUgly = maxDivide(numberUgly, 3);
  numberUgly = maxDivide(numberUgly, 5);

  return (numberUgly == 1) ? true : false; // replace numbers to numberUgly
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; // ugly number count // remove ==

  while (input > countUglyNumber) {
    i++;
    if (isUgly(i) == 1) {
      countUglyNumber++; // replace counts to countUglyNumber
    }
  }
  return i; // remove return to out while
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24

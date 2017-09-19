'use strict'
//replace maxDivides with maxDivide
function maxDivide(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
  }
  return number; //removed s
}

function isUgly(numberUgly) {
  numberUgly = maxDivide(numberUgly, 2);
  numberUgly = maxDivide(numberUgly, 3);
  numberUgly = maxDivide(numberUgly, 5);
  return (numberUgly == 1) ? true : false;
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; // ugly number count //replaced == with =

  while(input > countUglyNumber) {
    debugger;
    i++;
    if(isUgly(i) == 1) {
      countUglyNumber++;
    }

  }
  return i
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(3)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24

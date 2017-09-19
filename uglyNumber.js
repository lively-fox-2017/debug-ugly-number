'use strict'

function maxDivide(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
  }
  // console.log(number);
  return number;
}

function isUgly(numberUgly) {
  numberUgly = maxDivide(numberUgly, 2);
  numberUgly = maxDivide(numberUgly, 3);
  numberUgly = maxDivide(numberUgly, 5);
// console.log(numberUgly);
  return (numberUgly == 1)? true:false ;
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; // ugly number count
let newArr=[]//
  while(input > countUglyNumber) {
    i++;
    // console.log(input);
    if(isUgly(i) == 1) {
      countUglyNumber++;
      if(newArr<2){//
        newArr.push(1,i)//
      }
    }
  }
  return i
}

//driver code
console.log(getUglyNo(7)); //8
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24

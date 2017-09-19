'use strict'

function maxDivides(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
  }
  return number; //kelebihan s
}

function isUgly(numberUgly) {
  numberUgly = maxDivides(numberUgly, 2); //kurang s
  numberUgly = maxDivides(numberUgly, 3); //kurang s
  numberUgly = maxDivides(numberUgly, 5); //kurang s

  return (numberUgly == 1) ? true : false; //number ganti dengan "numberUgly" dan ditambah '=' equals
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; // ugly number count //kelebihan 1

  while(input > countUglyNumber) {
    i++;
    if(isUgly(i) == 1) {
      countUglyNumber++; //counts diganti "countUglyNumber"
    }
  }
  return i; //return ditaro diluar while
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24

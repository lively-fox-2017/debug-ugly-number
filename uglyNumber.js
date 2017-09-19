/*
fungsi untuk mecari angka ugly
*/
'use strict'

function maxDivides(number, divisible) {
  //lakukan perulangan jika number mod divisible == 0
  while(number % divisible == 0) {
    //assign number dengan number / divisible
    number = number / divisible;
  }
  //retun hasil number
  return number;
}

function isUgly(numberUgly) {
  //assign numberUgly dengan maxDivides(numberUgly,2)
  numberUgly = maxDivides(numberUgly, 2);
  //assign numberUgly dengan maxDivides(numberUgly,3)
  numberUgly = maxDivides(numberUgly, 3);
  //assign numberUgly dengan maxDivides(numberUgly,5)
  numberUgly = maxDivides(numberUgly, 5);
  //return true jika numberUgly === 1 dan false jika sebaliknya
  return (numberUgly === 1) ? true : false;// salah 1
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1;//salah 2

  //lakukan perulangan jika input > countUglyNumber
  while(input > countUglyNumber) {
    //tambahakan nilai i
    i++;//console.log(i);
    //cek jika isUgly(i) == true
    if(isUgly(i) == true) {
      //tambahakan countUglyNumber
      countUglyNumber++; //console.log('c='+countUglyNumber);
      // console.log(i);
    }
    //salah3
  }
  //return i
  return i;
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24

// console.log(getUglyNo(7)); //8

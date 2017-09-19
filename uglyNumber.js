'use strict'

function maxDivides(number, divisible) {
  while(number % divisible == 0) {
    number /= divisible;
  }
  return number;
}

function isUgly(numberUgly) { // cek satu2, numberUgly sehingga menghasilkan return 1 , cek nya dengan menjalankan function maxDivides
  numberUgly = maxDivides(numberUgly, 2);
  numberUgly = maxDivides(numberUgly, 3);
  numberUgly = maxDivides(numberUgly, 5);

  return (numberUgly = 1) ? true : false; // jika true lanjut cek ke function getUglyNo, jika false cek ke maxDivides yg selanjutnya
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; // ugly number count

  while(input > countUglyNumber) { // cek input selama masih lebih dari countUglyNumber, jika ya
    i++; // i naik 1
    if(isUgly(i) == 1) { // cek ke function isUgly apakah i nya =1, jika ya countUglyNumber nambah 1
      countUglyNumber++;
    }
  }
  return i;
}

// uglyNumber adalah bilangan yang habis dibagi 2, 3, 5
//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24

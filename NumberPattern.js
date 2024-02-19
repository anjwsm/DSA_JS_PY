function simpleNumberTriangle(n) {
  let currentNumber = 1;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(currentNumber.toString() + " ");
      currentNumber++;
    }
    process.stdout.write("\n");
  }
}
// simpleNumberTriangle(5);
function simpleOddNumberTriangle(n) {
  let currentNumber = 1;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(currentNumber.toString() + " ");
      currentNumber += 2;
    }
    process.stdout.write("\n");
  }
}
// simpleOddNumberTriangle(5);

function binaryPyramid1(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      if (j % 2 != 0) {
        process.stdout.write("1 ");
      } else {
        process.stdout.write("0 ");
      }
    }
    process.stdout.write("\n");
  }
}
// binaryPyramid1(5)

function binaryPyramid2(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      if (i % 2 != 0 && j % 2 != 2) {
        process.stdout.write("1 ");
      } else if (i % 2 == 0 && j % 2 == 0) {
        process.stdout.write("1 ");
      } else {
        process.stdout.write("0 ");
      }
    }
    process.stdout.write("\n");
  }
}

// binaryPyramid2(5)

function repetitivePyramid(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      for (let m = 1; m <= i; m++) {
        process.stdout.write(i.toString());
      }
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}
// repetitivePyramid(5);

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimeTrianle(n) {
  let currentNumber = 1;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      while (!isPrime(currentNumber)) {
        currentNumber++;
      }
      process.stdout.write(currentNumber.toString() + ' ');
      currentNumber++;
    }
    process.stdout.write("\n");
  }
}
// printPrimeTrianle(5);
function multiplyTable(n){
  for(i=1 ; i<=10 ; i++){
    process.stdout.write((n*i).toString() + ' ');
  }
}

// multiplyTable(9)
function nthTerm(A1 , Al , n){
   let d = Al-A1 ;
   let An = A1 + (n-1)*d ;
  process.stdout.write(An.toString());

}

nthTerm(2,3,5)
//Function to print a square :

function printSquare(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
// printSquare(5);

//Function to print a left sided right angled triangle :

function rightAngledTriangle1(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
// rightAngledTriangle1(5);

//Function to print a right sided right angled triangle :

function rightAngledTriangle2(n) {
  for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// rightAngledTriangle2(5)

//Function to print an inverse left sided right angled triangle :

function inverseRightAngledTriangle1(n) {
  for (i = n; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
// inverseRightAngledTriangle1(5)

//Function to print an inverse right sided right angled triangle :

function inverseRightAngledTriangle2(n) {
  for (i = n; i >= 1; i--) {
    for (k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// inverseRightAngledTriangle2(5)

//Function to print a simple pyramid :

function simplePyramid(n) {
  for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (j = 1; j <= i; j++) {
      process.stdout.write(" *");
    }
    process.stdout.write("\n");
  }
}

// simplePyramid(5)

//Function to print a simple  inverse pyramid :

function simpleInversePyramid(n) {
  for (i = n; i >= 1; i--) {
    for (k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (j = 1; j <= i; j++) {
      process.stdout.write(" *");
    }
    process.stdout.write("\n");
  }
}
// simpleInversePyramid(5)

//Function to print a simple odd pyramid :

function simpleOddPyramid(n) {
  let m = 1;
  for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (j = 1; j <= m; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
    m += 2;
  }
}
// simpleOddPyramid(5)

//Function to print a simple inverse odd pyramid :

function inverseSimpleOddPyramid(n) {
  let m = 2 * n - 1;
  for (i = n; i >= 1; i--) {
    for (k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }

    for (j = m; j >= 1; j--) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
    m = m - 2;
  }
}

// inverseSimpleOddPyramid(5);

//Function to print a simple hollow right angled triangle :

function hollowRightAngledTriangle1(n){
    for(i=1 ; i <= n ; i++){
        for (j=1 ; j<= i ; j++){
            if( j==1 || j == i || i==n){
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}
// hollowRightAngledTriangle1(7);

//Function to print a hollow inverse pyramid :

function hollowInversePyramid(n){
 
  for(i=n ; i>=1 ; i--){
    for(k=1 ; k <= n-i ; k++){
        process.stdout.write(" ");
    }
    for (j = 2*i -1 ; j >= 1; j--) {
        if (j === 2 * i - 1 || j === 1 || i === n) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
       
    }
   
    process.stdout.write("\n");

  }
}
// hollowInversePyramid(5)

function tiltedRhombus(n){
    for(i= 1; i <= n ; i++){
        for(k=1 ; k<= n-i ; k++){
            process.stdout.write(" ");
        }
        for(j=1 ; j<=n ; j++){
            process.stdout.write("* ");
        }
        process.stdout.write("\n");
    }
}
// tiltedRhombus(5);


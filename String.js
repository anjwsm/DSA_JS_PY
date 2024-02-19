//Length , slice  and character code:

//let text = "Hello world";
// let length = text.length ;
// console.log(length)

// let result = text.slice(0,5);
// console.log(result)

//  let code = text.charCodeAt(3);
//  console.log(code);

//  let char = String.fromCharCode(65);
//  console.log(char);

// let text = "Visit Microsoft ";
// let result = text.replace("Microsoft", "W3Schools");
// console.log(result) ;

// const fruits = [ "Banana", " Orange", "Apple", "Mango"]
// const keys = Object.keys(fruits);
// console.log(keys);

// const object1= {
//    a: 'Anjali',
//    b: '20',
// c: 'true',
// }
// console.log(Object.values(object1));
// console.log(Object.keys(object1));
// console.log(Object.entries(object1));

// const Employee = {
//    firstName : 'John',
//    lastName :'Doe',

// } ;
// delete Employee.firstName;
// console.log(Employee);

// const animals = ['dog','horse' , 'lion','cat'];
// animals.push('cow', 'goat');
// console.log(animals);
// console.log(animals.join());

// const array1 = [5  , 12 , 8 , 97 , 55];
// const found = array1.find((element) => element > 10);
// console.log(found);

//Mapping of array:
// const array1 = [1,3,5,7];
// const map1 = array1.map((x) => x*2);
// console.log(map1);

//Splitting of words and characters from a string :
// const str = 'Apple is red';
// const words = str.split(' ');
// console.log(words[2]);
// const chars= str.split('');
// console.log(chars[7]);

//  const array1 = [ 'a' , 'b', 'c'];c
//  array1.forEach((element) => console.log(element));

//Reduce method for arrays : here , initially acccumulator is 0 and currentValue is 1
// const array = [1,2,3,4];
// const sumWithInitial = array.reduce((accumulator, currentValue ) => {
//     return accumulator + currentValue ;
//  } , 0 );
// console.log(sumWithInitial);

//Function to find the length of an array and string :

// function countLength(input){
//    if( typeof input === 'string'){
//       return input.length ;
//    } else if
//    (Array.isArray(input)){
//       return input.length
//    }
// }

// let str = countLength("Anjali");
// console.log(str)

// let arr = countLength(['11' , '3' , '78' , "anj"])
// console.log(arr)

// function getLength(array){
//    let count = 0 ;
//    for(let element of array){
//       count++ ;
//    }
//    return count ;
// }

// function findLength(input){
//    let count = 0 ;
//    for(const value in input){
//       count++ ;
//    }
//    return count ;
// }
// let arr = ['67' , '543' , 'utr']
// let str = "Anjali"
// console.log(findLength(arr))

// function checkElementWithForLoop (array , key){
//    for ( i = 0 ; i < array.length ;i++){
//       if (array[i] === key){
//          return true ;
//       }

//    }
//    return false ;
// }

// function checkElementWithFind( array , key){
//    let result = array.find((element) => element === key) ;
//    if (result === key){
//       return true;
//    }
//    return false ;
// }
// let arr = ['1' , '4' , '5' , '7' ,'9'];
// let key = '9'

// console.log(checkElementWithFind(arr , key))
// const arr2 = [5, 393, 30, 2];
// const key2 =  3
// console.log(checkElementWithFind(arr2, key2));

// function printSquare(n){
//    let content =''
//    for (i=1 ; i<= n ; i++ ){
//       // process.stdout.write(String(i))
//       // process.stdout.write(i.toString())
//       // process.stdout.write(i.toString())
//       for(j=1 ; j <= n ; j++){
//          content=content+ ' *'  // stirng
//        }
//        content+='\n'

//    }
//    console.log(content)

// }
// printSquare(5);

// function printTriangle(n){
//     for( i = 1 ; i<= n ; i++){
//         for( j = 1 ; j <= i ; j++){
//           process.stdout.write(" * ")
//         }
//         process.stdout.write("\n")
//     }
// }

// printTriangle(5);

// function printInverseTriangle(n){
//     for ( i = n  ; i >= 1 ; i--){
//         for ( j= i ; j >=1  ; j--){
//             process.stdout.write("* ")
//         }
//          process.stdout.write("\n")
//     }
// }

// printInverseTriangle(5);

// function printPyramid(n){
//     let m = 1;
//     for( i = 1 ;  i <= n  ; i++){
//         for ( k = 1 ; k <= n - i ; k++){
//             process.stdout.write("  ")
//         }
//         for( j=1 ; j <= m ; j++){
//             process.stdout.write("* ")

//         }
//         process.stdout.write("\n");
//         m = m + 2 ;

//     }
// }

// printPyramid(5);

// function printInversePyramid(n){
//     let m = (n * 2) - 1 ;

//     for ( i = n ; i >= 1 ; i--){
//         for (k=1 ; k <= n - i ; k++){
//             process.stdout.write("  ")
//         }
//         for( j = 1 ; j <= m ; j++ ){
//             process.stdout.write("* ")
//         }
//         m = m-2 ;
//         process.stdout.write("\n")
//     }
// }

// printInversePyramid(5);

// function numberPyramid(n){
//     for(i=1 ; i<= n ; i++){

//         for( j=1 ; j <= i ; j++){
//             process.stdout.write(j.toString())
//             process.stdout.write(" ")
//         }

//         process.stdout.write("\n")
//     }
// }

// numberPyramid(5);

// function inverseNumberPyramid(n){
//     for(i=n ; i >= 1 ; i--){
//         for( j=1 ; j <= i ; j++){
//             process.stdout.write(j.toString())
//             process.stdout.write(" ")
//         }

//         process.stdout.write("\n")
//     }

// }
// inverseNumberPyramid(5)

function hollowPyramid(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      if (j == 1 || i == n || j == i) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }

    process.stdout.write("\n");
  }
}
// hollowPyramid(6)

function hollowNumberPyramid(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      if (j == 1 || i == n || j == i) {
        process.stdout.write(j.toString());
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}
// hollowNumberPyramid (6);
//  'A'.charCodeAt(0)
//  String.fromCodePoint(65)

function alphabetPyramid(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(i + 64));
    }
    process.stdout.write("\n");
  }
}

//alphabetPyramid(5)

function inverseAlphabetPyramid(n) {
  for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(i + 64));
    }
    process.stdout.write("\n");
  }
}
// inverseAlphabetPyramid(5);

function evenNumberPyramid(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      const evenNumber = 2 * i;
      process.stdout.write(evenNumber.toString() + " ");
    }
    process.stdout.write("\n");
  }
}

// evenNumberPyramid(5);

function simplePyramid(n) {
  for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}

// simplePyramid(5)

function simpleNumberPyramid(n) {
  let currentNumber = 1;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(currentNumber.toString() + " ");
      currentNumber++;
    }
    process.stdout.write("\n");
  }
}
// simpleNumberPyramid(4)

function xPyramid(n) {
  let u = n * 2 - 1;
  let d = 3;

  for (let i = n; i >= 1; i--) {
    for (let k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= u; j++) {
      process.stdout.write("*");
    }
    u -= 2;
    process.stdout.write("\n");
  }

  for (let i = 1; i <= n - 1; i++) {
    for (let k = 1; k <= n - i - 1; k++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= d; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
    d += 2;
  }
}

// xPyramid(4);

// function reverseString(inputString){
//     let reversedString = ' ' ;
//     for( i = inputString.length - 1; i>=0 ; i--){
//         reversedString += inputString[i];
//     }
//     return reversedString ;
// }

// let originalString = "anjali" ;
// console.log(reverseString(originalString) )


function printPattern(N) {
    let currentNumber = N ;
    for (let i = N; i >= 1; i--) {
        for (let j = 1; j <= N; j++) {
            for (let k = 1; k <= i; k++) {
                process.stdout.write(currentNumber.toString() + " ");
            }
            currentNumber -= 1 ;
           
        }
        process.stdout.write("\n");
        currentNumber = N ;
    }
}

printPattern(5) ;


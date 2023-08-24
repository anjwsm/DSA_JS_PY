// let n = 5;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(' ')
//   }
//   // printing stars
//   for (let k = 0; k < 2 * i - 1; k++) {
//     process.stdout.write('*')
//   }
//   console.log();
// }
// let input ;
// process.stdin.on('data', data => {
//      input =data;
//     // process.exit();
//     console.log(data.toString('utf-8'))
//   });
// https://www.educative.io/answers/how-to-print-a-pyramid-pattern-using-javascript


function printNumbersBetween (x,y){
    for (let i = x; i <=y ; i ++){
        console.log(i);
    }
}

// console.log (printNumbersBetween(2,6))


function printMessage(n){
    if ( n % 15 === 0){
        console.log("Ok Bye");
    }
  else if (n % 3 === 0){
        console.log( "Ok");
    }
   else if ( n % 5 === 0){
        console.log ("Bye");
    }
}
 // printMessage(15);
 // printMessage(9);
 // printMessage(10);
 // printMessage(30);
 // printMessage(5);
 // printMessage(12);

var age = 20;
 
// switch (age){
//     case 15:{
//         console.log("Go to school");
//         break;
//     }
//     case 20:{
//         console.log(" Welcome");
//         break;
//     }
//     case 25: {
//         console.log("Welcome to the college");
//         break;
//     }
//     default :{
//         console.log("It is invalid");
//         break;
//     }
// }

// console.log(age(15));


// for (let i =1; i< 20; i++){
//     if(i <10) continue;
//     console.log(i);
// }
// for( let i =1 ; i<20;i++){
    
//     console.log(i);

//     if(i==10) break;

// }




function printPyramid(n){

    for(let i=1;i<=n;i++){
        
        for(let j =1;j<=i;j++){
        
            process.stdout.write(' *');
        } 
        process.stdout.write('\n');
    }

}

// printPyramid(8);

function isPrime(n){
    // if (n <= 1){
    //     return false ;
    // }
    // if (n <= 3){
    //     return true;
    // }
    // if (n % 2 === 0 || n % 3 === 0){
    //     return false;
    // }
    // for (let i =5 ; i*i <= n; i += 6){
    //     if (n % i === 0 || n % (i+ 2)===0){
    //         return false;
    //     }
    // }
    // return true;

    let divisors =0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            divisors+=1;
           
        }
    }
    if(divisors==2) return true;
    else{
        return false;
    }
}

//console.log(isPrime(2));
// console.log(isPrime(17));
// console.log(isPrime(10));

function isEven(n){
    if (n % 2 === 0){
        return true;
    }
    else return false;
}
// console.log(isEven(8));
// console.log(isEven(11));

function isOdd(n){
    if (n % 2 !== 0){
        return true;
    }
    else return false;
}

// console.log(isOdd(5));
// console.log(isOdd(10));
// console.log(isOdd(7));

// function isCompleteNumber(n){
  //  if (n <= 0){
   //     return false;
  //  }
  //  let sumOfDivisors =0 ;
  //  for (let i = 1 ; i <= n ; i++){
  //      if ( n %  i === 0 ){
  //          sumOfDivisors += i;         
     //   }
   // }
   // return sumOfDivisors === 2*n;

//}


// function printNumberPyramids(n){
 //   for ( let i = 1; i <= n ; i ++){
 //       let n = ' ';
  //      for ( let j = 1 ; j <= i; j++)
   //     n += i + ' ';
  //  }
  //  console.log(n);
// }

// printNumberPyramids(5);

//  function printPyramid(n){
for (let i =1; i<= n; i++){
        let n ='';
        for (let j= 1; j<= i ; j++){
           n += i+ ' ';
        }
        console.log(n);

        i +=2;
    }
// }

//printPyramid(5);

 // function printNumberPyramid(n){

   //  for(i=1 ; i<= n; i++){
    //    for (let j=1 ; j<= n-i; j++){
      //      process.stdout.write(' ');
       // }
       // for (let j =1 ; j <= i; j++){
      //      process.stdout.write(String(i));
       // }
      //  process.stdout.write('\n');
    // }
// }
 // printNumberPyramid(5);




// function printPyramids(n){
 // for (i=1 ; i <= n ; i++){
 //   for(let j = 1 ; j <= 2 *i-1 ; j ++){
 //       process.stdout.write('*');
 //   }
 //   process.stdout.write('\n');
 // }
// }
// printPyramids(5);

 // function pyramid(n){
  //  for (i = 1 ; i <= n ; i ++){
    //    for( j = 1 ; j <= n ; j++){
     //       process.stdout.write('*');
      //  }
    // process.stdout.write('\n');
   // }
// }
// pyramid(5)

// let n= 5;
// for (i = 1; i <= n; i++){
  //  for(j = 1; j <= i; j++){
    //    process.stdout.write(String(Math.pow(i,j)));
   //  }
  //  process.stdout.write('\n');
// }

 // function letterPyramid(n){
//  for ( i = 1 ; i <= n ; i++){
  //   let aCode = 'A'.charCodeA+(0);
  //  for(j=1 ; j <= i ; j++){
 //  process.stdout.write(String.fromCharCode(aCode + i - 1));
  //  }
  //    process.stdout.write ('\n');
//  }
// }
//  console.log(letterPyramid(5));




 

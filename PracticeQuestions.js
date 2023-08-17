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
    if ( n % 3 == 0){
        console.log("Ok");
    }
    else if (n % 5 ==0){
        console.log( "Bye");
    }
    else if ( n % 15 == o){
        console.log ("Ok Bye");
    }
}

// console.log(printMessage(6))

var age = 20;
 
switch (age){
    case 15:{
        console.log("Go to school");
        break;
    }
    case 20:{
        console.log(" Welcome");
        break;
    }
    case 25: {
        console.log("Welcome to the college");
        break;
    }
    default :{
        console.log("It is invalid");
        break;
    }
}

console.log(age(15));


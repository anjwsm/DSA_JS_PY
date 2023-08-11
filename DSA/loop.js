//13. Sum of first n naturals numbers
function sumOfFirstNNaturalNUmbers(n){

    if(typeof n !='number'){
      return "Not A Natural  Number"
    }
    let result = 0;
    for ( let i=1 ; i<=n; i++){
        result = result +i;
    }
    return result
}
//  console.log( sumOfFirstNNaturalNUmbers('hdfd'));

 // 1. Factorial  of whole number;
 function factorial(n){
    let result = 1;
    for (let i = 1 ; i<=n ; i++){
        result = result * i
    }
    return result
 }
//  console.log(Factorial(5))

function multiplicationTable(n){
  
    for ( let i = 1 ; i<= 10 ; i++){
        console.log(n*i)
    }
    
}
// multiplicationTable(2);

// firat even numbers 
function firstEvenNumbers(n){
    for ( let i = 1; i<=n ; i++){
        console.log(2*i)
    }
}
// firstEvenNumbers(5)

function firstOddNumbers(n){
    for ( let i=1 ; i<=n ; i++){
        console.log((2*i)-1)
    }
}
// firstOddNumbers(5)

function sumOfSquare(n){
    let result = 0;
    for ( let i=1 ; i<=n ; i++ ){
        result = result + (i*i)
    }
    return result
}
// console.log(sumOfSquare(5))

function sumOfExponentials(n,m){
    let result = 0;
    for ( let i =1 ; i<=n ; i++){
        result = result + (i**m)
    }
    return result
}

function sumOfNthPower(n,m){

    let result =0;
    for(let i=1; i<=n;i++){
        
        let mthPower=1;
        for(let j=1;j<=m;j++){
            mthPower=mthPower*i
        }

        result= result + mthPower;
        
    }
    return result;
}
console.log(sumOfNthPower(3, 3))


// array questions
function getTheMaxOfThreeNumber(a,b,c){
    if (a>=b && a>=c) { 
        return a;
    }
    if (b>=a && b>=c){
        return b;
    }
    if (c>=a && c>=b){
        return c;
    }
    if (a=b=c){
        return a,b,c;
    }

}
// console.log(getTheMaxOfThreeNumbers(2,1,2))

function getMax(a,b){
   return a>b?a:b;
}
// console.log(getTheMaxOfTwoNumbers(5,5))

function getTheMaxOfThreeNumbers(a,b,c){
    


    return getMax(a, getMax(b,c));
    
}
console.log(getTheMaxOfThreeNumbers(829,9,0))



// function maxNumber(a,b){
//    a=a*20;
//    return a>b?a:b;
// }

// let x=2;
// let y =20;
// console.log(maxNumber(x,y));
// console.log(x);

// function papaMujheBachao(a){
//  a= {name:'GAness'}
//  return a;
// }

// const obj= {name:'MUKESH'};
// obj.name="ganesh";
// obj ={mom:'"Chanege mamama'}; 

// papaMujheBachao(obj);

// console.log(obj);



  let max =-1;
  let arr=[1,2,303,333,3];

  for(let i=0;i<arr.length;i++ ){
    if(arr[i]>max){
        max=arr[i];
    }
  }

  console.log(max);







  let arr2=[1,10,6,1000];

max=-1;
for (let index = 0; index < arr2.length; index++) {
    if(arr2[index]>max){
        max=arr2[index];
    }
    
}
console.log(max)

function maxInArray(arr){
 let max= arr[0];
 for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max =arr[i];
    }
 }
 return max;
}

module.exports ={maxInArray}
// 1. Max in array;

 function maxInArray(arr){

    //ligic;
    return 
 }

let  arr= ['Anjali', 'Kaju','KIshmish','Jalebi'];
 
// function printArray(array){

   //  for(let i=0;i<array.length;i++){

       // console.log(array[i]);
   // }
// }

function  findMax ( arr){
    //debug 
    console.log(arr,'arr value');
    if ( arr.length == 0){
        return undefined;
    }
    let max = arr[0];
    for ( let i = 1; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i];z
        }
    }
    return max ;
}
// console.log(findMax([8,95,6,78]))



function findMin(arr){
    if (arr.length == 0){
        return undefined;
    }
    let min = arr [0];
    for  ( let i= 1; i<arr.length ; i++){
        if (arr[i] < min){
            min = arr [i];
        }
    }
    return min ;
}

// console.log(findMin([5,9,2,4,6]))






// printArray(arr);
let mat =[[1,2,3],
          [4,5,6,10],
          [7,8,9]
                ]
function printMatrix (matrix){

    for(let i =0;i<matrix.length;i++){
    
        for(let j=0;j<matrix[i].length;j++){
        console.log(matrix[i][j]);
        }
        console.log('***************')
    }

}
// printMatrix(mat)
// defination 
let x=25;
const lolBanaya= function (){
-
    console.log(x);
}
// const double = (x)=>{ return 2*x;}
 const double = x=>2*x;


// execution ->fucntion  c all 
lolBanaya();
console.log(double(20))

let obj ={name:'MUKESH',
address:'Banglore',
 hateYou:false,
 citizenship:['in','pak','canada'],
  netWorth:1000
};
obj.name='Ganesh';
delete obj.name;
console.log(obj.name);
console.log(obj['name']);

 
console.log(obj['citizenship'][2]);
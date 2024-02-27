
// Write your code 
let num1 = 2;
let num2 = 31;
let multiply = num1 *num2;

function getRandomInteger() {
    return Math.ceil(Math.random() * 100); // Change 100 to the maximum value you want
  }

let random = getRandomInteger()
let num3 = 10;
let num4 = 6;
const mod = num3%num4;


function maxnum(num){
    let maxn=0;
    for (let item of num) {
       if (item>maxn){
        maxn=item;
       }
 }
 return maxn;
}
 let num5 =new Set([20,0,1,5,3,9,5,11]);
 let max = maxnum(num5);

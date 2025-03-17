// function printNumberInNewLine(n) {
//     for (i = 1; i <= n; i++) {//i=3
//         // console.log(i, i % 3, i % 5);
//         const isMutlipleOfthree = i % 3 == 0;//true
//         const isMutlipleOfFive = i % 5 == 0;//false
//         // if (isMutlipleOfthree && isMutlipleOfFive) {
//         //     console.log("Fizz")
//         // } else if (isMutlipleOfthree) {
//         //     console.log("Buzz");

//         // } else if (isMutlipleOfFive) {
//         //     console.log("FizzBuzz");
//         // }else{
//         //     console.log(i)
//         // }
//         if (isMutlipleOfthree && isMutlipleOfFive) {//skip
//             console.log("FizzBuzz");
//             continue;
//         }
//         if (isMutlipleOfFive) {
//             console.log("Buzz");
//             continue;
//         }
//         if (isMutlipleOfthree) {
//             console.log("Fizz");
//             continue;
//         }

//         console.log(i)

//     }
// }

// let n = 100
// // printNumberInNewLine(n);
// /**
//  * input =5
//  *  2 3 4 5
//  * i=2-> 5%2==0-> 
//  * 
//  * 
//  *

// function isprime(num){
//     for(i=2;i<num;i++){
//         if(num%i===0){
//             console.log(`${i} is not a prime number;`)
//             return false;
//         }
//     }
//     console.log(`${i} is prime number;`)
//     return true;
// }
// console.log(result);

// function lcm(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i<=a*b;i++){
//         if(i%a===0 && i%b===0){
//             console.log(i);
//             break;
//         }
//     }
// }lcm(12,24);

// function gcd(a,b){
//     let x=Math.min(a,b);
//     for(i=x;i>0;i--){
//         if(a%i===0 && b%i===0){
//             console.log(i);
//             break;
//         }
//     }
// }gcd(12,24);


// function fib(n){
//     let n1=0;
//     let n2=1;
//     for(i=1;i<=n;i++){
//         console.log(n1);
//         let sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
// }fib(5);

// function pattern(n){
// for (i = 1; i <= n; i++) {
//     a = "";
//     for (j = 1; j <= n - i; j++) {
//         a += " ";
//     }
//     for (k = 1; k <= i; k++) {
//         if (i % 2 == 1) {
//             a += "*" + " ";
//         } else {
//             a += "#" + " ";
//         }
//     }
//     console.log(a);
// }}pattern(5);

//  let n=5;
// for(i=1;i<=n;i++){
//     a="";
//     for(j=1;j<=n;j++){
//         if(j===i||j===n-i+1){
//             a+="*";
//         }else{
//             a+="  ";
//         }
//     }
//     console.log(a);
// }

// function pattern(n){
//     for(i=1;i<=n;i++){
//        let a="";
//         for(j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(k=1;k<=i;k++){
//             // a+="*"+" ";
//             if(i%2!==0){
//                 a+="#"+" ";
//             }else{
//                 a+="*"+" ";
//             }
//         }
//         console.log(a);
//     }

//     for(i=n-1;i>=1;i--){
//         let a="";
//         for(j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(k=1;k<=i;k++){
//             // a+="*"+" ";
//             if(i%2!==0){
//                 a+="#"+" ";
//             }else{
//                 a+="*"+" ";
//             }
//         }
//         console.log(a);
//     }
// }
// pattern(3);

// function patter(n){
//     let count=0;
//     for(let i=1;i<=n;i++){
//        a="";
//         for(let j=1;j<=i;j++){
//             count++;
//             a+=count+" ";
//         }
//         console.log(a);
//     }
// }patter(3);

// function f(n){
//     let n1=0;
//     let n2=1;
//     for(i=1;i<n;i++){
//         let sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
//     console.log(n1);
// }f(6);

function prime(n){
    if(n<1){
        console.log(n+" is not a prime");
    }else if(n==1){
        console.log(n+" is a prime");
    }else{
        for(i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                console.log(n+" is not a prime");
            }
            else{
                console.log(n+" is a prime");
            }
        }
    }
}prime(3);
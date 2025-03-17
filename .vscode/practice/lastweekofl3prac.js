// function prime(n){
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return n+" is not a prime";
//         }
//     }
//     return n+" is a prime";
// }console.log(prime(10));


// function gcd(a,b){
//     let x=Math.max(a,b);
//         for(let i=x;i>0;i--){
//             if(a%i===0 && b%i===0){
//                 console.log(i);
//                 break;
//             }
//         }
// }gcd(12,36);


// function lcm(a,b){
//     let x=Math.min(a,b);
//         for(i=x;i<=a*b;i++){
//             if(i%a===0 && i%b===0){
//                 console.log(i);
//                 break;
//             }
//         }
// }lcm(336,54);

 
//function fib(n){
//     let n1=0;
//     let n2=1;
//     for(i=1;i<=n;i++){
//         sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
//     console.log(n1);
// }fib(10);


// * 
// * *
// * * *
// function pattern(n){
//     for(i=1;i<=n;i++){                        
//         a="";
//         for(j=1;j<=i;j++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }
// }pattern(5);

//  * * * 
//  * * *
//  * * *
// function p(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=n;j++){
//             a+=i+" ";
//         }
//         console.log(a);
//     }
// }p(4);


// * 
// # #
// * * *
// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//             for(j=1;j<=i;j++){
//                 if(i%2!==0){
//                     a+="*"+" ";
//                 }else{
//                     a+="#"+" ";
//                 }
//             }
//             console.log(a);
//     }
// }pattern(5);

//   * 
//  * *
// * * *
// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(k=1;k<=i;k++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }
// }pattern(3);

//   1
//  2 2
// 3 3 3
// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//             for(j=1;j<=n-i;j++){
//                 a+=" ";
//             }
//             for(k=1;k<=i;k++){
//                 a+=i+" ";
//             }
//             console.log(a);
//     }
// }pattern(3);

// function find(n){
//     let sum=0;
//     while(n>0){
//         a=n%10;
//         sum+=a;
//         n=Math.floor(n/10);
//     }
//     let final=0;
//     while(sum>0){
//         b=sum%10;
//         final+=b;
//         sum=Math.floor(sum/10);
//     }
//     console.log(final);
// }find(78945623);

// function fib(n){
//     let n1=0;
//     let n2=1;
//     for(i=1;i<=n;i++){
//         sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
//     console.log(n1);
// }fib(6);

// function prime(n){
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){ 
//             return n+" is not a prime";
//         }
//     }
//     return n+" is a prime";
// }
// console.log(prime(7));

// function gcf(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i>0;i--){
//         if(i%2!==0){
//             console.log("co-prime");
//             break;
//         }
//         else{
//             console.log("not a co-prime");
//             break;
//         }
//     }
// }gcf(12,18);


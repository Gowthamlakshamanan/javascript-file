// function fizbuz(n){
//     for(i=n;i>1;i--){
//         if(i%5===0 && i%3===0){
//             console.log("Fizz-Buzz");
//         }
//         else if(i%5===0){
//             console.log("Buzz");
//         }
//         else if(i%3===0){
//             console.log("Fizz");
//         }
//         else{
//             console.log(i);
//         }
//     }
// }fizbuz(50);

//prime
// function prime(n){
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//         return n+" is not a prime";
//         }
//     }
//     return n+" is a prime";
// }
// console.log(prime(7));

//gcd
// function gcd(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i>0;i--){
//         if(a%i===0 && b%i===0){
//             console.log(i);
//             break;
//         }
//     }
// }gcd(10,30);

//lcm
// function lcm(a,b){
//     let x=Math.min(a,b);
//     for(i=x;i<=a*b;i++){
//         if(a%i===0 && b%i===0){
//         console.log(i);
//         break;
//         }
//     }
// }
// lcm(5,7);

//fib
// function fib(n){
//     let n1=0;
//     let n2=1;
//     for(i=1;i<n;i++){
//         sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
//     console.log(n1);
// }fib(10);


// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=i;j++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }
// }
// pattern(4);

// function num(n){
//     for(i=n;i>1;i--){
//         if(i%3===0 && i%5===0){
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
// }num(100);

// function patternum(n){
//     for(i=1;i<=n;i++){
//         count=0;
//         // a="";
//         for(j=1;j<=i;j++){
//             count++
//             a+=i;
//         }
//         console.log(a);
//     }
// }patternum(3);


//PRIME
// function prime(n){
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return n+" is not a prime";
//         }
//     }
//     return n+" is a prime";
// }
// console.log(prime(4));

//LCM
// function lcm(a,b){
//     let x=Math.min(a,b);
//     for(i=x;i<=a*b;i++){
//         if(i%a===0 && i%b===0){
//         console.log(i);
//         break;
//         }
//     }
// }lcm(10,90);

//GCD
// function gcd(a,b){
//     let x=Math.max(a,b);{
//         for(i=x;i>0;i--){
//             if(a%i===0 && b%i===0){
//                 console.log(i);
//                 break;
//             }
//         }
//     }
// }gcd(15,30);


// function gcd(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i>0;i--){
//         if(a%i===0 && b%i===0){
//             console.log(i);
//             break;
//         }
//         else{
//             console.log(i);
//         }
//     }
// }gcd(0,5);

// function lcm(a,b){
//     let x=Math.min(a,b);
//     for(i=x;i<=a*b;i++){
//         if(a%i===0 && b%i===0){
//             console.log(i);
//             break;
//         }
//         else{
//             console.log(i);
//         }
//     }
// }lcm(7,0);

//fibbino
// function fib(n){
//     let n1=0;
//     let n2=1;
//     for(i=1;i<n;i++){
 
//         let sum = n1+n2;
//         n1=n2;
//         n2=sum;
//     }
//     console.log(n1);
// }
// fib(5);
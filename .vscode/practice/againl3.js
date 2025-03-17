// function prime(n){
//     for(i=2;i<=Math.sqrt(n);i++){
//         return n+" is not a prime";
//     }
//     return n+ " is a prime";  
// } console.log(prime(10));

// function gcd(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i>0;i--){
//         if(a%i===0 && b%i===0){
//             console.log(i);
//             break;
//         }
//     }
// }gcd(12,36);

// function lcm(a,b){
//     let x=Math.min(a,b);
//     for(i=x;i<=a*b;i++){
//         if(i%a===0 && i%b===0){
//         console.log(i);
//         break;
//         }
//     }
// }lcm(36,54);

// function fib(n){
//     let n1=0;
//     let n2=1;
//     for(i=1;i<=n;i++){
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
// }pattern(3);

// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=n;j++){
//             a+="* "
//         }
//         console.log(a);
//     }
// }pattern(3);

// function gcf(a,b){
//     let x=Math.max(a,b);
//     for(i=1;i>0;i--){
//         if(i%1==0){
//             console.log("Co-prime");
//             break;
//         }
//         else{
//             console.log("not a co-prime");
//         }
//     }
// }gcf(12,18);

// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(k=1;k<=i;k++){
//             a+="*"+" "
//         }
//         console.log(a);
//     }
// }pattern(3);
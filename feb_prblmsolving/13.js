// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=i;j++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }
// }
// pattern(3);

// function prime(n){
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return n+" is not a prime";
//         }
//     }
//     return n+" is a prime";
// }console.log(prime(5));

// function lcm(a,b){
//     let x=Math.min(a,b);
//         for(i=x;i<=a*b;i++){
//             if(i%a===0 && i%b===0){
//                 console.log(i);
//                 break;
//             }
//         }
// }lcm(12,24);

// function gcd(a,b){
//     let x=Math.max(a*b);
//         for(i=x;i>0;i--){
//             if(a%i===0 && b%i===0){
//                 console.log(i);
//                 break;
//             }
//         }
// }gcd(12,36);

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

// function gcf(a,b){
//     let x=Math.max(a,b);
//         for(i=1;i>0;i--){
//             if(i%2!==0){
//                 console.log("co-prime");
//                 break;
//             }
//             else{
//                 console.log("not co-prime");
//                 break;
//             }
//         }
// }gcf(12,18);

// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=n;j++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }
// }pattern(3);

// function pattern(n) {
//     for (i = 1; i <= n; i++) {
//         a = "";
//         for (j = 1; j <= i; j++) {
//             if (i % 2 !== 0) {
//                 a += "*" + " ";
//             } else {
//                 a += "#" + " ";
//             }
//         }
//         console.log(a);
//     }
// }pattern(3);


// function prime(n){
//     if(n<=1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false;
//         }
//     }
//     return true
// }
// // console.log(prime(4))
// function find(m,n){
//     if(m==8 && n==10){
//         console.log("There are no prime num in the range")
//     }
//    let empty=[]
//     for(let i=m;i<=n;i++){
//         if(prime(i)){
//            empty.push(i)
//         }
//     }
//     if(empty.length>0){
//         console.log("Prime numbers:"+empty);
//     }
//     else{
//         console.log("There are no prime num in the range")
//     }
// }find(10,30);

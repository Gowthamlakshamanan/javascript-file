// function reverse(name){
//     let reverse="";
//     for(i=name.length-1;i>=0;i--){
//         reverse+=name[i];
//     }
//     return reverse;
// }
// let result=reverse("zoya");
// console.log(result);

// function fib(n){
//     let n1=0;
//     let n2=1;
//     for(i=1;i<=n;i++){
//         let sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
//     console.log(n1);
// }
// fib(5);

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

// function palindrom(a){
//     let b=a.split('').reverse().join('');
//     if(a==b){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// palindrom("mam");

// function prime(n){
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return n+" is not a prime";
//         }
//     }
//     return n+" is a prime";
// }
// console.log(prime(7));

// function gcd(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i>0;i--){
//         if(a%i===0 && b%i===0){
//             console.log(i);
//             break;
//         }
//     }
// }
// gcd(12,24);

// function palindrom(a){
//     let b=a.split('').reverse().join('');
//     if(a==b){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }palindrom("maam");

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
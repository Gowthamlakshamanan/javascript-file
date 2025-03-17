// for(let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     }else if(i%3===0){
//         console.log("Fizz");
//     }else if(i%5===0){
//         console.log("Bizz");
//     }else{
//         console.log(i);
//     }
// }

// lcm
// function lcm(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i<=a*b;i++){
//         if(i%a===0 && i%b===0){
//             console.log(i);
//             break;
//         }
//     }
// }lcm(12,24);

//gcd
// function gcd(a,b){
//     let x=Math.min(a,b);
//     for(i=x;i>0;i--){
//         if(b%i===0 && a%i===0){
//             console.log(i);
//             break;
//         }
//     }
// }gcd(12,24);

//pattern
// function partten(n){
//     for(let i=1;i<=n;i++){
//         let row ='';
//         for(let j=1;j<=i;j++){
//             row +='* ';
//         }
//         console.log(row.trim());
//     }
// }partten(3);

//pattern
// function p(n){
//     for(i=1;i<=n;i++){
//         let space =' '.repeat(n-i);
//         let star ='* '.repeat(i);
//         console.log(space+star.trim());
//     }
// }p(3);

//pattern
// function p(n){
//     for(i=1;i<=n;i++){
//         let start = '* '.repeat(n);
//         console.log(start.trim());
//     }
// }p(3);

//pattern 
// function p(n){
//     for(i=1;i<=n;i++){
//         let space =' '.repeat(n-i);
//         let number=(i+' ').repeat(i);
//         console.log(space+number.trim());
//     }
// }p(3);

//pattern
// function p(n){
//     for(i=n;i>=1;i--){
//         let num ='';
//         for(j=n;j>=i;j--){
//             num+=j+'';
//         }
//         console.log(num.trim());
//     }
// }p(3);

//pattern
// function p(n){
//     for(i=n;i>=1;i--){
//         let space=' '.repeat(n-i);
//         let star='* '.repeat(i);
//         console.log(space+star.trim()); 
//     }
// }p(3);

//pattern
// function p(n){
//     for(i=n;i>=1;i--){
//         let space=' '.repeat(n-i);
//         let number=(i+' ').repeat(i);
//         console.log(space+number.trim());
//         }
// }p(3);

//pattern
// function p(n){
//     for(i=n;i>=1;i-=2){
//         let space=''.repeat((n-i)/2);
//         let star='*'.repeat(i);
//         console.log(space+star.trim());
//     }
// }p(5);

//factorial
// function f(n){
//     let result=1;
//     for(let i=1;i<=n;i++){
//         result*=i;
//     }
//     return result;
// }

// function sf(N){
//     let sum=0;
//     for(let i=1;i<=N;i++){
//         sum+=f(i);
//     }
//     console.log(sum);

// }
// sf(5);
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
// }




//LCM
// function lcm(a,b){
//     let x= Math.max(a,b);
//     for(i=x;i<=a*b;i++){
//         console.log(i);
//         break;
//     }
// }
// lcm(12,24);

//GCD
// function gcd(a,b){
//     let x=Math.min(a,b);
//     for(i=x;i>0;i--){
//         console.log(i);
//         break; 
//     }
// }
// gcd(12,24);

// function isBeautifulArray(arr) {
//     let sum = 0;
//     for (let num of arr) {
//       sum += num;
//     }a
//     if (sum % 2 === 0 && sum % 3 === 0 && sum % 5 === 0) {
//       console.log(1);
//     } else {
//       console.log(0);
//     }
//   }


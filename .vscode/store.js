// function printHollowDiamond(n) {
//     // Upper part of the diamond
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         // Add leading spaces
//         for (let j = 1; j <= n - i; j++) {
//             row += " ";
//         }
//         // Add stars and spaces inside
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             if (j === 1 || j === 2 * i - 1) {
//                 row += "*"; // Print stars at the edges
//             } else {
//                 row += " "; // Fill with spaces in between
//             }
//         }
//         console.log(row);
//     }

//     // Lower part of the diamond
//     for (let i = n - 1; i >= 1; i--) {
//         let row = "";
//         // Add leading spaces
//         for (let j = 1; j <= n - i; j++) {
//             row += " ";
//         }
//         // Add stars and spaces inside
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             if (j === 1 || j === 2 * i - 1) {
//                 row += "*"; // Print stars at the edges
//             } else {
//                 row += " "; // Fill with spaces in between
//             } 
//         }
//         console.log(row);
//     }
// }printHollowDiamond(5);


// function num(n){
//     if (n <= 1) {
//         console.log(n+" is not a prime");
//         return false; 
//     }

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             console.log(n+" is not a prime");
//             return false;
//         }
//     }
//     console.log(n+" is a prime");
//     return true;
//     }num(11);


// function isPrime(num){
//     for(i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return num+ " Not Prime";
//         }
//     }
//     return num +" Prime";
// }
// console.log(isPrime(1));

//lcm
// function lcm(a, b) {
//     let min = Math.min(a, b)
//     for (i = min; i < a * b; i++) {
//         if (i % a === 0 && i % b === 0) {
//             console.log(i)
//             break;
//         }
//     }
// }
// lcm(10, 90);

// function gcd(a, b) {
//     let max = Math.max(a, b)
//     for (i = max; i > 0; i--) {
//         if (a % i === 0 && b % i === 0) {
//             console.log(i)
//             break;
//         }
//     }
// }
// gcd(15, 30);

//factorial
// let num = 10;
// let fact = 1;
// for(i=1; i<=num; i++){
//     fact*=i;
// }
// console.log(fact);

// function num(n){
  //     let sum=1
  //     for(i=1;i<=n;i++){
  //         a="";
  //         for(j=1;j<=n-i;j++){
  //             a+=" ";
  //         }
  //         for(k=1;k<=i;k++){
  //             a+=sum+" ";
  //                 sum++;
  //         }
  //         console.log(a);
  //     }
  // }num(3);
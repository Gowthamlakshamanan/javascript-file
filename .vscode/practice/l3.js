// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//     for(j=1;j<=n-i;j++){
//         a+=" ";
//     }
//     for(k=1;k<=i;k++){
//         if(i%2===1){
//             a+="*"+" ";
//         }else{
//             a+="#"+" ";
//         }
//     }console.log(a);
// }
// }pattern(4);

// function pattern (n);
// for (i = n; i > n - 1; i--) {
//     a = "";
// for (j = n; j > i; j--) {
//     a += " ";
// }
//     for(let k=1;k<=i;k++){
//         if(i%2==1){
//             a+="*"+" ";
//         }else{
//             a+="#"+" ";
//         }
//     }
//     console.log(a);
// }
// pattern(6);

//debug
// function findgcd(a, b) {
//     if (a === 0 && b === 0) return 0;
  
//     while (b !== 0) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }
  
//   // Test cases
//   console.log(findgcd(12,18)); 
//   console.log(findgcd(0, 10));  
//   console.log(findgcd(30,0));
//   console.log(findgcd(7, 13));



// let n=5;
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

//  Write a program to find the sum of digits of a number until the sum becomes a single digit.
// Sample Input
// 78945623
// Sample Output
// 8
// Explanation: adding 7 + 8 + 9 + 4 + 5 + 6 + 2 + 3 becomes 44, now sum the digits of 44 again so 
// tht it becomes 8 , ie 4 + 4

// function single(n){
//     let sum=0;
//        while(n>0){
//              a=n%10;
//              sum+=a;
//              n=Math.floor(n/10);
//        }
//     //    console.log(sum);
//    let final=0;
//        while(sum>0){
//         let b=sum%10;
//            final+=b;
//          sum=Math.floor(sum/10);
//    }
//    console.log(final);
//    }
//    single(78945623)
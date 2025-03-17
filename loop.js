// function printNumberPattern(rows) {
//     for (let i = 0; i <= rows; i++){ 
//         let pattern ="*";
//         for (let j = 0; j <= i; j++){  
//             pattern +="*"; 
//         }
//         console.log(pattern); 
//     }
// }
// printNumberPattern(3);


// function num(n) {
//     for (let i = 0; i <= n; i++) {
//         let pattern = "";
//         for (let j = 0; j <= i; j++) {
//             pattern += "*";
//         } console.log(pattern);
//     }
// } num(2);

//my practice
// function numberLoop(n) {
//     for (i = 0; i <= n; i++) {
//         let ans = "";
//         for (j = 0; j <= i; j++) {
//             ans += "*";
//         } console.log(ans);
//     }

// } numberLoop(3);


// function numberLoop(n) {
//         for (i = 0; i<n; i++) {
//             let ans = "";
//             for (let j = 0; j < n; j++) {
//                 ans += "*";
//             } console.log(ans);
//         }

//     } numberLoop(3);


//My practice
// function num(a){
//      for(i=0;i<a;i++){
//         pat="";
//         for(j=0;j<a;j++){
//             pat+="*";
//         }console.log(pat);
//      }
// }num(3);


// function printPyramidPattern(n) {
//     for (let i = 1; i <= n; i++) {  
//         let pattern = "";  
//         for (let j = 1; j <= n - i; j++) {
//             pattern += " "; 
//         }
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             pattern += "*";  
//         } console.log(pattern);  
//     }
// }
// printPyramidPattern(3);  



// 1. Print the below patter if n = 3

//           1
//          1 2
//         1 2 3
//          1 2
//           1


function num(n){
    for(i=1;i<=n;i++){
        let a =" ";
        for(j=1;j<=n-i;j++){
            a +=" ";
        }
        for(k=1;k<=j;k++){
            a+=k+" ";
        }
    }
}

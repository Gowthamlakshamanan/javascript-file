// * 
// * *
// * * *

// function pattern(n) {
//     for (i = 1; i <= n; i++) {
//         a = "";
//         for (j = 1; j <= i; j++) {
//             a += " ";
//         }
//         for (k = i; k <= n; k++) {
//             a += "*" + " ";
//         }
//         console.log(a);
//     }
// } pattern(3);

//  * * * * * 
//  *       *
//  *       *
//  *       *
//  * * * * *

// function pattern(n){
//     for(i=1;i<=n;i++){
//         a=" ";
//         for(j=1;j<=n;j++){
//             if(i===1||i===n||j===1|j===n){
//                 a+="*"+" ";
//             }
//             else{
//                 a+="  ";
//             }
//         }
//         console.log(a);
//     }
// }pattern(5);

//      * 
//     * *
//    * * *
//     * *
//      *

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
//     for(i=n-1;i>0;i--){
//         a="";
//         for(j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(k=1;k<=i;k++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }
// }
// pattern(3);

// 1    1
// 22  22
// 333333

function pattern(n){
    for(i=1;i<=n;i++){
        row="";
        for(j=1;j<=i;j++){
            row+=i;
        }
        for(k=n-1;k>=i;k--){
            row+="  ";
        }
        for(z=1;z<=i;z++){
            row+=i;
        }
        console.log(row);
    }
}pattern(3);


// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=n;j++){
//             if(i===1||i===n||j===1||j===n){
//                 a+="*"+" ";
//             }
//             else{
//                 a+="  ";
//             }
//         }
//         console.log(a);
//     }
// }pattern(5);



// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=n;j++){
//             if(i===1||i==n){
//                 a+=i+" ";
//             }
//             else if(j===1||j===n){
//                 a+="*"+" ";
//             }
//             else{
//                 a+="  ";
//             }
//         }
//         console.log(a);
//     }

// }pattern(5);


// function pattern(n){
//     for(let i=1;i<=n;i++){
//         a="";
//         for(let j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(let k=1;k<=i;k++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }

//     for(let i=n-1;i>=1;i--){
//         a="";
//         for(let j=n-i;j>0;j--){
//             a+=" ";
//         }
//         for(let k=1;k<=i;k++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }
// }pattern(4)

// function fac(n){
//     let fact=1;
//     for(i=1;i<=n;i++){
//         fact*=i;
//     }
//     console.log(fact);
// }fac(5);

// function pattern(n){
//     for(let i=1;i<=n;i++){
//         a="";
//         for(let j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(let k=1;k<=i;k++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }
//     for(let i=n-1;i>0;i--){
//         a="";
//         for(let j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(let k=1;k<=i;k++){
//             a+="*"+" ";
//         }
//         console.log(a);
//     }
// }pattern(3)

// function pattern(n){
//     let count=1;
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(k=1;k<=i;k++){
//             a+=count+" ";
//             count++;
//         }
//         console.log(a);
//     }
// }pattern(3);


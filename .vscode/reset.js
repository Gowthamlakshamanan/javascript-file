// function pattern(n){
//     for(i=1;i<=n;i++){
//         a="";
//         for(j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(k=1;k<=i;k++){
//             if(i%2===1){
//                 a+="*"+" ";
//             }else{
//                 a+="#"+" ";
//             }
//         }console.log(a);
//     }

// }pattern(4)

// function patter(n){
//     for(i=1;i<=n-1;i++){
//         a="";
//         for(j=i;j>n-i;j--){
//             a+=" ";
//         }
//         for(k=1;k<=i;k++){
//             if(i%2==1){
//                 a+="*"+" ";
//             }else{
//                 a+="#"+" ";
//             }
//         }console.log(a);
//     }
// }patter(3);

//FIZZ_BUZZ
// function ply(n){
//     for(i=0;i<=n;i++){
//         if(i%3===0 && i%5===0){
//             console.log("Fizz-Buzz");
//         }else if(i%3===0){
//             console.log("Fizz");
//         }else if(i%5===0){
//             console.log("Buzz");
//         }else {
//             console.log(i);
//         }
//     }
// }ply(100);

//gcd


// function gcd(a,b,c){
//     let x=Math.min(a*b*c);
//     for(i=x;i>0;i--){
//         if(a%i==0 && b%i==0 && c%i==0){
//             return i;
//             // console.log(i);
//             // break;       
//         }
//     }
// }
// // gcd(8,15)
// function find(a,b,c){
// if(gcd(a,b,c)==1){
//     console.log("co prime");
// }else if(gcd(a,b,c)==0){
//     console.log("not a co prime");
// }else{
//     console.log(i);
// }
// }
// find(8,15,21)


// function find(a,b){
//     let count=0;
//     for(i=0;i<=a.length;i++){
//         if(b==a[i]){
//             count++;
//         }
//     }console.log(count);

// }find([18,12,13,14,15,18,18,18],[18]);

// function pattern(n) {
//     for (i = 1; i <= n; i++) {
//         let row =' ';
//         for (j = 1; j <= i; j++) {
//             row +='*'+" ";
//         }
//         console.log(row);
//     }
    
// } 
// pattern(4);


function ly(n){
    if((n%4===0 && n%100!==0) || n%400===0){
        return true;
    }else{
        return false;
    }
}const n=2024;
if(ly(n)){
    console.log(`${n} is a leap year`);
}else{
    console.log(`${n} is not a leap year`);
}

// function gcd(a,b){
//     let x=Math.min(a*b);
//     for(i=x;i>a*b;i--){
//         if(a%i==0 && b%i==0){
//             return i;
//         }
//     }
// }gcd(12,24);
// function find(a,b){
//     if(gcd(a,b)==1){
//     console.log("its a co- prime" );
//     }
// else{
//     console.log("its not a co- prime");
// }   
// }
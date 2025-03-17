// function gcd(a,b){
//     let x=Math.min(a,b);
//     for(i=x;i>0;i--){
//         if(a%i===0 && b%i===0){
//             console.log(i);
//             break;
//         }
//     }
// }gcd(12,48);

// function lcm(c,d){
//     let y=Math.max(c,d);
//     for(i=y;i<=c*d;i++){
//         if(i%c===0&&i%d===0){
//             console.log(i);
//             break;
//         }
//     }
// }lcm(12,48);

// function isPrime(num){
//     if(i<=1){
//         return false;
//     }
//     else{
//         for(i=2;i<=Math.sqrt(num);i++){
//             if(num%i==0){
//                 console.log(i+" is not a prime");
//                 return false;
//             }
//         }
//     }
// }isPrime(5);


// function nam(arr){
//     console.log(gcd(arr[0],arr[1]))
//     console.log(lcm(arr[2],arr[3]))
// }
// nam([20,22,33,44]);
// function gcd(c,d){
//    let max=Math.min(c,d)
//    for(i=max;i>0;i--){
//        if(c%i==0 && d%i==0){
//            return i;
//        }
//    }  
// }
// function lcm(a,b){
//   let min=a*b;
//   for(i=1;i<=min;i++){
//    if(i%a==0 && i%b==0){
//       return i;
//    }
//   }
// }


// function printStarPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let line = '';
//         for (let j = 1; j <= i; j++) {
//             line += '* '; 
//         }
//         console.log(line.trim()); 
//     }
// }
// printStarPattern(3);

// function n(p){
//      for(i=1;i<=p;i++){
//         let l='';
//         for(j=1;j<=i;j++){
//             l+='* ';
//         }
//         console.log(l.trim());
//      }
// }n(10);

// function n(p){
//     for(i=p;i>=1;i--){
//         let l='';
//         for(j=1;j<=i;j++){
//             l+='* ';
//         }
//         console.log(l.trim());
//     }
// }n(10);

// function printHollowSquare(size) {
//     let pattern = '';
//     for (let i = 1; i <= size; i++) {
//         for (let j = 1; j <= size; j++) {
//             if (i === 1 || i === size || j === 1 || j === size) {
//                 pattern += '*  ';
//             } else {
//                 pattern += '   ';
//             }
//         }
//         pattern += '\n'; 
//     }
//     console.log(pattern); 
// }printHollowSquare(4);


// function p(s){
//     let l='';
//     for(let i=1;i<=s;i++){
//         for(j=1;j<=s;j++){
//             if(i===1||i===s||j===1||j===s){
//                 l+='*  ';
//             }
//             else{
//                 l+='   ';
//             }
//         }
//         l+='\n'
//     }
//     console.log(l);
// }p(5);

// function n(p){
//     let l='';
//     for(i=1;i<=p;i++){
//         for(j=1;j<=p;j++){
//             if(i===1||i===p||j===1||j===p){
//                 l+='*  ';
//             }else{
//                 l+='   ';
//             }
//         }
//         l+='\n';
//     }console.log(l);
// }n(10);

// function s(l){
//     for(i=1;i<=l;i++){
//         let s ='';
//         for(j=1;j<=i;j++){
//             s+='* ';
//         }
//         console.log(s.trim());
//     }
// }s(3);

// function s(n){
//     for(i=1;i<=n;i++){
//         let l='';
//         for(j=1;j<=i;j++){
//             l+='* ';
//         }
//         console.log(l.trim());
//     }
// }s(3);

function lcm(a,b){
    let x= math.max(a,b);
    for(i=x;i<=(a*b);i++){
        if(i%a===0, i%b===0){
            console.log[i];
            break;
        }
    }
}lcm(12,28);

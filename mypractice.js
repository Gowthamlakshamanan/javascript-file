//LCM

// let a = 12;
// let b = 48;
// let x = Math.max(a, b);
// for (i = x; x <= a * b; i++) {
//     if (i % a === 0 && i % b === 0) {
//         console.log("the LCM is "+ i);
//         break;
//     }
// }


//LCM by Function
// function lcm(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i<=a*b;i++){
//         if(i%a===0&&i%b===0){
//             console.log( "The LCM is "+i);
//             break;
//         }
//     }
// }lcm(12,48);


//GCD
// let a=12;
// let b=48;
// let x=Math.min(a,b);
// for(i=x;i>0;i--){
//     if(a%i==0&&b%i==0){
//         console.log(i);
//         break;
//     }
// }


//GCD in funciton
// function gcd(a,b){
//     let x=Math.min(a,b);
//     for(i=x;i>0;i--){
//         if(a%i===0&&b%i===0){
//             console.log("The GCD is "+i);
//             break;
//         }
//     }
// }gcd(15,45);


function isPrime(num){
    if(num<=1){
        return false;
    }
    else{
        for(i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                console.log(num +" is not a prime");
                return false;
            }
        }
    }
    console.log(num + " is a prime");
    return true;
// }console.log(isPrime(2));
}isPrime(2)

// function printPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         } else {
//             console.log('*'.repeat(i));
//         }
//     }
// }
// printPattern(5);

// function p(n){
//     for(i=1;i<=n;i++){
//         if(i%2==0){
//             console.log(i);
//         }else{
//             console.log('* '.repeat(i));
//         }
//     }
// }p(10);


//in the array 6 different number one target number yentha number aha add panna vara answer aha array kull pass pannanu

// let a = [2, 3, 5, 6, 4, 1];
// let t = 10;
// let f = false;
// for (i = 0; i <= a.length; i++) {
//     for (j = i + 1; j < a.length; j++) {
//         if (a[i] + a[j] === t) {
//             console.log('if we add these number ${a[i]} and ${a[j]} we get ${t}. ');
//             found = true
//             break;
//         }
//         if (found) break;
//     }
// }
// if (!found) console.log('no two number added upto  ${t}');


function fibbo(n){
    let n1=0;
    let n2=1;
    for(i=1;i<=n;i++){
        console.log(n1)
        let sum=n1+n2;
        n1=n2;
        n2=sum;
    }
}
fibbo(10);
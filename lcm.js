// LCM

// let a = 12;
// let b = 48;
// let x =Math.max(a,b);
// for(i=x;i<=a*b;i++){
//     if(i%a===0 && i%b===0){
//         console.log(i);
//         break;
//     }
// }

function n(a,b){
    let x = Math.max(a,b);
    for(i=x;i<=a*b;i++){
        if(i%a===0 && i%b===0){
            console.log(i);
            break;
        }
    }
    
}n(12,48);

// function num(a,b){
//     let x=Math.max(a,b);
//     for(i=x;i<=a*b;i++){
//         if(i%a===0 && i%b===0){
//             console.log(i);
//             break;
//         }
//     }
// }num(12,20);
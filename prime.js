//prime number

// function prime(n){
//     if ( n<=1) return false;
//     if ( n===2) return true;
//     if ( n %2===0) return false;
    
//     for(i=3;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false;
//         }
//     }return true;
// }
// let a=29;
// if(prime(a)){
//     console.log(a + " prime number");
// }
// else{
//     console.log(a+"not a prime number");
// }


function isPrime(num){
    if(num<=1){
        return false;
    }
    else{
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                console.log(num+" is not prime")
                return false;
            }
        }
    }
    console.log(num+" is a prime")
    return true;
}console.log(isPrime(6))

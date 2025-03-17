function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result;
}
function sumOfFactorials(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += factorial(i);  
    }
    return sum;
}
let number = 5;
let result = sumOfFactorials(number);
console.log("Sum of factorials up to", number, "is", result);
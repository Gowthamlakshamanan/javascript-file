function primeNumber(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
for(let i=11;i<= 30;i++){
    if(primeNumber(i)){
        console.log(i);
    }
}


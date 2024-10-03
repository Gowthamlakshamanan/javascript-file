//int 1 to 6 sum all the sum divis 3 return true else false
let array = [1, 2, 3, 4, 5]; {
    let sum = 0;
    function sumOfNumber(array) {
        for (i = 0; i <= array.length-1; i++) {
            sum += array[i];

            if (sum % 3 == 0) {
                return true;
            }
            else
                return false;
        }
    }
    console.log(sum);
}
console.log(sumOfNumber(array))
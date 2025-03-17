// function oddeven(n){
//     if(n%2===0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }
// console.log(oddeven(9));
// console.log(oddeven(2));

// function sumEvenNumber(arr){
//     sum=0;
//     for(i=0;i<=arr.length;i++){
//         if(i%2==0){
//             sum+=i;
//         }
//     }
//     return sum;
// }console.log(sumEvenNumber([1,2,3,4,5,6]));

function palindrom(n){
        let reversed = n.split("").reverse().join("");
        return n=== reversed;
}
console.log(palindrom("racecar"));
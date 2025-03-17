// function int(n) {
//         if (n <= 10 ) {
//             console.log("true");
//         }
//         else {
//            console.log("false");
//         }
// }
// int(10);


// function int(n) {
//         if (n%4==0) {
//             console.log("true");
//         }
//         else {
//            console.log("false");
//         }
// }
// int(8);


// function n(a,b){
//     for(n=a;n<=b;n++){
//     console.log(n)
// }
// }
// n(10,15);


// function n(a,b){
//     for(n=b;n>=a;n--){
//     console.log(n)
// }
// }
// n(10,15);


// function num(a) {
//     let sum = 0;
//     let sum1 = 0;
//     for (i = 0; i <= num.length; i++) {
//         if (a[i] % 2 == 0) {
//             sum += a[i];
//         }
//         else {
//             sum1 += a[i];
//         }
//     }
//   console.log(sum);
//   console.log(sum1);
// }
// num([1,2,3,4,5,6,7,8,9]);


//print even number for 20 to 50;
// function even(a, b) {
//     for (i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }

// } even(20, 50)


//Write a function that checks whether a number is positive, negative, or zero.
// function num(a) {
//     if (a>0) {
//         console.log("its an positive number");
//     }
//     else if(a<0){
//         console.log("its an negative number");
//     }
//     else {
//         console.log("its an zero");
//     }

// }
// num(10);
// num(-10);
// num(0);


//print odd number for 20 to 50;
// function odd(a, b) {
//     for (i = a; i <= b; i++) {
//         if (i % 2 == 1) {
//             console.log(i);
//         }
//     }

// } odd(20, 50)


// function isNum(a){
//     if(a%2==0){
//         console.log("its  divisable");
//     }
//     else{
//         console.log("its not divisable");
//     }

// }isNum(10);


// let a=["jan","feb","march"];
// a.pop("march");
// console.log (a);

// let a=["jan","feb","march"];
// console.log(a[1]);

// let int=[11,22,33,44,55,66,77,88,99];
// sum=int[4]+int[1];
// console.log(sum);


// function tables() {
//     for (i = 1; i <= 10; i++) {
//         console.log(`2*${i}=${2 * i}`);
//     }

// } tables();


// function tables(){
// for(i=16;i>=8;i--){
//     console.log(`9*${i}=${9*i}`);
// }
// }tables();

// function fifthTables(){
//      for( i=10;i>=1;i--){
//         console.log(`5*${i}=${i*5}`);
//      }
// }fifthTables()

// function rA(a,b){
//     for(let i=0;i<b;i++){
//         let lastElement=a.pop();
//         a.unshift(lastElement);
//     }
//     return a;
// }
// let a=[1,2,3,4,5,6,7];
// let b=3;
// console.log(rA(a,b));


// function num(){
//     let num=[2,3,4,2,3,5];
//     console.log(num[2]);
// }
// num()

//Use the `push()` method to add two items to an array and print the updated array.
// let arr=[1,2];
// arr.push(3,4,5);
// console.log(arr);

//Use the `pop()` method to remove the last element from an array and print the array.
// let arr=[1,2,3,4,5];
// arr.pop();
// console.log(arr);

// function odd() {
//     for (let i = 0; i <= 20; i++) {
//         if (i % 2 == 1){
//             console.log(i);
//         }
//     }
// }
// odd();

// function even(){
//     for(i=0;i<=20;i++){
//         if(i%2==0){
//         console.log(i);
//         }
//     }
// }even()

// function leapYear(a){
//     if((a%4==0 && a%100==1)||(a%400==0)){
//         return `${a} is a leap year`;
//     }
//     else{
//         return `${a} is not a leap year`;
//     }
// }console.log(leapYear(2002));
// console.log(leapYear(2000));

// function int(){
//     if(a<=10){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }int(11);

// function int(a,b){
//     for(i=b;i>=a;i--){
//         console.log(i);
//     }
// }int(1,10);
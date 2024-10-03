//1. Fix the issues in this code

// calculateArea();
// greetUser();
// function calculateArea() {
//     const radius = 5;
//     let area = 0;
//      area = Math.PI * radius * radius;
//     console.log(area);
// }
// function greetUser() {
//     var userName = "John";
//     console.log(userName);
// }

// 2. Why is this loop not stopping? 
//How can you modify the code to ensure the loop counts down properly upto 100?

// let count = 1;
// while (count <= 100) {
//  console.log("Counting down: " + count);
//  count = count + 1;
// }

//3. Why always It's cold outside. is printed irrespective of the temperature value. Fix this!

// let temperature = 30;
// if (temperature == 20) {
//     console.log("It's cold outside.");
// }
// else {
//     console.log("It's warm outside.");
// }

//4. Fix the issues in the code so that output is printed correctly

// checkNumber(-5);
// checkNumber(0);
// checkNumber(10, 20);function checkNumber(num) {
//   if (num > 0){
//     console.log("Negative");
//   }
//   else if (num < 0) {
//     console.log("Positive");
//   } else {
//     console.log("Zero");
//   }
// }

// 5.Write a function sumNumbers that takes a
// number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.

// let sum=0;
// let i=0;
// function sumNumbers(n){
//     while(i<=n){
//         sum+=i;
//         i++;
//     }
//     return sum;
// }
// console.log(sumNumbers(5));

//6.Write a function calculateFactorial 
//that takes a number n as a parameter and returns the factorial of that number using a while loop.

// let sum=1;
// let i=1;
// function calculateFactorial(n){
//     while(i<=n){
//         sum*=i;
//         i++;
//     }
// return sum;
// }
// console.log(calculateFactorial(5));

//7.Write a function printEvenNumbers 
//that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.

// let sum = 0;
// let i = 1;
// function printEvenNumbers(n) {
//     while (i <= n) {
//         if (i%2 == 0) {
//             sum+=i;
//             console.log(i);
//         } i++;
//     }return sum;
// }
// console.log(printEvenNumbers(10));

//8. Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n.
// However, there is an error in the while loop that causes the function to return the wrong result.

// function sumNumbers(n) {
//     let sum = 0;
//     let i = 0;
//     while (i < n) {
//         sum += i;
//         i++;
//     } return sum;
// }
// console.log(sumNumbers(10));

//9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:
//If the number is divisible by 3, return "Divisible by 3".
//If the number is divisible by 5, return "Divisible by 5".
//If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
//If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".

// function classifyNumber(num){
//     if(num%3==0 && num%5==0){
//         console.log( "Divisible by both 3 and 5");
//     }
//     else if(num%5==0){
//         console.log("Divisible by 5");
//     }
//     else if(num%3==0){
//         console.log("Divisible by 3");
//     }
//     else{
//         console.log("Not divisible by 3 or 5");
//     }
//     return num;
// }
// console.log(classifyNumber(15));

//10 Write a JavaScript function getDayName that takes a number (from 1 to 7) 
//and returns the corresponding day of the week.

// function getDayName(n) {
//     switch (n) {
//         case 1:
//             console.log("sunday");
//             break;
//         case 2:
//             console.log("monday");
//             break;
//         case 3:
//             console.log("tuesday");
//             break;
//         case 4:
//             console.log("wednesday");
//             break;
//         case 5:
//             console.log("thursday");
//             break;
//         case 6:
//             console.log("friday");
//             break;
//         case 7:
//             console.log("saturday");
//             break;
//     }
// }getDayName(6);

//11.Write a function printMultiplicationTable that takes a number n, 
//range r and prints the multiplication table for that number in reverse order.
//For example, if n =5 and r = 6

// function printMultiplicationTable(n, r) {
//     for (let i = r; i >= 1; i--) {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// } printMultiplicationTable(5, 6);

//12. Write a program where a robot must complete 10 laps around a circuit.
// Use a while loop to count the laps and display the lap number each time the robot completes one.

// let n=10;
// for(i=1;i<=n;i++){
//     console.log(`Lap Number${i}`);
// }

//13. A robot moves forward as long as its battery level is above 20%. 
//Using a while loop, simulate the robot's movement, 
//decreasing the battery level by 5% after each step and displaying the remaining battery level. 
//Once the battery level is below 20%, Display Battery is low.
// I take help in chat GPT

// let batteryLevel = 100;
// while (batteryLevel > 20) {
//     console.log(`Moving forward... Remaining battery: ${batteryLevel}%`);
//     batteryLevel -= 5; 
// }
// console.log("Battery is low.");

//14. A robot can move in 4 directions: North, South, East, and West. 
//Use a switch statement to make the robot move in the direction entered by the user
// and print the robot's new position after each movement.
// I take help in chat GPT

// let position = { x: 0, y: 0 };
// function moveRobot(direction) {
//     switch (direction.toLowerCase()) {
//         case 'north':
//             position.y += 1;
//             break;
//         case 'south':
//             position.y -= 1;
//             break;
//         case 'east':
//             position.x += 1;
//             break;
//         case 'west':
//             position.x -= 1;
//             break;
//         default:
//             console.log("Invalid direction! Please enter North, South, East, or West.");
//             return; 
//     }
//     console.log(`Robot moved ${direction}. New position: (${position.x}, ${position.y})`);
// }
// moveRobot('North');
// moveRobot('East');  
// moveRobot('South');
// moveRobot('West');  

//15.An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. 
//Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

// let altitude = 1000;
// function descend() {
//     const interval = setInterval(() => {
//         altitude -= 10;
//         console.log(`Current altitude: ${altitude}ft`);
//         if (altitude <= 0) {
//             clearInterval(interval);
//             console.log("Flight arrived");
//         }
//     }, 1000);
// }
// descend();

// let a = 5;
// let b = 10;
// let c = 3;

// if( a > b && a > c) {
//     console.log(a);
// }

// else if (b > a && b > c) { //sign changed
//     console.log(b);
// }
// else {
//     console.log(c);
// }

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let userName = '';  // Declare the variable to store the name
rl.question(`What's your name?`, input => {
  userName = input;  // Store the input in the userName variable
  console.log(`Name saved!`);
  rl.close();
  // You can now use the userName variable wherever needed
  console.log(`The name you entered is: ${userName}`);
});
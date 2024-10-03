    //1. Push Multiple Elements
    //Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.

// let colors = ['Red', 'Blue'];
// colors.push('Green', 'Yellow');
// console.log(colors);

//2. Shift Multiple Times
//Create an array of 5 fruits. Use shift() to remove the first two fruits, 
//one by one, and print the array after each removal.

// let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// fruits.shift();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

//3. Unshift with Multiple Arguments
//Write a program to create an array of 2 sports. 
//Use unshift() to add 3 more sports to the beginning in a single line and print the array.

// let sports = ['Soccer', 'Basketball'];
// sports.unshift('Tennis', 'Baseball', 'Rugby');
// console.log(sports);

//4. Find Non-Existing Element with indexOf()
//Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.

// let devices = ['Phone', 'Tablet', 'Desktop'];
// let index = devices.indexOf('Laptop');
// console.log(index);

//5. Split String with Different Delimiter
//Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.

// let str = "HTML-CSS-JavaScript";
// let array = str.split('-');
// console.log(array);

//6. Reverse Order of Array Using pop()
//Write a program to create an array of 4 numbers.
// Use pop() to remove the elements one by one and store them in a new array in reverse order. Print the reversed array.

// let numbers = [1, 2, 3, 4];
// let reversedArray = [];
// while (numbers.length > 0) {
//     reversedArray.push(numbers.pop());
// }
// console.log(reversedArray);

//7. Joining Array Elements Without a Separator
//Create an array of 4 fruits. Use join() without any separator
// to combine the array elements into a single string and print the result.

// let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// let combinedFruits = fruits.join('');
// console.log(combinedFruits);

//8. Object with Simple Properties
//Write a program to create an object car with properties make, model, and year. Print the model of the car.

// let car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2021
// };
// console.log(car.model);

//9. Array of Objects (Books)
//Create an array of 2 objects, where each object represents a book with properties title and author. 
//Print the title of the first book.

// let books = [
//     {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee'
//     },
//     {
//         title: '1984',
//         author: 'George Orwell'
//     }
// ];
// console.log(books[0].title);

//10. Adding New Property to Objects in an Array  
//You have an array of 4 objects, each representing a car with properties brand and model. 
//Write a program to add a new property year to each object and assign a value, then print the updated array.

// let cars = [
//     { brand: 'Toyota', model: 'Camry' },
//     { brand: 'Honda', model: 'Civic' },
//     { brand: 'Ford', model: 'Mustang' },
//     { brand: 'Chevrolet', model: 'Malibu' }
// ];
// cars.forEach(car => {
//     car.year = 2022;
// });
// console.log(cars);

//11. Summing Object Property Values in an Array  
//You have an array of 3 objects, each representing a product with properties name and price. 
//Write a program to calculate and print the total price of all the products in the array.

// let products = [
//     { name: 'Laptop', price: 1000 },
//     { name: 'Phone', price: 500 },
//     { name: 'Tablet', price: 300 }
// ];
// let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
// console.log(`Total price of all products: $${totalPrice}`);

//12. Finding an Object by Property Value in an Array 
//You have an array of 5 objects, each representing a student with properties name and grade.
// Write a program to find and print the name of the student whose grade is "A".

// let students = [
//     { name: 'Alice', grade: 'B' },
//     { name: 'Bob', grade: 'A' },
//     { name: 'Charlie', grade: 'C' },
//     { name: 'Diana', grade: 'A' },
//     { name: 'Ethan', grade: 'B' }
// ];
// let studentWithA = students.find(student => student.grade === 'A');
// if (studentWithA) {
//     console.log(`Student with grade A: ${studentWithA.name}`);
// } else {
//     console.log('No student with grade A found.');
// }

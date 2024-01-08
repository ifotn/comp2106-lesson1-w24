// import file system library to read text files
let fs = require('fs');

// read & display list of food
let food = fs.readFileSync('food.txt', 'utf8');
console.log(food);
console.log('We ate this stuff');

// read & display drinks
let drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log('We drank this stuff');
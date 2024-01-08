let fs = require('fs');

// read & display food
let food = fs.readFile('food.txt', 'utf8', (err, data) => {
    // if readFile succeeds, log the data from file
    console.log(data);
})

console.log('We ate this');

// read & display drinks
let drinks = fs.readFile('drinks.txt', 'utf8', (err, data) => {
    // if readFile succeeds, log the data from file
    console.log(data);
})

console.log('We drank this');
var readlineSync = require('readline-sync');
const welcomeMessage = "Let's make some calculations!";
console.log(welcomeMessage)
    // Wait for user's response.
    //var userName = readlineSync.question('May I have your name? ');
    //console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
//var favFood = readlineSync.question('What is your favorite food? ', {
//    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
//});
//console.log('Oh, ' + userName + ' loves ' + favFood + '!');

/*Your script must have:

A function that adds two numbers and returns the result
A function that multiplies two numbers and returns the result
A function that divides two numbers and returns the result
A function that subtracts two numbers and returns the result
Each function will have 2 parameters, num1, num2
On the console the prompt will print to the user:
Please enter your first number (store that number)
Please enter your second number (store that number)
Please enter the operation to perform: add, sub, mul, div (then store the operation)
Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
You will then print to the console: The result is: [the result]*/

function addingTwo(num1, num2) {
    var num1 = Number(readlineSync.question('What is the first number to be added?'));
    var num2 = Number(readlineSync.question('What is the second number to add to the first?'));
    return num1 + num2
}
console.log(addingTwo())
    //.questionInt
function multiplyingTwo(num1, num2) {

}

function dividingTwo(num1, num2) {

}

function substractingTwo(num1, num2) {

}
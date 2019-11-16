var readlineSync = require('readline-sync');
const welcomeMessage = "Let's make some calculations!";
console.log(welcomeMessage)



function calculator() {
    function addingTwo(num1, num2) {
        var num1 = Number(readlineSync.question('What is the first number to be added? '));
        var num2 = Number(readlineSync.question('What is the second number to add to the first? '));
        return console.log(num1 + num2)
    }

    function multiplyingTwo(num1, num2) {
        var num1 = Number(readlineSync.question('What is the first number to be multiplied? '));
        var num2 = Number(readlineSync.question('What is the second number to multiply to the first? '));
        return console.log(num1 * num2)
    }

    function dividingTwo(num1, num2) {
        var num1 = Number(readlineSync.question('What is the first number to be divided? '));
        var num2 = Number(readlineSync.question('What is the second number to divide the first by? '));
        return console.log(num1 / num2)
    }

    function substractingTwo(num1, num2) {
        var num1 = Number(readlineSync.question('What is the first number to be substracted from? '));
        var num2 = Number(readlineSync.question('What is the second number to substract from the first? '));
        return console.log(num1 - num2)
    }

    function operationChoice() {
        var operation = readlineSync.question("What operations would you like to carry on with? \n Note: all are lowercased: ")


        return (operation == "add" || operation == "addition" ? addingTwo() :
            operation == "multiply" || operation == "multiplication" ? multiplyingTwo() :
            operation == "divide" || operation == "division" ? dividingTwo() :
            operation == "substract" || operation == "substraction" ? substractingTwo() :
            console.log("Please try again with: 'add' 'multiply' 'divide' or 'substract' :) "))
    }
    operationChoice()
    var goodByeMessage = "Have a Great Number Day!";

    function doneOrNot() {
        var doneOrNotV = readlineSync.question("Would you like to make more calculations? HINT: 'yes' or 'no': ")
        return (doneOrNotV == "yes" ? calculator() :
            doneOrNotV == "no" ? console.log(goodByeMessage) :
            "Please try again: yes or no.")
    }
    doneOrNot()
}
calculator()
module.exports = calculator;
//this is my calculator project. 
//with a full function called calculator
//the calculator function is exported in line 54 ^^^



// Wait for user's response.
//var userName = readlineSync.question('May I have your name? ');
//console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
//var favFood = readlineSync.question('What is your favorite food? ', {
//    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
//});
//console.log('Oh, ' + userName + ' loves ' + favFood + '!');

/*Your script must have:

...A function that adds two numbers and returns the result
...A function that multiplies two numbers and returns the result
...A function that divides two numbers and returns the result
...A function that subtracts two numbers and returns the result
...Each function will have 2 parameters, num1, num2
...On the console the prompt will print to the user:
...Please enter your first number (store that number)
...Please enter your second number (store that number)
...Please enter the operation to perform: add, sub, mul, div (then store the operation)
Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
You will then print to the console: The result is: [the result]*/

//.questionInt
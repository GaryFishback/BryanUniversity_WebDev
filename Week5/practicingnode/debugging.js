const readline = require("readline-sync");
// let num1 = readline.questionInt("What is your first number?\n ");
// let num2 = readline.questionInt("What is your second number?\n ");
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(num1 + num2);
// console.log(`the result of adding ${num1} and ${num2} is ${num1 + num2}`);

var readlineSync = require("readline-sync");
function addTwoNumbers(num1, num2) {
  var sum = num1 + num2;
  console.log("the result", sum);
}
function timesTwoNumbers(num1, num2) {
  var multiply = num1 * num2;
  console.log("the result", multiply);
}
function divideTwoNumbers(num1, num2) {
  var divide = num1 / num2;
  console.log("the result", divide);
}
function subtractTwoNumbers(num1, num2) {
  var substract = num1 - num2;
  console.log("the result", substract);
}
var num1 = readlineSync.questionInt("May I have your first number? ");
console.log(num1);
var num2 = readlineSync.questionInt("May i have your second number? ");
console.log(num2);
var chooseWhatYouWant = readlineSync.question(
  "what would you like to do here?/ add, sub, mult, div? "
);
if (chooseWhatYouWant === "add") {
  addTwoNumbers(num1, num2);
} else if (chooseWhatYouWant === "mult") {
  timesTwoNumbers(num1, num2);
} else if (chooseWhatYouWant === "div") {
  divideTwoNumbers(num1, num2);
} else chooseWhatYouWant === "sub";
subtractTwoNumbers(num1, num2);

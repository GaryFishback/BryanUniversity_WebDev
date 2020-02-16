//The math.js file should create and export functions for addition, subtraction, multiplication and division.

adding = (num1, num2) => {
  console.log(num1 + num2);
};
substracting = (num1, num2) => {
  console.log(num1 - num2);
};
multiplying = (num1, num2) => {
  console.log(num1 * num2);
};
dividing = (num1, num2) => {
  console.log(num1 / num2);
};

module.exports = { adding, substracting, multiplying, dividing };

/*Write a function that accepts two numbers as parameters, and returns the sum.
Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.*/

function sumOfTwo(num1, num2) {
    return num1 + num2
}
console.log(sumOfTwo(1, 3))

function whichIsBigger(x, y, z) {
    return (x > y && x > z ? x + " is greatest." :
        y > x && y > z ? y + " is greatest." :
        z > x && z > y ? z + " is greatest." :
        x == y && x > z ? x + " and " + y + " are greater than " + z :
        z == y && z > x ? y + " and " + z + " are greater than " + x :
        x == z && x > y ? x + " and " + z + " are greater than " + y :
        x == y && y == z ? "They Are all the same number" :
        false);
}

console.log(whichIsBigger(8, 9, 12))

//why do we keep doing the even/odd comparison again? does it have special practical use in the future that makes it so important?
function evenOrOdd(x) {
    return (x % 2 === 0 ? "even" : "odd")
}
console.log(evenOrOdd(6))
console.log(evenOrOdd(5))

//Write a function that accepts a string as a parameter. 
//If the length of the string is less than or equal to twenty characters long, 
//return the string concatenated with itself (string + string). 
//If the string is more than twenty characters long, return the first half of the string.
var stringExLong = "blue string, more like red";
var stringExShort = "blue string";

function stringL(string) {
    return (string.length <= 20 ? string + " " + string : string.substring(0, string.length / 2))
}
console.log(stringL(stringExLong))
console.log(stringL(stringExShort))
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


/* i don't quite understand what the instructions for this assignment are asking...
My guess is that it refers to the geometric sequence equation? Cause is an "n" value and the numbers are added.
But then it asks for the "most occuring letter in the string" ? so what do we do with the sum?
And what is the most occuring letter supposed to mean in a string of numbers?

Write a function that accepts a number ‘n’ as a parameter. 
Then print the first ‘n’ Fibonacci numbers and return their sum.
The first numbers are: 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
So if n were 6, the sum of 1+1+2+3+5+8 would be 20
Don't hardcode the sequence.
Write a function that accepts a string as a parameter. 
Return the most frequently occurring letter in that string. (White spaces count as a letter)*/


function sumFibonacci(num) {
    function fibonacciSequence(num) {
        var goldenRatio = 1.61803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475408807538689175212663386222353693179318006076672635443338908659593958290563832266131992829026788;
        var goldenRatioN = -0.61803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475408807538689175212663386222353693179318006076672635443338908659593958290563832266131992829026788;
        //goldenRatioN variable is optional if 1 - goldenRatio is written instead of it.
        var fNum = (Math.pow(goldenRatio, num) - Math.pow(goldenRatioN, num)) / (Math.sqrt(5));
        return (Math.round(fNum * 100) / 100)
    }
    var array = [];
    var result = 0;
    for (var o = 0; o < num; o++) {
        array.push(fibonacciSequence(o));
        result += array[o];
    }

    return result
}
console.log(sumFibonacci(2))
console.log(sumFibonacci(5))
console.log(sumFibonacci(20))
console.log(sumFibonacci(100))
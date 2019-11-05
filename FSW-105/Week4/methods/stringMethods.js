function capitalizeAndLowercase(string) {
    return string.toUpperCase() + string.toLowerCase()
}
console.log(capitalizeAndLowercase("Hello")) // => "HELLOhello"

//Make a function that returns a number half the length, and rounded down.
//You 'll need to use Math.floor().
function findMiddleIndex(string) {
    //var stringHalfLength = wasn't necessary;
    return Math.floor(string.length / 2)
}
console.log(findMiddleIndex("Hello")) // => 2
console.log(findMiddleIndex("Hello World")) // => 5

//Make a function that uses slice() and the other functions you've written to return the first half of the string.
function returnFirstHalf(string) {
    return string.substring(0, string.length / 2)
}
console.log(returnFirstHalf("Hello")) // => "He"
console.log(returnFirstHalf("Hello World")) // => "Hello"
function capitalizeAndLowerCase(string) {
    var firstHalf = string.substring(0, string.length / 2).toUpperCase(); //reminder to self: 0, is ONLY for first half
    var secondHalf = string.substring(string.length / 2).toLowerCase();
    return firstHalf + secondHalf
}
console.log(capitalizeAndLowerCase("Hello")) // => "HEllo"
console.log(capitalizeAndLowerCase("Hello World")) // => "HELLO world"

//Make a function that takes any string and capitalizes any character that follows a space.*/

function capitalize(string) {
    var splitBySpace = string.split(" ");
    longString = "";
    for (var i = 0; i < splitBySpace.length; i++) {
        longString += splitBySpace[i].charAt(0).toUpperCase() + splitBySpace[i].slice(1) + " "
    }

    return longString
}
console.log(capitalize("hey friends! practice practice practice!")) // => "Hey Friends! Practice Practice Practice!"*/
console.log(capitalize("erase una vez un cuento...")) //second trial
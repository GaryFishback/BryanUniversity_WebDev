function getGreater(num1, num2) {
  return( num1 > num2 ? "is greater than" : "is not greater than");
}
console.log (getGreater(5, 3))

let cat = "cat".length;
let plusOneOrNot = 0; //change to 0 for a true result, change to anything else for a false result
let dog = "dog".length + plusOneOrNot;

function getCatLength( x) {
    return ( x === 3 ? "is the length" : "is not")
} 
console.log(getCatLength( cat));

function getCatVsDog(x, y) {
    return ( x === y ? "cat is equal to dog" : "not equal")
}
console.log(getCatVsDog(cat , dog));
// - changed only the ternary, should i also apply the changes to the ifs in comment sections?
/////////////////////////////////////////////// -

/* if (num1 > num2){
    console.log("is greater than")
}
var cat= "cat".length;
if (cat === 3){
    console.log("is the length")
}
var plusOneOrNot = 0; //change to 0 for a true result, change to anything else for a false result
var dog = "dog".length + plusOneOrNot;
if (cat === dog){
    console.log("cat is equal to dog")
} else {
    console.log("not the same")
}
/////////////////////////////////////////////////////////////*/
var person = {
    name: "Bobby",
    age: 12
}
function getPersonAge() {
    return ( person.age >= 18 ? person.name + " is allowed to go" : person.name + " is not allowed to go")
}
console.log(getPersonAge());
function getPersonFirstLetter() {
    return (person.name.charAt(0) === "B" ? person.name + " is allowed to go" : person.name + " is not allowed to go")
}
console.log(getPersonFirstLetter())

function getPersonAgeAndLetter() {
    return (person.name.charAt(0) === "B" , person.age >= 18 ? person.name + " is allowed to go" : person.name + " is not allowed to go")
}
console.log(getPersonAgeAndLetter())
///////////////////////////////////////////////////////////
/*
var person ={
    name: "Bobby",
    age: 12
}
//Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.
if (person.age >= 18) {
    console.log(person.name + " is allowed to go")
} else {
    console.log( person.name + " is not allowed to go")
}

//Using that same object, only allow them into the movie if their name starts with "B".
if (person.name.charAt(0) === "B"){
    console.log(person.name + " is allowed to go")
}
//Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
if (person.name.charAt(0) === "B", person.age >= 18){
     console.log(person.name + " is allowed to go")
} else {
     console.log( person.name + " is not allowed to go")
}

////////////////////////////////////////////////////////////////////////*/
var oneNoString = 1; //change to 1, "1" or anyOtherThanOne respectively
function strictOrNot(valueX) {
    return ( 
        "1"  === valueX ? "strict" 
        : valueX == "1" ? "abstract"
        : "not equal at all")
}
console.log(strictOrNot(oneNoString));

function twoInFour (x, y) {
    return (x <= y, y == 4 ? "smaller/equal to 2 AND equal to 4" : "not either smaller/equal to 2 OR equal to 4")
}
console.log(twoInFour(1, 2)) 

/////////////////////////////////////////////////////////////////////////
/*//Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

var oneNoString = 1; //change to 1, "1" or anyOtherThanOne respectively
if ( "1"  === oneNoString){
    console.log("strict")
} else {if ( oneNoString == "1" ){
    console.log ("abstract" || "loose")
    } else {
        console.log ("not equal at all")
    }}
//Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.

if (oneNoString <= 2, 2 == 4) {
    console.log("yes")
} else {
    console.log("no")
}*/

//i kind of still like if better than ternary, but according to further research the latter might have further uses. 



/*Write an if statement that checks to see if "dog" is a string
Write an if statement that checks to see if "true" is a boolean
Write an if statement that checks to see if a variable has been defined or not
Write an if statement asking if "s" greater than 12?
Try it with a few more letters and a few numbers.
Write a ternary statement that console.logs whether a number is odd or even. For example: var myNum= 10;*/
var dogString = "dog";
function dogF(x){
    return (typeof(x) == "string" ? "yes string": "no string")
}
console.log(dogF(dogString))
var trueString = "true";
function ifTrue(x){
    return (typeof(x) == "boolean" ? "yes boolean"
    : typeof(x) == "string" ? "just string"
    :"neither string nor boolean");
}
console.log(ifTrue(trueString))

//if (typeof variable !== 'undefined') {
    // the variable is defined
function ifDefined(variable){
    return ( typeof(variable) === "undefined" ? "undefined":"defined");
}
console.log(ifDefined())

var stringForGreaterOrNot = "s";
var numberForGreaterOrNot = 12
function sGreater12( string, number){
    return ( string > number ? "string is greater than number"
    :"string is NOT greater than number");
}
console.log(sGreater12(stringForGreaterOrNot, numberForGreaterOrNot))

var number = 30;
function oddOrEven(num){
    return ( num % 2 ==0 ? "even" :"odd");
}
console.log(oddOrEven(number))
console.log(oddOrEven(55))


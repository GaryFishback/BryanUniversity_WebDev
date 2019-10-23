let fiveBeGreater = 5 > 3;
function getReturn(fiveBeGreater) {
  return ( fiveBeGreater ? "is greater than" : "is not greater than");
}
console.log(getReturn(true));
console.log(getReturn(false));

let cat = "cat".length;
let plusOneOrNot = 0; //change to 0 for a true result, change to anything else for a false result
let dog = "dog".length + plusOneOrNot;

function getCatLength() {
    return ( cat === 3 ? "is the length" : "is not")
}
console.log(getCatLength());

function getCatVsDog() {
    return ( cat === dog ? "cat is equal to dog" : "not the same")
}
console.log(getCatVsDog());

///////////////////////////////////////////////
/*if (5 > 3){
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
function getBobbyAge() {
    return ( person.age >= 18 ? person.name + " is allowed to go" : person.name + " is not allowed to go")
}
console.log(getBobbyAge());
function getBobbyFirstLetter() {
    return (person.name.charAt(0) === "B" ? person.name + " is allowed to go" : person.name + " is not allowed to go")
}
console.log(getBobbyFirstLetter())

function getBobbyAgeAndLetter() {
    return (person.name.charAt(0) === "B" , person.age >= 18 ? person.name + " is allowed to go" : person.name + " is not allowed to go")
}
console.log(getBobbyAgeAndLetter())
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
function strictOrNot() {
    return ( 
        "1"  === oneNoString ? "strict" 
        : oneNoString == "1" ? "abstract"
        : "not equal at all")
}
console.log(strictOrNot());

function twoInFour () {
    return (oneNoString <= 2, 2 == 4 ? "yes" : "no")
}
console.log(twoInFour())

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

function dogF(){
    return (typeof("dog") == "string" ? "yes": "no")
}
console.log(dogF())

function ifTrue(){
    return (typeof("true") == "boolean" ? "yes"
    : typeof("true") == "string" ? "string"
    :"no");
}
console.log(ifTrue())

function ifDefined(){
    return ( typeof(yourvar) == "undefined"? "yes":"no");
}
console.log(ifDefined())

var stringForGreaterOrNot = "s";
function sGreater12(){
    return ( stringForGreaterOrNot > 12 ? "yes":"no");
}
console.log(sGreater12())

var num = 30;
function oddOrEven(){
    return ( num%2 ==0 ? "even":"odd");
}
console.log(oddOrEven())
console.log(oddOrEven(num = 55))
console.log(oddOrEven(num = 66))
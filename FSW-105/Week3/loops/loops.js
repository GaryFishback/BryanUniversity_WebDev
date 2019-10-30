console.log("MESSAGE: EVERYTHING UP FROM HERE IS THE EVEN/ODD For Loop. I left it because its output is too long")

for (var i = 0; i < 100; i++) {
    if (i % 2 === 0 ? console.log("Even") : console.log("Odd"));
} //that's a lot of output..

//Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var computerAmount = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer")
        computerAmount++
}
console.log(computerAmount)

/*Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.*/
var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]


for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    var o = peopleWhoWantToSeeMadMaxFuryRoad[i];
    var gender = "";
    if (o.gender == "female" ? gender = "HER" : gender = "HIM")
        if (o.age >= 18 ? console.log(o.name + " is old enough to see MadMax Fury Road. Let " + gender + " into the show.") :
            console.log(o.name + " is NOT old enough to see MadMax Fury Road. DO NOT Let " + gender + " into the show."));
}


//Create a for loop that iterates through 101 numbers(from 0 - 100).
//If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".

//Imagine you have a button that toggles a light on and off. 
//Loop through the following array of numbers and toggle the button the numbers of times for each number. 
//The array [2, 3, 2] would toggle the button 7 times.
//The light is off to start with. Log to the console whether or not the light is on at the end.
//[2, 5, 435, 4, 3] //light on [1, 1, 1, 1, 3] //light on  [9, 3, 4, 2] //light off
//var array = [2, 5, 435, 4, 3];
//var array = [1, 1, 1, 1, 3];
var array = [9, 3, 4, 2];
var arrayNumber = 0;
for (var i = 0; i < array.length; i++) {
    arrayNumber += array[i];
}

//console.log(arrayNumber) i was just testing the number i got for this var.
if (arrayNumber % 2 == 0 ? console.log("light off") : console.log("light on"));



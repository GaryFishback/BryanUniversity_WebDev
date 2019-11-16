/*const result = arr.filter(function(num) {
        if (num % 2 === 0) {
            return num
        }
    })
    //}*/
function filterFunction(array, functionToRun) {
    this.newArray = array.filter(functionToRun);
}

/*function fiveAndGreaterOnly(num) {
    return num > 5;
}
var array1 = [3, 6, 8, 2];
var ocean = new filterFunction(array1, fiveAndGreaterOnly)
console.log(ocean) // 6,8, 2*/
//console.log(even)
var array1 = [3, 6, 8, 2];

function fiveAndGreaterOnly(arr) {

    function operationFunction(num) {
        return num > 5;
    }

    var sea = new filterFunction(arr, operationFunction)
    console.log(sea)
}

fiveAndGreaterOnly(array1)

function evensOnly(arr) {
    function evenOrOdd(num) {
        return num % 2 === 0
    }
    var array2 = new filterFunction(arr, evenOrOdd)
    console.log(array2)
}
evensOnly(array1) //6, 8, 2*/

var stringArray = ["dog", "wolf", "by", "family", "eaten", "camping"];

function fiveCharactersOrFewerOnly(arr) {
    function stringLength(string) {
        return string.length <= 5
    }
    var string3 = new filterFunction(arr, stringLength)
    console.log(string3)
}
fiveCharactersOrFewerOnly(stringArray)


var objectsArray = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

function peopleWhoBelongToTheIlluminati(arr) {
    function belongOrNot(object) {
        return object.member == true
    }
    var persons4 = new filterFunction(arr, belongOrNot)
    console.log(persons4.newArray)
}
peopleWhoBelongToTheIlluminati(objectsArray)

var ageObjectArray = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

function ofAge(arr) {
    function ageOrNot(object) {
        return object.age >= 18
    }
    var persons5 = new filterFunction(arr, ageOrNot)
    console.log(persons5.newArray)
}
ofAge(ageObjectArray)


console.log("filter ends here. Map starts here")
    //////////////////////////FILTER ENDS HERE.
    //////////////////////////MAP Starts Here.

function mapFunction(array, functionToRun) {
    this.mappedArray = array.map(functionToRun);
}

var numArray = [2, 5, 100]

function doubleNumbers(arr) {
    function toDouble(num) {
        return num * 2
    }
    var mapArray1 = new mapFunction(arr, toDouble)
    console.log(mapArray1)
}

doubleNumbers(numArray)

function stringitUp(arr) {
    function toString(num) {
        return num.toString()
    }
    var mapArray2 = new mapFunction(arr, toString)
    console.log(mapArray2)
}
stringitUp(numArray)

var messyCaps = ["john", "JACOB", "jinGleHeimer", "schmidt"]

function capitalizeNames(arr) {
    function capitalizingFirstOnly(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }
    var mapCapitalizing3 = new mapFunction(arr, capitalizingFirstOnly)
    console.log(mapCapitalizing3)
}
capitalizeNames(messyCaps)

function namesOnly(arr) {
    function names(object) {
        return object.name
    }
    var mapNames4 = new mapFunction(arr, names)
    console.log(mapNames4)
}
namesOnly(ageObjectArray)

function makeStrings(arr) {
    function canGoOrNot(object) {
        return (object.age >= 18 ? object.name + " is big enough to see the movie" : object.name + " is not old enough. Try again in a few years.")
    }
    var mapAgeForMovie5 = new mapFunction(arr, canGoOrNot)
    console.log(mapAgeForMovie5)
}
makeStrings(ageObjectArray)

function readyToPutInTheDOM(arr) {
    function toHeadings(object) {
        /* var h1 = document.createElement("h1");
         var h2 = document.createElement("h2");
         h1.textContent = object.name + " ";
         h2.textContent = object.age + " ";
         document.body.append(h1);
         document.body.append(h2);
         h1.style.display = "inline";
         h2.style.display = "inline"; 
         //Working CODE. 
         //COMENTED OUT: Because "document' is not recorgnized by terminal outside of DOM.*/
        var h1 = object.name;
        var h2 = object.age;
        return `<h1>${h1}</h1><h2>${h2}</h2>`
    }
    var mapHeadings6 = new mapFunction(arr, toHeadings)
    console.log(mapHeadings6.mappedArray)
}
readyToPutInTheDOM(ageObjectArray)

console.log("Map ends here. Reduce starts here")
    //////////////////////////MAP ENDS HERE.
    //////////////////////////REDUCE Starts Here.

function reduceFunction(array, functionToRun, placeholder) {
    this.reduceArray = array.reduce(functionToRun, placeholder);
}


const nums = [1, 2, 3]

function total(arr) {
    function addingAll(final, num) {
        final += num
        return final
    }
    var reduceNums1 = new reduceFunction(arr, addingAll, 0)
    console.log(reduceNums1.reduceArray)
}
total(nums)

function stringConcat(arr) {
    function addingAll(final, num) {
        final += num.toString()
        return final
    }
    var reduceString2 = new reduceFunction(arr, addingAll, [])
    console.log(reduceString2.reduceArray)

}
stringConcat(nums)

var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zach", age: 19, voted: false }
]


function totalVotes(arr) {
    function votedOrNot(final, object) {
        if (object.voted) { final++ }
        return final
    }
    var reduceVoters3 = new reduceFunction(arr, votedOrNot, 0)
    console.log(reduceVoters3.reduceArray)
}
totalVotes(voters)

var whishlist = [
    { tittle: "Tesla Model S", price: 90000 },
    { tittle: "4 carat diamond ring", price: 45000 },
    { tittle: "Fancy hacky Sack", price: 5 },
    { tittle: "Gold fidgit spinner", price: 2000 },
    { tittle: "A Second Tesla Model S", price: 90000 },
]

function shoppingSpree(arr) {
    function shopping(final, object) {
        final += object.price
        return final
    }
    var reduceWishing4 = new reduceFunction(arr, shopping, 0)
    console.log(reduceWishing4.reduceArray)
}
shoppingSpree(whishlist)

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

function flatten(arr) {
    function arrayOfArrays(final, array) {
        final = final.concat(array)
        return final
    }
    var reduceAllIntoOne = new reduceFunction(arr, arrayOfArrays, [])
    console.log(reduceAllIntoOne.reduceArray)

}
flatten(arrays)

// //Given an array of potential voters, return an object representing the results of the vote
// //Include how many of the potential voters were in the ages 18-25, 
// //how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. 
// //The resulting object containing this data should have 6 properties. See the example output at the bottom.

// //function voterResults(arr) {
// //function ageVotes(arr) {
// //function youngVotes(arr) {
// var youngVotes = voters.reduce(function(final, object) {
//         if (object.age >= 18 && object.age <= 25) { final++ }
//         return final
//     }, 0)
//     //}

// /*function youngVoted(final, object) {
//     if (object.age >= 18 && object.age <= 25 && object.voted) { final++ }
//     return final
// }

// function midVotes(final, object) {
//     if (object.age >= 26 && object.age <= 35) { final++ }
//     return final
// }

// function midVoted(final, object) {
//     if (object.age >= 26 && object.age <= 35 && object.voted) { final++ }
//     return final
// }

// function oldVotes(final, object) {
//     if (object.age >= 36 && object.age <= 55) { final++ }
//     return final
// }

// function oldVoted(final, object) {
//     if (object.age >= 36 && object.age <= 55 && object.voted) { final++ }
//     return final
// }*/
// let votesObject = {
//         youngVoters: youngVotes(),
//         /*youngVoted: youngVoted(),
//         midVoters: midVotes(),
//         midVoted: midVoted(),
//         oldVoters: oldVotes(),
//         oldVoted: oldVoted(),*/
//     }
//     //     return votesObject;
//     //     //}
//     //     //return ageVotes()
//     // }
//     //youngVotes(voters)

// // youth: 18-25. mids: 26-36. olds: 36-55
// // youngvoted     midvoted     oldvoted
const readline = require("readline-sync");
console.log("Hello, I hope your ready for a great Adventure !!!" + "\n");
let fName = readline.question(" What is your name?\n ");
console.log(
  "Hello " +
    fName +
    ", I will be here to give you options in your adventure along the way" +
    "\n"
);
function walkingAgain(name) {
  let movement = readline.question("Please enter w to walk around \n\n");
  console.log(name);
  if (movement === "w") {
    console.log("\nWalking...\n");
  } // Attack
  let attack = Math.random() * 100;
  if (attack < 5) {
    console.log("Your are being Attacked by a Troll !!!");
  } else if (attack < 10) {
    console.log("Your are being Attacked by a Ogre !!!");
  } else if (attack < 15) {
    console.log("Your are being Attacked by a Zombie !!!");
  } else if (attack < 20) {
    console.log("Your are being Attacked by a Goblin !!!");
  } else if (attack < 25) {
    console.log("Your are being Attacked by a Skeleton !!!");
  } 
  // Attack
  while ((attack < 5, attack < 10, attack < 15, attack < 20, attack < 25)) {
    let fightFlee = readline.question("Would you like to attack or run? \n\n");
    if (fightFlee === "attack") {
      let damage = readline.question("min or max attack?\n\n");
      let min = Math.floor(Math.random() * 50) + 1;
      let max = Math.floor(Math.random() * 100) + 50;
      while (damage === "min") {
        if (min < 25) {
          console.log("you have done no damage");
        } else if (min < 50) {
          console.log("you have done " + min + " damage");
        }
        return;
      }
      while (damage === "max") {
        if (max <= 75) {
          console.log("you have done " + max + " damage");
        }
        if (max >= 75) {
          console.log("you have defeated your enemy");
        }
        return;
      }

      console.log("you fought back\n");
    } else {
      // console.log("you ran away\n");
      let chance1 = Math.floor(Math.random() * 100);
      var escapeChance = readline.question("choose 1 or 2 to escape");
     if (escapeChance === 1 ){ 
       while (escapeChance === "1") {
        if (chance1 > 50) {
          console.log("you escaped");
         walkingAgain(name)
         break
        } else {
          console.log("you did not escape");
    
          break;
        }} elseif (escapeChance ===3){ while (escapeChance === "2") {
          if (chance1 > 100) {
            console.log("you did not escape\n");
            break;
          } else if (chance1) {
            console.log("you escaped\n");
            walkingAgain(name)
            break;
          }
          return;
        }}
      }
    }
  }
  if (attack < 100) {
    console.log("no enimies nearby");
  } // Continue walking
  let stayRun = readline.question("continue walking?\n\n");
  if (stayRun === "yes") {
    console.log("continue walking...");
    return walkingAgain(name);
  }
}
walkingAgain(fName);
// let array1 = ["banana", "apple", "orange", "watermelon"];
// let array2 = ["carrot", "tomato", "pepper", "lettuce"];
// function myArray(array1, array2){
//     array2.pop()
//     array1.shift()
//     let x = array1.indexOf("orange")
//     let y = array2.length
//     //console.log("fruit: ", array1 + ' ' + x)
//     //console.log("vegetables: ", array2 + ' ' + y)
//     let food = array1.concat(array2).reverse()
//     //let foodSlice = foodString.splice(4, 2)
//     let foodRemove = food.splice(2,2)
//     return console.log(y + ',' + food)
// }
// myArray(array1, array2)

// var caps = "Hello"
// // function capilizeAndLowercase(caps){
// //     return (caps.toUpperCase() + caps.toLowerCase())
// // }
// console.log(caps.toUpperCase() + caps.toLowerCase())
// var findMiddleIndex = "Hello World"
// function halfLength(){
//     return Math.floor(findMiddleIndex.length / 2)
// }
// ​
// console.log(halfLength())
// ​
// var returnFirstHalf = "Hello World"
// function firstHalf(){
//     var half = returnFirstHalf.slice(0, 6)
//     return half
// }
// console.log(firstHalf())
// ​
// var split = "hello world"
// function splitting(){
//     var firstHalf = split.slice(0, 5)
//     var secondHalf = split.slice(6, 11)
//     var firstHalfCaps = firstHalf.toUpperCase()
//     return firstHalfCaps + " " + secondHalf
// }
// console.log(splitting())
// ​
// var capitalize = "hey friends! practice practice practice!"
// function firstLetter(str){
//     var splitStr = str.toLowerCase().split(' ');
//         for (var i = 0; i < splitStr.length; i++) {
//             splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//         }
//     return splitStr.join(' ')
// }
// console.log(firstLetter(capitalize))
// getUniqueIds = amount => {
//   var numbers = [];
//   for (var i = 20; i < 20 + amount; i++) {
//     var newNumber = Date.now() + Math.random() * 2489;
//     //   console.log(newNumber);

//     numbers.push(newNumber);
//   }
//   for (var i = 20; i < numbers.length; i++) {
//     console.log(numbers.find(1));
//   }
//   console.log(numbers);

//   // usage example:
//   var uniqueA = numbers.filter(function(element) {
//     return numbers.indexOf(element) == numbers.lastIndexOf(element);
//   });

//   //   console.log(uniqueA.length);
// };
// getUniqueIds(5);

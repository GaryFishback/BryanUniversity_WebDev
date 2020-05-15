var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male",
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female",
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female",
  },
  {
    name: "Sam",
    age: 30,
    gender: "male",
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female",
  },
];

function isOldEnough() {
  for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
      console.log("oldEnough");
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18) {
      console.log("notOldEnough");
    }
  }
}
isOldEnough();
console.log("==========");

function isOldEnoughPersonalMessage() {
  for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
      console.log(
        peopleWhoWantToSeeMadMaxFuryRoad[i].name +
          " is old enough to see Mad Max"
      );
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18) {
      console.log(
        peopleWhoWantToSeeMadMaxFuryRoad[i].name +
          " is not old enough to see Mad Max"
      );
    }
  }
}
isOldEnoughPersonalMessage();
console.log("==========");

function isOldEnoughPersonalMoreMessage() {
  for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
      console.log(
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender +
          " is old enough to see Mad Max, let in"
      );
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18) {
      console.log(
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender +
          " is not old enough to see Mad Max, don't let in"
      );
    }
  }
}
// const readlineSync = require("readline-sync");
// // var num1 = Number(readline.question("What is the first number to be added? "));
// // console.log("First number is " + (num1 + 2));

// // const userName = readlineSync.question("May I have your name? ");

// // while (true) {
// //   const toBegin = readlineSync.question(
// //     userName +
// //       ", you find yourself trapped in a room. In order for you to get out of the room, you must first find the key that unlocks the door. Beware! Your response could be fatal. And try not to run out of air. Are you ready to begin?"
// //   );
// //   (roomChoice = [
// //     "Put your hand in the hole in the wall",
// //     "Find key",
// //     "Open door"
// //   ]),
// //     (index = readlineSync.keyInSelect(
// //       roomChoice,
// //       "How would you like to proceed?"
// //     ));
// //   if (roomChoice[index] === "Put your hand in the hole in the wall") {
// //     console.log(userName + " has died");
// //     return false;
// //   } else if (roomChoice[index] === "Find key") {
// //     let key = Math.random();
// //     if (key < 0.5) {
// //       console.log("Sorry, please search again.");
// //     } else {
// //       console.log("Yay! You found a key. Now, you can open the door.");
// //       if (
// //         readlineSync.keyInYN(userName + " Would you like to open the door?")
// //       ) {
// //         console.log("You opened the door");
// //         return false;
// //       } else {
// //         console.log("You have ran out of air, and died.");
// //         return false;
// //       }
// //     }
// //   } else if (roomChoice[index] === "Open door") {
// //     console.log(
// //       "You do not have a key, you are unable to open the door. Please search for a key."
// //     );
// //   }
// // }

// var human = {
//   name: "Bobbie",
//   age: 12
// };

// // console.log(Object.values(human));
// // console.log(human.name.charAt(0));

// if (human.age === "12") {
//   console.log(human.age);
// }

// // var str = "HELLO WORLD";
// // var res = str.charAt(0);
// // console.log(res);
// var num1 = 5;
// var num2 = 3;
// //a + b = c   a=5 ; b= 3 ; c=8
// function greaterThan(n1, n2) {
//   if (n1 > n2) {
//     console.log("greater than");
//   }
// }
// greaterThan(5, 3);

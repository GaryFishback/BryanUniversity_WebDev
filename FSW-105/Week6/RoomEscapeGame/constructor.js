const rl = require('readline-sync');

const playerName = rl.question('The year is 1985. Disguised as a human, a cyborg assassin known as a Terminator travels from 2030 to kill Sarah Connor. Your mission is to protect Sarah. \n State your name to accept this mission. ');

const greetings = `${playerName}, `;
console.log(greetings)
    // Ask user to enter "w" to walk
let action = rl.keyIn(`${playerName}, enter "w" to walk \n`, { limit: '$<w>' });
// menuId = readline.keyIn(`"w" to walk, or "e" to exit the forest instantly: `, { limit: '$<w , e>' });
//all of these variable will go inside the function...
// Now check if they entered w
if (action === "w") {
    console.log("And we are walking...");
    // Chance of enemy appearing
    function walkingOrEnemy() {
        let enemies = [
            "T-1000 Liquid Cyborg ",
            "T-X Female Cyborg ",
            "T-3000 Terminator Genisys"
        ];
        let enemyhps = 100;
        let tryAgain = true;
        let found = false;
        let hp = 100;
        let min = 10;
        let max = 50;
        if (Math.random() * 100 > 50) { //now it will create a new random every time
            // Enemy appears
            // Show enemy's name
            // generate a random number between 0 and 2
            let randomEnemy = (Math.floor(Math.random() * 3) + 1) - 1; // number between 0 - 2
            console.log("Oh no, " + enemies[randomEnemy] + " appeared");
            // Generate random number to determine if enemy will attack
            random = Math.random() * 100;
            // 1/4 th chance that they will get attacked
            if (random < 25) {
                console.log("Enemy is attacking!");
                // They are getting attacked
                random = Math.random() * 100;
                // Apply random amount of damage to player
                hp = hp - random;
                // Check if hp is less than 0
                // Is the player dead?
                if (hp <= 0) {
                    // Player is dead
                    console.log("Astalavista baby!");
                    // Exit here
                }
                console.log("You got lucky! " + hp);
                walkingOrEnemy(playerName)
            } else {
                // They did not get attacked
                action = rl.keyIn(`${playerName}, Do you want to attack? enter (a) or run? enter (r)? \n`, { limit: '$<a, r>' });
                // Check if they entered a or r
                if (action === "a") {
                    // Player decided to attack
                    // Generate random attack number between min and max
                    //let randomEnemy = (Math.floor(Math.random() * 3) + 1)  - 1; 
                    console.log("User decided to attack!");
                    //we can start it here and see where it goes. 
                    let enemyAttack = Math.random() * 100;

                    hp = hp - enemyAttack
                    console.log(hp) //here i told it to rest the hp - random. and then it console.log(hp)
                        // so random number is 33, smaller thna 50. 
                        //and hp is 66. because 100-33. yep. this is what we're going to do with creature hp too. 
                        //yepx2. this just means yep and yep again.
                        //want a break? kkx3
                        //you can make the createhp as hw. or we can meet in a few hours. 
                        //yes which? lolx3 
                        //i'll push this to my github and send you the file url. 
                    if (enemyAttack > 50) { //if the random number is greater than 50
                        console.log(enemyAttack) //we see what that number is
                    } else if (enemyAttack < 50) { //if the number is smaller than 50
                        console.log(`Not greater than 50 ${enemyAttack}`) //we see this, with the number
                    } else {
                        console.log(`${enemyAttack} IS 50`) //if is neither, has to be equal 50
                    } //it should work now
                }
                if (action === "r") {
                    // Player decided to run
                    console.log("User decided to run!");
                    walkingOrEnemy(playerName)
                }
            }
        } else {
            let action = rl.keyIn(`${playerName}, enter "w" to walk \n`, { limit: '$<w>' });
            if (action === "w") {
                console.log("And we are walking AGAIN...");
                walkingOrEnemy(playerName)
            }
        }
    }
    walkingOrEnemy(playerName)
}


// while(tryAgain) {
//     index = rl.keyInSelect(enemies, `${playerName}, enter "w" to walk`);
//     // They put hand in hole
//     console.log("You picked: "  + index);
//     if ( index == 0) {
//         console.log("GAME OVER!!! You are dead.");
//         tryAgain = false;
//     }
//     // They are trying to open door 
//     else if ( index == 1 && !found) {
//         console.log("This door is locked! You must seasrch for the key. Beware! One wrong move and you will DIE!!!");
//     }else if (index == 1 && found) {
//         console.log("CONGRATULATIONS! You have found freedom!");
//         tryAgain = false;
//     }
//     // They decided to search for key 
//     else if ( index == 2) {
//         console.log("AWSOME! You have found the key. Proceed to the door to unlock it. KEY PRESS 2 TO ACTIVATE.");
//         found = true;
//     } else if(index == -1){
//         console.log("Thank you for Playing. Please come back again!")
//         break;
//     }
// }

//var a = [true, false, false]
//a.sort(function(){ return Math.random() >= 0.5 ? 1 : -1 })[0]

// var d = Math.random();
// if (d < 0.5)
//     // 50% chance of being here
// else if (d < 0.7)
//     // 20% chance of being here
// else
//     // 30% chance of being here
// const readlineSync = require('readline-sync')
// let userHP = 50
// let enemyHP = 50
// const enemies = ['Large Rat', 'Wolf', 'Cut Throat', 'Large Bat']
// const treasure = ['Health Potion', 'Attack Boost Potion', 'Copper Piece', 'Meat']
// let drop = treasure[Math.floor(Math.random() * treasure.length)];
// var loot = []
// const userName = readlineSync.question('What is your name?: ')
// readlineSync.question(userName + ' You are about to embark on a new adventure. This journey is fraught with many dangers and may very well be fatal to your health. When you are prepared, press any key and hit "enter", to begin.')

// function loop() {

//     const journeyChoice = ['Show stats', 'Walk', 'Quit']
//     const userAttackPower = Math.floor(Math.random() * (6 - 2 + 1) + 7)
//     const enemy = enemies[Math.floor(Math.random() * enemies.length)]

//     const enemyAttackPower = Math.floor(Math.random() * (4 - 2 + 1) + 7)
//     const index = readlineSync.keyInSelect(journeyChoice, 'How would you like to proceed?')
//         // if (journeyChoice[index] == 'Quit') {
//         // return userName;
//         // }
//     if (journeyChoice[index] == 'Show stats') {
//         console.log(userName + ': \n' + userHP + '\nTreasure: ' + loot)
//     } else if (journeyChoice[index] == 'Quit') {
//         return userHP = 0;
//     } else if (journeyChoice[index] === 'Walk') {
//         let key = Math.random()
//         if (key <= .3) {
//             console.log('Walking...')
//         } else if (key >= .3) {
//             whileLoop: while (enemyHP > 0 && userHP > 0) {
//                 console.log(enemy + ' has approached')
//                 const userAction = readlineSync.question('What do you want to do?, enter "r" to run or "a" to attack: ').toLowerCase()
//                 switch (userAction) {
//                     case 'r':
//                         const runAway = Math.random()
//                         if (runAway < .5) {
//                             console.log('You attempt to run away. But before you can,' + enemy + ' attacks you for: ', enemyAttackPower)
//                         } else {
//                             console.log('You ran away')
//                             break whileLoop
//                         }
//                     case 'a':
//                         do {
//                             enemyHP = enemyHP - userAttackPower;
//                             console.log('You just attacked ' + enemy + ' for ' + userAttackPower + ' attack power');

//                             userHP = userHP - enemyAttackPower;
//                             console.log('Enemy just attacked you for: ' + enemyAttackPower + ' attack power');

//                             if (enemyHP <= 0) {
//                                 console.log('You killed ' + enemy + '. \n' + enemy + ' dropped: ' + drop + '.')
//                                 let prize = Math.random()
//                                 if (prize <= .3) {
//                                     let loot = loot.push(drop)
//                                 }
//                                 console.log(drop)
//                             } else if (userHP <= 0) {
//                                 console.log(enemy + 'has defeated you. You are dead.')
//                             }
//                         }


//                         while (enemyHP > 0 || userHP > 0)
//                         restoreUser = function() {
//                             userIsActive = true;
//                             userHP = 50;
//                         };
//                         restoreUser()
//                         loop()
//                 }
//             }
//         }
//     }
// }
// while (userHP > 0) {
//     loop()
// }
const readline = require("readline-sync");
// There's also a hole in the wall in the room.
// If your character puts his hand in the hole, he dies.

// Tell the user their options:

// Put hand in hole
// Find the key, or
// Open the door
// They can't open the door unless they find the key first.
// They die if they put their hand in the hole
// Each user action (1-3) will result in a random algorithm that results in a success or failure leading to another choice.

// -Greeting message to user explaining their situation locked in the room and their options for getting out

const askingName = readline.question("Welcome! Please enter your name! ");
const greetingSituation = `Nice to meet you ${askingName}. Since you have found yourself here, I suppose you're aware of the fact that you have no escape from the room you're in. \nPlease don't panic for your oxygen levels have started to run out and the more you panic the faster they will go further down... yes, until you have no air left to breath. :)`;
console.log(greetingSituation);
const askingState = readline.question("Are you still alive? :) ");

ifAlive = (name) => {
    const firstRoundToOptions = readline.question("Well, 'Due to regulations of the state' we were required to leave you a Hope of escape, and inform you about it. \nYou have 3 options; choose wisely for if thee fail to choose rightfully thee shall no longer be named (in other words, you will die) :) \n Are you Ready to Choose? ");
    choosing = (name, key = false) => {

        ifSearchKey = (name, key) => {
                searchingKey = (name, key) => {
                    keyFound = (name, key) => {
                        console.log(`Good for you ,${name}! You found the key! \n What to do with the key?`)
                        choosing(askingName, key = true)
                    }
                    keyNotFound = (name) => {
                            console.log(`Try Again ${name}`)
                            choosing(askingName, key = false)
                        } // -Find key should randomly try to find a key and if successful store that item for later use.
                    return ((Math.random() * 10) > 5 ? keyFound(askingName) : keyNotFound(askingName))
                }
                const askBeforeSearchingKey = readline.question(`Smart Choice ${name}. \n Now you have the chance to look around and try to find a key, and if you find it, you might be able to open the door successfully. Are you Ready? `);
                (askBeforeSearchingKey == "yes" || askBeforeSearchingKey == "Yes" ?
                    searchingKey(askingName, key) :
                    ifSearchKey(askingName, key))
                //console.log(`Lets search for something to open the door!`)



            }
            // -Open door without key should, equal locked try again. With key should equal end of game
        doorState = (name, key) => {
            doorNotOpen = (name, key) => {
                    console.log(`Upps. The door is kind of locked per default :) But you're still alive!`)
                    choosing(askingName, key = false)
                }
                (key == true ? console.log(`O.O Wow ${name}, You did it! \n You opened the door to freedom. We're impressed and shall let you go. \n Just remember to beware of any accidents you might accidentally encounter after you leave the residence :) \n For state regulations are not valid out there :)`) :
                    doorNotOpen(askingName, key))
                // -A successful end to game by using key found to exit door
        }
        const options = ['Put Hand In the Hole', 'Search', 'Open Door'];
        let index = readline.keyInSelect(options, `Now, ${name}, you may only choose one at a time :)`)
        return (options[index] == 'Put Hand In the Hole' ? console.log(`RIP ${ name} :) Try again on your next life.`) :
            options[index] == 'Open Door' ? doorState(askingName, key) :
            options[index] == 'Search' ? ifSearchKey(askingName, key) :
            console.log(`Oh, seems like you ran out of air too soom.\n RIP ${askingName}`))
    }
    return (firstRoundToOptions == "yes" || firstRoundToOptions == "Yes" ?
        choosing(askingName, key = false) :
        ifAlive(askingName))


}





ifNotAlive = (name) => {
        console.log(`Oh, seems like you ran out of air too soom.\n RIP ${name}`)
    }
    (askingState == "yes" || askingState == "Yes" ? ifAlive(askingName) : ifNotAlive(askingName))
    // index = readlineSync.keyInSelect(items[, query[, options]])
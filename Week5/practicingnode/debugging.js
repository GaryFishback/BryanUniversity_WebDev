const readline = require("readline-sync")
console.log("welcome to the Cave")
const userName = readline.question("may i have your name ")
console.log("whats up " + userName)
function escapee(name,creature = "creature1", hp = 50,inventory = []){
    function Print(name,hp,inventory){console.log(name  +" " + hp)
     console.log(inventory)}
const escape2 = ["Walk", "Print"]
const escape = readline.keyInSelect(escape2,"how would you like to escape the room?")
console.log(escape2[escape])
console.log(name)
if (escape2[escape]== "Walk"){
     console.log("Walking")
    var creatureChance = Math.floor(Math.random() * 10)
    console.log(creatureChance)
    if (creatureChance > 4)
    {console.log("you found a creature")
    const fight = ["attack", "runaway","Print"]
    // const reward = ["wheat","corn","drink"] unnecessary
​const fighting = readline.keyInSelect(fight,"fight or run?") //extra comma
    console.log(fight[fighting])
const creature1 = {
    name: "creature1",
    hp:100,
    power:15,
    reward: "wheat"
}
const creature2 = {
    name: "creature2",
    hp:100,
    power:15,
    reward: "corn"
}
const creature3 = {
    name: "creature3",
    hp:100,
    power:15,
    reward: "drink"
}
const userName = {
    name: Name,
    hp: 50,
    power: 50,
    rewards: [],
}
const creatures = [creature1,creature2,creature3]
const fights = (attackers,creatures) => {
    const attacker = Math.floor(Math.random() + attacker.power)
    creature.hp >= attackerAttack;
    const creature = Math.floor(Math.random() + creature.power);
    attacker.hp >= creaturesAttack;
}
 let blah = creatures[Math.floor(Math.random()*creatures.length)];
    console.log(blah)
console.log("You Have Hit The Monster!")}
 else if (fight[fighting]== "runaway"){
     console.log("trying to runaway ")
    var Chance = Math.floor(Math.random() * 10)
        console.log(Chance)
    if (Chance > 4)
        {console.log("you have been eaten")
            escapee(name)}
    if(Chance === 4)
        {console.log("you have escaped")
            escapee(name)}
    if(Chance < 4)
        {console.log("you must fight!")
            escapee(name)}
 }
 else if (fight[fighting]== "Print"){
     console.log("printing again")
         Print(name,hp,inventory)
 }
}
    if(creatureChance <= 4)
        {console.log("you found nothing keep walking")
            escapee(name)}
 }
 if (escape2[escape]= "Print"){
 Print(name,hp,inventory)
 }
escapee(userName)
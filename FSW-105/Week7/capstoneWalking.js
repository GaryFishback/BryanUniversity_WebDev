const readline = require("readline-sync");
const askingName = readline.question(`Welcome Player! You have just entered the Owlleaf Forest. Here thy will either Grow Stronger or Deteriorate by the creatures that recide within. \n Please let me have your UserName so i can keep record of your scores :> `)
Hp = 0;

function UserObject(name, Hp, Items) {
    this.name = name,
        this.Hp = Hp,
        this.Items = Items
}
let userInventory = new UserObject(name = askingName, Hp, Items = [])
UserObject.prototype.walking = (name, Hp, Items) => {
    console.log(`Your initial HP is: ${Hp}`)
    menuId = readline.keyIn(`"w" to walk, or "e" to exit the forest instantly: `, { limit: '$<w , e>' });

    walkingAgain = (name, Hp, Items) => {
        let algorithm = (Math.random() * 100);
        (algorithm > 75 ?
            creatureFound(name, Hp, Items) : creatureNotFound(name, Hp, Items))
    }

    printingUser = (name, Hp, Items) => {
        userInventory.Hp = Hp;
        console.log(userInventory)
        walkingAgain(name, Hp, Items)
    }
    attacking = (name, Hp, creatureHp, Items, creatureItem) => {
        let algorithm = (Math.random() * 100);
        ifWins = (name, Hp, creatureHp, Items) => {
            console.log(`The creature's HP = ${creatureHp}. They are defeated and shall retreat`)
            Hp = +algorithm
            Items.push(creatureItem)
            creatureNotFound(name, Hp, Items)
        }
        ifDead = (name, Hp, creatureHp, Items) => {
            console.log(`${name}, you have been defeated on battle. \n You shall be sent to the medical center at the start of the forest. \n If thy wish, thou may start walking from there again`);
            walkingAgain(name, Hp = 50, Items)
        }
        console.log("Running away chances are over -You must fight 'till the end!");
        console.log(`Your HP : ${Hp} Your Items: ${Items}`);
        console.log(`Creature HP : ${creatureHp} The Item of the creature: ${creatureItem}`);
        creatureHp = creatureHp - algorithm;
        Hp = Hp - (Math.random() * 100);
        (Hp <= 0 ? ifDead(name, Hp, Items) :
            creatureHp >= 0 ? attacking(name, Hp, creatureHp, Items) : ifWins(name, Hp, creatureHp, Items))
    }

    function CreatureObject(name, hp, items) {
        this.name = name,
            this.hp = hp,
            this.items = items
    }
    blueBird = (name, Hp, Items) => {
        let blueBird = new CreatureObject("Blue Bird", 50, "Topaz key")
        console.log(blueBird)
        runAway = (name, Hp, Items) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? console.log("Phew, you ran away") : attacking(name, Hp, blueBird.hp, Items))
            Hp = Hp - (algorithm)
                // continueWalking = readline.keyIn(`Good Bye BlueBird. ${name} hit "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
                // (continueWalking == "w" ? walkingAgain(name, Hp, Items) :
                //     continueWalking == "p" ? printingUser(name, Hp, Items) : console.log("Bye"))
        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature: `, { limit: '$<r , a>' });
        (aOrRun == "a" ? attacking(name, Hp += 10, blueBird.hp, Items, blueBird.items) : runAway(name, Hp, blueBird.hp, Items, blueBird.items))
    }
    redHound = (name, Hp, Items) => {
        let redHound = new CreatureObject("Red Hound", 75, "Sapphire Chest")
        console.log(redHound)

        runAway = (name, Hp, Items) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? console.log("Phew, you ran away") : attacking(name, Hp, redHound.hp, Items))
            Hp = Hp - algorithm;

            // continueWalking = readline.keyIn(`Good Bye Red Hound! ${name} hit "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
            // (continueWalking == "w" ? walkingAgain(name, Hp, Items) :
            //     continueWalking == "p" ? printingUser(name, Hp, Items) : console.log("Bye"))
        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature: `, { limit: '$<r , a>' });
        (aOrRun == "a" ? attacking(name, Hp += 10, redHound.hp, Items, redHound.items) : runAway(name, Hp += 10, redHound.hp, Items, redHound.items))
    }
    skylander = (name, Hp, Items) => {
        let skylander = new CreatureObject("Chimera", 75, "Breath of Sky")
        console.log(skylander)
        attack = (name, Hp, Items) => {
            console.log("Attacking");
            Hp += 10
            attacking(name, Hp, skylander.hp, Items)
        }
        runAway = (name, Hp, Items) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? console.log("Phew, you ran away") : attacking(name, Hp, skylander.hp, Items))
            Hp = Hp - algorithm;
            // ranAway = (name, Hp, Items) => {
            // continueWalking = readline.keyIn(`Good Bye Skylander. ${name} hit "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
            // (continueWalking == "w" ? walkingAgain(name, Hp, Items) :
            //     continueWalking == "p" ? printingUser(name, Hp, Items) : console.log("Bye"))
            // }
        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature: `, { limit: '$<r , a>' });
        (aOrRun == "a" ? attacking(name, Hp += 10, skylander.hp, Items, skylander.items) : runAway(name, Hp += 10, skylander.hp, Items, skylander.items))
    }
    willowl = (name, Hp, Items) => {
        let willowl = new CreatureObject("Willowl", 150)
        console.log(willowl)
        runAway = (name, Hp, Items) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? console.log("Phew, you ran away") : attacking(name, Hp, willowl.hp, Items))

            Hp = Hp - algorithm;
            creatureNotFound(name, Hp, Items)
            continueWalking = readline.keyIn(`Good Bye Willowl. ${name} hit "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
            (continueWalking == "w" ? walkingAgain(name, Hp, Items) :
                continueWalking == "p" ? printingUser(name, Hp, Items) : console.log("Bye"))
        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature: `, { limit: '$<r , a>' });
        (aOrRun == "a" ? attacking(name, Hp += 10, willowl.hp, Items) : runAway(name, Hp, Items))
    }
    creatureFound = (name, Hp, Items) => {
        let algorithm = (Math.random() * 100);
        console.log(`Oh ${name}, this is it! \nYou found a creature of the forest!`);
        (algorithm <= 25 ? willowl(name, Hp, Items) :
            (algorithm * 100) > 25 && algorithm < 50 ? redHound(name, Hp, Items) :
            (algorithm * 100) >= 50 && algorithm < 75 ? skylander(name, Hp, Items) :
            (algorithm * 100) >= 75 && algorithm <= 100 ? blueBird(name, Hp, Items) :
            console.log("black"))
    }
    creatureNotFound = (name, Hp, Items) => {
            console.log(Hp)
            console.log("Oh look, there is a tree!")
            continueWalking = readline.keyIn(`No creature found this time. Keep walking ${name}. "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
            (continueWalking == "w" ? walkingAgain(name, Hp, Items) :
                continueWalking == "p" ? printingUser(name, Hp, Items) : console.log(`Bye ${name}, Come back some other day!`))
        }
        ((Math.random() * 100) > 75 ? creatureFound(name, Hp, Items) : creatureNotFound(name, Hp, Items))
}
userInventory.walking(askingName, userInventory.Hp + 200, userInventory.Items)
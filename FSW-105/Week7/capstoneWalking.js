const readline = require("readline-sync");
const askingName = readline.question(`Welcome Player! You have just entered the Owlleaf Forest. Here thy will either Grow Stronger or Deteriorate by the creatures that recide within. \n Please let me have your UserName so i can keep record of your scores :> `)
Hp = 0;

function UserObject(name, Hp, Items) {
    this.name = name,
        this.Hp = Hp,
        this.Items = Items
}
let userInventory = new UserObject(name = askingName, Hp, Items = [])
UserObject.prototype.walking = (name, Hp) => {
    console.log(`Your initial HP is: ${Hp}`)
    menuId = readline.keyIn(`"w" to walk, or "e" to exit the forest instantly: `, { limit: '$<w , e>' });

    walkingAgain = (name, Hp) => {
        let algorithm = (Math.random() * 100);
        (algorithm > 75 ?
            creatureFound(name, Hp) : creatureNotFound(name, Hp))
    }

    printingUser = (name, Hp) => {
        userInventory.Hp = Hp;
        console.log(userInventory)
        walkingAgain(name, Hp)
    }
    attacking = (name, Hp, creatureHp) => {
        let algorithm = (Math.random() * 100);
        ifWins = (name, Hp, creatureHp) => {
            console.log(`The creature's HP = ${creatureHp}. They are defeated and shall retreat`)
            Hp = +algorithm
            creatureNotFound(name, Hp)
        }
        ifDead = (name, Hp, creatureHp) => {
            console.log(`${name}, you have been defeated on battle. \n You shall be sent to the medical center at the start of the forest. \n If thy wish, thou may start walking from there again`);
            walkingAgain(name, Hp = 50)
        }
        console.log("Running away chances are over -You must fight 'till the end!");
        console.log("Your HP : " + Hp);
        console.log("Creature HP : " + creatureHp);
        creatureHp = creatureHp - algorithm;
        Hp = Hp - (Math.random() * 100);
        (Hp <= 0 ? ifDead(name, Hp) :
            creatureHp >= 0 ? attacking(name, Hp, creatureHp) : ifWins(name, Hp, creatureHp))
    }

    function CreatureObject(name, hp) {
        this.name = name,
            this.hp = hp,
            this.Items = Items
    }
    blueBird = (name, Hp) => {
        let blueBird = new CreatureObject("Blue Bird", 50)
        console.log(blueBird)
        runAway = (name, Hp) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? console.log("Phew, you ran away") : attacking(name, Hp, blueBird.hp))
            Hp = Hp - (algorithm)
            continueWalking = readline.keyIn(`Good Bye BlueBird. ${name} hit "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
            (continueWalking == "w" ? walkingAgain(name, Hp) :
                continueWalking == "p" ? printingUser(name, Hp) : console.log("Bye"))
        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature: `, { limit: '$<r , a>' });
        (aOrRun == "a" ? attacking(name, Hp += 10, blueBird.hp) : runAway(name, Hp, blueBird.hp))
    }
    redHound = (name, Hp) => {
        let redHound = new CreatureObject("Red Hound", 75)
        console.log(redHound)

        runAway = (name, Hp) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? console.log("Phew, you ran away") : attacking(name, Hp, redHound.hp))
            Hp = Hp - algorithm;

            continueWalking = readline.keyIn(`Good Bye Red Hound! ${name} hit "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
            (continueWalking == "w" ? walkingAgain(name, Hp) :
                continueWalking == "p" ? printingUser(name, Hp) : console.log("Bye"))
        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature: `, { limit: '$<r , a>' });
        (aOrRun == "a" ? attacking(name, Hp, redHound.hp) : runAway(name, Hp, redHound.hp))
    }
    skylander = (name, Hp) => {
        let skylander = new CreatureObject("Chimera", 75)
        console.log(skylander)
        attack = (name, Hp) => {
            console.log("Attacking");
            Hp += 10
            attacking(name, Hp, skylander.hp)
        }
        runAway = (name, Hp) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? console.log("Phew, you ran away") : attacking(name, Hp, skylander.hp))
            Hp = Hp - algorithm;
            ranAway = (name, Hp) => {
                continueWalking = readline.keyIn(`Good Bye Skylander. ${name} hit "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
                (continueWalking == "w" ? walkingAgain(name, Hp) :
                    continueWalking == "p" ? printingUser(name, Hp) : console.log("Bye"))
            }
        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature: `, { limit: '$<r , a>' });
        (aOrRun == "a" ? attack(name, Hp) : runAway(name, Hp))
    }
    willowl = (name, Hp) => {
        let willowl = new CreatureObject("Willowl", 150)
        console.log(willowl)
        runAway = (name, Hp) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? console.log("Phew, you ran away") : attacking(name, Hp, willowl.hp))

            Hp = Hp - algorithm;
            creatureNotFound(name, Hp)
            continueWalking = readline.keyIn(`Good Bye Willowl. ${name} hit "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
            (continueWalking == "w" ? walkingAgain(name, Hp) :
                continueWalking == "p" ? printingUser(name, Hp) : console.log("Bye"))
        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature: `, { limit: '$<r , a>' });
        (aOrRun == "a" ? attacking(name, Hp += 10, willowl.hp) : runAway(name, Hp))
    }
    creatureFound = (name, Hp) => {
        let algorithm = (Math.random() * 100);
        console.log(`Oh ${name}, this is it! \nYou found a creature of the forest!`);
        (algorithm <= 25 ? willowl(name, Hp) :
            (algorithm * 100) > 25 && algorithm < 50 ? redHound(name, Hp) :
            (algorithm * 100) >= 50 && algorithm < 75 ? skylander(name, Hp) :
            (algorithm * 100) >= 75 && algorithm <= 100 ? blueBird(name, Hp) :
            console.log("black"))
    }
    creatureNotFound = (name, Hp) => {
            console.log(Hp)
            console.log("Oh look, there is a tree!")
            continueWalking = readline.keyIn(`No creature found this time. Keep walking ${name}. "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
            (continueWalking == "w" ? walkingAgain(name, Hp) :
                continueWalking == "p" ? printingUser(name, Hp) : console.log(`Bye ${name}, Come back some other day!`))
        }
        ((Math.random() * 100) > 75 ? creatureFound(name, Hp) : creatureNotFound(name, Hp))
}
userInventory.walking(askingName, userInventory.Hp + 200, userInventory.Items)
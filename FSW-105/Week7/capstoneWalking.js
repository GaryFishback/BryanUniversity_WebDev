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
        // menuId = readline.keyIn(`"w" to walk, or "e" to exit the forest instantly: `, { limit: '$<w , e>' });


    walking = (name, Hp, Items) => {
        let algorithm = (Math.random() * 100);
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
            console.log("Oh look, is just a tree!")
            continueWalking = readline.keyIn(`No creature found this time. Keep walking ${name}. "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
            (continueWalking == "w" ? (Math.random() * 100) > 75 ? creatureFound(name, Hp, Items = Items) : creatureNotFound(name, Hp, Items = Items) :
                continueWalking == "p" ? printingUser(name, Hp, Items) : console.log(`Bye ${name}, Come back some other day!`))
        }

        let readyToWalk = continueWalking = readline.keyIn(`Press "y" to keep going, "n" to take a break: `, { limit: '$<y, n>' });
        (readyToWalk == "y" ?
            algorithm > 85 ? creatureFound(name, Hp, Items = Items) : creatureNotFound(name, Hp, Items = Items) :
            walking(name, Hp, Items))


    }

    printingUser = (name, Hp, Items) => {
        userInventory.Hp = Hp;
        userInventory.Items = Items
        console.log(userInventory);
        walking(name, Hp, Items)
    }
    runningAway = (name, Hp, Items) => {
        console.log("Phew, you ran away")
        continueWalking = readline.keyIn(`${name} hit "w" to walk, or "e" to exit the forest instantly, or "p" to see your records: `, { limit: '$<w , e, p>' });
        (continueWalking == "w" ? walking(name, Hp += 20, Items) :
            continueWalking == "p" ? printingUser(name, Hp += 20, Items) : console.log("Bye"))
    }
    attacking = (name, Hp, creatureHp, Items, creatureItem) => {
        let algorithm = (Math.random() * 100);
        ifWins = (name, Hp, creatureHp, Items) => {
            console.log(`The creature's HP = ${creatureHp}. They are defeated and shall retreat`)
            Hp += creatureHp
                // Items = Items.concat(creatureItem)
                // var ItemArray = Items.concat(creatureItem);
                // console.log(ItemArray)
            walking(name, Hp, Items = Items.concat(creatureItem))

        }
        ifDead = (name, Hp, Items) => {
            console.log(`${name}, you have been defeated on battle. \n You shall be sent to the medical center at the start of the forest. \n If thy wish, thou may start walking from there again`);
            walking(name, Hp = 300, Items)
        }
        console.log("Running away chances are over -You must fight 'till the end!");
        console.log(`Your HP : ${Hp}. \nYour Items: ${Items}`);
        console.log(`Creature HP : ${creatureHp}. \nThe Item of the creature: ${creatureItem}`);
        creatureHp = creatureHp - (Math.random() * 100);
        Hp = Hp - (Math.random() * 100);
        (Hp <= 0 ? ifDead(name, Hp, Items) :
            creatureHp >= 0 ? attacking(name, Hp, creatureHp, Items, creatureItem) : ifWins(name, Hp, creatureHp, Items, creatureItem))
    }

    function Creature(name, hp, items) {
        this.name = name,
            this.hp = hp,
            this.items = items
    }
    blueBird = (name, Hp, Items) => {
        let blueBirdObject = new Creature("Blue Bird", 50, ["Topaz key"])
        console.log(blueBirdObject)
        printing = (name, Hp, Items) => {
            userInventory.Hp = Hp;
            userInventory.Items = Items
            console.log(userInventory);
            blueBird(name, Hp, Items)
        }
        runAway = (name, Hp, creatureHp, Items, creatureItem) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? runningAway(name, Hp, Items) : attacking(name, Hp, blueBirdObject.hp, Items, blueBirdObject.items))

        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature, or "p" to see the intinerary: `, { limit: '$<r , a, p>' });
        (aOrRun == "a" ? attacking(name, Hp += 10, blueBirdObject.hp, Items, blueBirdObject.items) : aOrRun == "p" ? printing(name, Hp += 20, Items) : runAway(name, Hp, blueBirdObject.hp, Items, blueBirdObject.items))
    }
    redHound = (name, Hp, Items) => {
        let redHoundObject = new Creature("Red Hound", 75, ["Sapphire Chest"])
        console.log(redHoundObject)
        printing = (name, Hp, Items) => {
            userInventory.Hp = Hp;
            userInventory.Items = Items
            console.log(userInventory);
            redHound(name, Hp, Items)
        }
        runAway = (name, Hp, creatureHp, Items, creatureItem) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? runningAway(name, Hp, Items) : attacking(name, Hp, redHoundObject.hp, Items, redHoundObject.items))
        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature, or "p" to see the intinerary: `, { limit: '$<r , a, p>' });
        (aOrRun == "a" ? attacking(name, Hp += 10, redHoundObject.hp, Items, redHoundObject.items) : aOrRun == "p" ? printing(name, Hp += 20, Items) : runAway(name, Hp, redHoundObject.hp, Items, redHoundObject.items))
    }
    skylander = (name, Hp, Items) => {
        let chimera = new Creature("Chimera", 75, ["Breath of Sky"])
        console.log(chimera)
        printing = (name, Hp, Items) => {
            userInventory.Hp = Hp;
            userInventory.Items = Items
            console.log(userInventory);
            skylander(name, Hp, Items)
        }
        attack = (name, Hp, creatureHp, Items, creatureItem) => {
            console.log("Attacking");
            Hp += 10
            attacking(name, Hp, chimera.hp, Items, chimera.items)
        }
        runAway = (name, Hp, creatureHp, Items, creatureItem) => {
            let algorithm = (Math.random() * 100);
            console.log("Running Away");
            (algorithm <= 50 ? runningAway(name, Hp, Items) : attacking(name, Hp, chimera.hp, Items, chimera.items))

        }
        aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature, or "p" to see the intinerary: `, { limit: '$<r , a, p>' });
        (aOrRun == "a" ? attacking(name, Hp += 10, chimera.hp, Items, chimera.items) : aOrRun == "p" ? printing(name, Hp += 20, Items) : runAway(name, Hp = +10, chimera.hp, Items, chimera.items))
    }
    willowl = (name, Hp, Items) => {
            let willowlObject = new Creature("Willowl", 150, ["Wind Feather", "TalonRing"])
            console.log(willowlObject)
            printing = (name, Hp, Items) => {
                userInventory.Hp = Hp;
                userInventory.Items = Items
                console.log(userInventory);
                willowl(name, Hp, Items)
            }
            runAway = (name, Hp, creatureHp, Items, creatureItem) => {
                let algorithm = (Math.random() * 100);
                console.log("Running Away");
                (algorithm <= 50 ? runningAway(name, Hp, Items) : attacking(name, Hp, willowlObject.hp, Items, willowlObject.items))
            }
            aOrRun = readline.keyIn(`Now ${name} hit "r" to Run Away, or "a" to Attack the creature, or "p" to see the intinerary: `, { limit: '$<r , a, p>' });
            (aOrRun == "a" ? attacking(name, Hp += 10, willowlObject.hp, Items, willowlObject.items) : aOrRun == "p" ? printing(name, Hp += 20, Items) : runAway(name, Hp += 10, willowlObject.hp, Items, willowlObject.items))
        }
        // ((Math.random() * 100) > 75 ? creatureFound(name, Hp, Items) : creatureNotFound(name, Hp, Items))
    walking(name, Hp, Items)
}
userInventory.walking(askingName, userInventory.Hp + 400, userInventory.Items)
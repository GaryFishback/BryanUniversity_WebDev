const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []

    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])


const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr => arr.map(carrot => ({ type: "carrot", name: carrot })))

console.log(mapVegetables(carrots))
const people = [{
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    },
]

const filterForFriendly = (arr => arr.filter(person => person.friendly))
console.log(filterForFriendly(people))

const doMathSum = ((a, b) => a + b)
const produceProduct = ((a, b) => a * b)

console.log(doMathSum(4, 5))
console.log(produceProduct(4, 5))

const printString = ((firstName = "Jane", lastName = "Doe", age = 100) => `Hi, ${firstName} ${lastName}, how does it feel to be ${age} ?`)

console.log(printString())

//I'm not quite sure what it means to "take up one line" so i'll just make it shorthand (?)

const animals = [{
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

const filterForDogs = (arr => arr.filter(animal => (animal.type === "dog" ? true : false)))

console.log(filterForDogs(animals))

const locationAndName = ((location = "Hawaii", name = "Janice") => `Hi, ${name}! \n Welcome to ${location}. \n I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)

console.log(locationAndName())
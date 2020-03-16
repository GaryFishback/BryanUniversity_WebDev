// const name = "John";
// const age = 101;

// function runforLoop(pets) {
//   const petObjects = [];

//   for (let i = 0; i < pets.length; i++) {
//     const pet = { type: pets[i] };
//     let name;
//     if (pets[i] === "cat") {
//       name = "fluffy";
//     } else {
//       name = "spot";
//     }
//     console.log("pet name: ", name);
//     pet.name = name;
//     petObjects.push(pet);
//   }
//   console.log("man name: ", name);
//   return petObjects;
// }
// runforLoop(["cat", "dog"]);

//2
printString = (first, last, age) => {
  console.log(`Hi ${first} ${last}, how does it feel to be ${age}?`);
};

function printString2(first, last, age) {
  console.log(`Hi ${first} ${last}, how does it feel to be ${age}?`);
}
printString("Benjamin", "Ortiz", 21);
printString2("Crystal", "Mullins", 21);

const carrot = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
  return arr.map(function(carrot) {
    return { type: "carrot", name: carrot };
  });
}
mapVegetables2 = arr => {
  return arr.map(carrot => {
    return { type: "carrot", name: carrot };
  });
};
console.log(mapVegetables(carrot));
console.log(mapVegetables2(carrot));

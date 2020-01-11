var enemies = [
  "Lex",
  "Batman",
  "Darkseid",
  "Brainiac",
  "General Zod",
  "Doomsday"
];

function whoWins(isThereKryptonite, enemyName) {
  if (!isThereKryptonite) {
    return "Superman beats " + enemyName + ", of course";
  } else {
    return (
      "Depends on how quick Superman can get rid of the Kryptonite. " +
      enemyName +
      " could possibly win this one."
    );
  }
}
for (i = 0; i < enemies.length; i++) {
  var isThereKryptonite;
  if (i % 2 === 0) {
    isThereKryptonite = true;
  } else {
    isThereKryptonite = false;
  }
  console.log(whoWins(isThereKryptonite, enemies[i]));
}
function howAttractedIsLoisLaneToMe() {
  // 1 is not at all attracted, 10 is "super" attracted...
  return Math.floor(Math.random() * 10 + 1);
}
console.log(howAttractedIsLoisLaneToMe());

var isItClarkKent = true;
var isItSuperman = false;

while (isItClarkKent) {
  console.log("I'm just a nerdy columnist");
  var phoneBoothQuickChange = Math.random();
  if (phoneBoothQuickChange >= 0.5) {
    isItClarkKent = false;
    isItSuperman = true;
    console.log("Now I'm Superman!");
  }
}

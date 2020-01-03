var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];
funtion whoWins("isThereKryptonite" + enemies) {
    if (isThereKryptonite) {
        return "Superman beats " + enemies + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemies + " could possibly win this one.";
    }
}
for (var i = 0; i < enemies.length; i++) {
    var isThereKryptonite;
    if (i % 2 === 0) {
        return "is_there_kryptonite = true";
    } else {
        return "is_there_kryptonite = false";
    }
    console.log(whoWins("is_there_kryptonite" + enemies + [i]));
}
consol.log(howAttractedIsLoisLaneToMe());
var clarkKent = true;
var superman = false;
while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
    } else {
        superman = true;
    }
    console.log("Now I'm Superman!");
}
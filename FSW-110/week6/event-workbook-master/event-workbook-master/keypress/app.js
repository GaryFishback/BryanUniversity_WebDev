/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
const output = document.getElementById("output")

// function keydown(e) {
//    (event.code == "Backspace" ? output.textContent += ` ${e.code}`) 
// };

document.body.addEventListener("keydown", (e) => (event.code == "Backspace" ? output.textContent = " " : output.textContent += ` ${e.code}`))

//document.body.addEventListener("keydown", (e) => output.textContent += ` ${e.code}`)

const newHeading = document.createElement("h2")
newHeading.textContent = "Press 'Backspace' to delete all input"
document.body.append(newHeading)
console.log(document)
var square = document.createElement("div");
document.body.append(square)
square.classList = "square";

console.dir(square)


//The square's color will change as follows:

//Blue when the mouse hovers over the square
function toBackgroundBlue() {
    this.style.backgroundColor = "blue"
}
square.addEventListener("mouseenter", toBackgroundBlue)
    //Red when the mouse button is held down over the square

function toBackgroundRed() {
    this.style.backgroundColor = "red"
}
//square.addEventListener("mouseout", toBackgroundRed)
square.addEventListener("mousedown", toBackgroundRed)
    //Yellow when the mouse button is let go over the square
function toBackgroundYellow() {
    this.style.backgroundColor = "yellow"
}
square.addEventListener("mouseup", toBackgroundYellow)
    //Green when the mouse is double clicked in the square
function toBackgroundGreen() {
    this.style.backgroundColor = "yellowgreen"
}
square.addEventListener("dblclick", toBackgroundGreen)

//Orange when the mouse scroll is used somewhere in the window (not just over the square).

function squareBackgroundOrange() {
    square.style.backgroundColor = "orange"
}
window.addEventListener("scroll", squareBackgroundOrange)


for (var i = 0; i < 20; i++) {
    var h1 = document.createElement("h1");
    h1.textContent = "Headings to make scrolling space"
    document.body.append(h1);
}

function keydown(e) {
    return (event.which == "79" ? square.style.backgroundColor = "orange" :
        event.which == "66" ? square.style.backgroundColor = "blue" :
        event.which == "82" ? square.style.backgroundColor = "red" :
        event.which == "71" ? square.style.backgroundColor = "yellowgreen" :
        event.which == "89" ? square.style.backgroundColor = "yellow" :
        console.log("another key"));
};

document.body.addEventListener("keydown", keydown)


/*Object.keys(window).forEach(key => {
    if (/^on/.test(key)) {
        window.addEventListener(key.slice(2), event => {
            console.log(event.type);
        });
    }
});*/

/*function changingBackground() {
    this.style.backgroundColor = "red"
}

function removingBackground() {
    h1.style.backgroundColor = "white"
}
//h1.addEventListener("click", changingBackground)
//h1.addEventListener("dblclick", removingBackground)



document.body.addEventListener("click", changingBackground)
*/
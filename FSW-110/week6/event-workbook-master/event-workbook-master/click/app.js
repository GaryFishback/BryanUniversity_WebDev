// make the box disapear when the user clicks it

const redBox = document.getElementsByClassName("red-box")

redBox[0].addEventListener("mousedown", (() => redBox[0].remove()))
const gettingRedBox = document.getElementsByClassName("red-box")
const redBox = gettingRedBox[0];
redBox.addEventListener('mousemove', (e) => redBox.innerHTML = `Position X : ${e.pageX} <br> Position Y : ${e.pageY}`)
    //redBox[0].textContent += `mouse location:, ${e.clientX}, ${e.clientY}`))
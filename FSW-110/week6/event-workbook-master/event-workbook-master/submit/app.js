// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function


//Add a name attributes to the input name="user_name". Try changing the ID to "first-name".
const name = document.getElementById("name")

name.name = "user_name";
name.setAttribute("id", "first-name");

const age = document.getElementById("age")

age.type = "Number"
    // Explore some of the input types: 

// number
// date
// color
// range
// radio
// checkbox
const form = document.getElementById("submit-me")
const makingInputs = ["date", "color", "range", "radio", "checkbox"]
for (let i = 0; i < 5; i++) {
    let inputs = document.createElement("input");
    inputs.type = makingInputs[i];
    inputs.style.display = "block";
    form.append(inputs)
}
const gettingAllButtons = document.getElementsByTagName("button")
const button = gettingAllButtons[0]

button.addEventListener("click", ((e) => e.preventDefault()))
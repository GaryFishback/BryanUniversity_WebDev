const form = document.createElement("form")

const input1 = document.createElement("input")

const input2 = document.createElement("input")

document.body.append(form)

const button = document.createElement("button")

form.append(input1, input2, button)

button.textContent = "SUBMIT";

input1.placeholder = "First Name";

input2.placeholder = "Last Name"

button.addEventListener("click", function(e) {
    e.preventDefault()
    const list = document.createElement("ul")
    document.body.append(list)
    const inputValues = [input1.value, input2.value]
    for (let i = 0; i < inputValues.length /*just a number here BUT, if i add anotehr item to this array. The loop runs one more time with it.*/ ; i++) {
        const li = document.createElement("li")
        list.append(li)
        li.textContent = inputValues[i] //this is what is written

    } //loop closes after this brace
    form.reset() //let's see if it works


})
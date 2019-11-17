const form = document.createElement("form");
document.body.append(form);

const makingSections = ["Name", "gender", "location", "diet"];
const makingInputs = ["input1", "input2", "input3"]
const input1Names = ["firstName", "gender", "iceland", "vegetarian"];
const input2Names = ["lastName", "gender", "Spain", "LactoseFree"];
const input3Names = ["age", "gender", "Finland", "Kosher"];
const inputTypes = ["text", "radio", "checkbox", "checkbox"];
const labelIds = ["firstName", "lastName", "age", "male", "female", "gender", "iceland", "Spain", "Finland", "vegetarian", "LactoseFree", "Kosher"]

function labelIds() {
    for (let i = 0; i < labelIds.length; i++) {

    }
}
for (let i = 0; i < makingSections.length; i++) {
    let sections = document.createElement("section");
    sections.classList = makingSections[i];
    form.append(sections)
    for (let i = 0; i < makingInputs.length; i++) {
        let labels = document.createElement("label");
        labels.setAttribute = ("id", labelIds[i])
        labels.innerHTML += labelIds[i];
        sections.append(labels)
        let inputs = document.createElement("input");
        inputs.classList = makingInputs[i];
        labels.append(inputs)
    }


    const input1 = document.getElementsByClassName("input1");
    const input2 = document.getElementsByClassName("input2");
    const input3 = document.getElementsByClassName("input3");
    for (let i = 0; i < input1.length; i++) {
        input1[i].name = input1Names[i];
        input1[i].placeholder = input1Names[i];
        input1[i].type = inputTypes[i];
        input2[i].name = input2Names[i];
        input2[i].placeholder = input2Names[i];
        input2[i].type = inputTypes[i];
        input3[i].name = input3Names[i];
        input3[i].placeholder = input3Names[i];
        input3[i].type = inputTypes[i];
        (input3[i].name === "age" ? input3[i].type = "Number" : console.log("no"))
    }

}

const buttonAlert = document.createElement("button");
buttonAlert.textContent = "Submit";
form.append(buttonAlert);

// function operationAlert() {
//     // return alert(input1.value + " " + input2.value + " " + input3.value)
// }
// buttonAlert.addEventListener("click", operationAlert)
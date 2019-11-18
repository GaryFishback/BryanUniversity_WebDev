const form = document.createElement("form");
document.body.append(form);

const makingSections = ["Name", "gender", "diet", "location"];
const makingInputs = ["input1", "input2", "input3"]
const input1Names = ["firstName", "gender", "diet"];
const input2Names = ["lastName", "gender", "diet"];
const input3Names = ["age", "gender", "diet"];
const inputTypes = ["text", "radio", "checkbox"];
const labelIds1 = ["FirstName: ", "LastName: ", "Age: "]
const labelIds2 = ["Male", "Female", "Prefers Not to Specify"]
const labelIds3 = ["Iceland", "Spain", "Finland"]
const labelIds4 = ["Vegetarian", "LactoseFree", "Kosher"]


for (let i = 0; i < makingSections.length; i++) {
    let sections = document.createElement("section");
    sections.classList = makingSections[i];
    form.append(sections)

    function createHeadings() {
        const headingsText = ["Gender: ", "Diet: ", "Location to Travel: "]
        let headings = document.createElement("h1");
        (sections.className == "gender" ? headings.textContent = headingsText[0] :
            sections.className == "location" ? headings.textContent = headingsText[2] :
            sections.className == "diet" ? headings.textContent = headingsText[1] : console.log("no"));
        sections.append(headings);
    }
    (sections.className !== "Name" ? createHeadings() : console.log("no"));
    if (sections.className !== "location") {

        for (let i = 0; i < makingInputs.length; i++) {
            let labels = document.createElement("label");
            (sections.className === "Name" ? labels.innerHTML = labelIds1[i] :
                sections.className === "gender" ? labels.innerHTML = labelIds2[i] :
                labels.innerHTML = labelIds4[i]);
            sections.append(labels);

            let inputs = document.createElement("input");
            inputs.classList = makingInputs[i];
            labels.append(inputs)
        }

    } else {

        let select = document.createElement("select");
        select.name = "locations";
        sections.append(select);
        for (let i = 0; i < makingInputs.length; i++) {
            let options = document.createElement("option");
            options.classList = labelIds3[i];
            options.value = labelIds3[i];
            options.textContent = labelIds3[i];

            select.append(options)
        }
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
        (input3[i].name === "age" ? input3[i].type = "Number" : console.log("no"));

        (input1[i].name === "gender" ? input1[i].value = "Male" : console.log("no"));
        (input2[i].name === "gender" ? input2[i].value = "Female" : console.log("no"));
        (input3[i].name === "gender" ? input3[i].value = "Prefer Not To Say" : console.log("no"));

        (input1[i].name === "diet" ? input1[i].value = "Vegetarian" : console.log("no"));
        (input2[i].name === "diet" ? input2[i].value = "Kosher" : console.log("no"));
        (input3[i].name === "diet" ? input3[i].value = "Lactose Free" : console.log("no"));
    }
}
const buttonAlert = document.createElement("button");
buttonAlert.textContent = "Submit";
form.append(buttonAlert);

function operationAlert() {
    const checkedInputs = []
    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            checkedInputs.push(form.diet[i].value)
        }
    }

    return alert(
        "FirstName: " + form.firstName.value + "\n" + "LastName: " + form.lastName.value + "\n" +
        "Age: " + form.age.value + "\n" +
        "Gender: " + form.gender.value + "\n" +
        "Location: " + form.locations.value + "\n" +
        "Diet: " + checkedInputs + "."
    )
}
//let toAlert = Object.entries(alertObject)
//return console.log(Object.entries(alertObject))
//return alert(alertObject.FirstName)
// return alert(alertObject.LastName)
// return alert(alertObject.Age)
// return alert(alertObject.Gender)
// return alert(alertObject.Location)
// return alert(alertObject.Diet)

buttonAlert.addEventListener("click", operationAlert)
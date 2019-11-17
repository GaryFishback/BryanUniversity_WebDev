// First name(text input) // Last name(text input) // Age(number input)
// Gender(radio buttons with 2 or more options) 
// Location they 're traveling to (select box with at least 3 options. Your airline that doesn 't fly to many places...)
// Whether they have any dietary restrictions(vegetarian, kosher, lactose free. Include at least 3 options)
// Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.
// There should also be a button at the end of the form to submit it.
//Upon pressing the button, an alert should pop up that looks like this:
//     travel form
// You should style your form(without using Bootstrap) to look good.

const makingInputs = ["input1", "input2", "input3"] //, "input4", "input5", "input6", "input7", "input8", "input9", "input10", "input11"];
    //const placeholdingInputs = ["First Name", "Last Name", "Age", "Gender", "Gender", "Location", "Diet Preference"];
const form = document.createElement("form");
document.body.append(form);

// if (inputs.className == "input4" ? inputs.value = "male" :
//     inputs.className == "input5" ? inputs.value = "female" : console.log("no"))
//     if (inputs.placeholder == "Gender" ? inputs.type = "radio" : console.log("no"));
// if (inputs.placeholder == "Gender" ? inputs.name = "gender" : console.log("no"));
//     placeholdingInputs.forEach(genderInput =>
//         (genderInput == "Gender" ?
//             (function () {
//                 inputs.name = "gender",
//                     inputs.type = "radio",
//                     (inputs.className == "input4" ? inputs.value = "male" :
//                         inputs.className == "input5")
//             }) :
//             console.log("no")))

const makingSections = ["Name", "gender", "location", "diet"];

makingSections.forEach(element => {
    let sections = document.createElement("section");
    sections.classList = (element);
    form.append(sections)

    for (let i = 0; i < makingInputs.length; i++) {
        let inputs = document.createElement("input");
        inputs.classList = makingInputs[i];
        //inputs.placeholder = placeholdingInputs[i];
        sections.append(inputs)
    }

})
let input1 = document.getElementsByClassName("input1");
let input2 = document.getElementsByClassName("input2");
let input3 = document.getElementsByClassName("input3");

let section1 = document.getElementsByClassName("Name");
let firstName = input1[0].name = "firstName";
let lastName = input2[0].name = "lastName";
let age = input3[0].name = "age";
let section2 = document.getElementsByClassName("gender");
let male = input1[1].name = "male";
let female = input2[1].name = "female";
let notTell = input3[1].name = "nottell";
let section3 = document.getElementsByClassName("location");
let iceland = input1[2].name = "Iceland";
let spain = input2[2].name = "Spain";
let finland = input3[2].name = "Finland";
let section4 = document.getElementsByClassName("diet");
//vegetarian = veg, kosher, lactose free = lact
let veg = input1[3].name = "vegetarian";

let kosher = input2[3].name = "Kosher";
let lact = input3[3].name = "LactoseFree";

const buttonAlert = document.createElement("button");
buttonAlert.textContent = "Submit";
form.append(buttonAlert);

function operationAlert() {
    return alert(input1.value + " " + input2.value + " " + input3.value)
}
buttonAlert.addEventListener("click", operationAlert)
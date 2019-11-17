// It is important to note that any button placed inside of <form> tags will
// automatically fire a “submit” event for the form to capture and use. 
//Your task for this assignment is to create a form on an html file that has at least 3 inputs and a button.
// When the button is clicked, the inputs should be displayed in an “alert” window using the alert() method.  
// After the alert is closed, the inputs should clear themselves out.

var makingInputs = ["input1", "input2", "input3"];
var form = document.createElement("form");
document.body.append(form);
input1 = document.createElement("input");
input2 = document.createElement("input");
input3 = document.createElement("input");
input1.placeholder = "First Input Goes Here";
input2.placeholder = "Second Input Goes Here";
input3.placeholder = "Third Input Goes Here";
input1.type = "text";
input2.type = "text";
input3.type = "text";
form.append(input1, input2, input3)
var buttonAlert = document.createElement("button");
buttonAlert.textContent = "Submit";
form.append(buttonAlert);

function operationAlert() {
    return alert(input1.value + " " + input2.value + " " + input3.value)
}
buttonAlert.addEventListener("click", operationAlert)
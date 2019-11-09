var makingSections = ["add", "substract", "multiply"];

makingSections.forEach(element => {
    var sections = document.createElement("section");
    sections.classList = (element);
    document.body.append(sections)
    var num1 = document.createElement("input");
    var num2 = document.createElement("input");
    num1.placeholder = "First Number Goes Here";
    num1.type = "number";
    num2.placeholder = "Second Number Goes Here";
    num2.type = "number";
    sections.append(num1, num2)
    var buttonOperation = document.createElement("button");
    buttonOperation.textContent = (element);
    sections.append(buttonOperation);

    function operationF() {
        function add() {
            function addHeading() {
                var addResultH = document.createElement("h1");
                addResultH.textContent = num1.valueAsNumber + num2.valueAsNumber;
                sections.append(addResultH);

                function addClearButton() {
                    var clearButton = document.createElement("button");
                    clearButton.textContent = "Clear";
                    sections.append(clearButton);

                    function removeHeading() {
                        sections.removeChild(addResultH)
                        sections.removeChild(clearButton)
                    }
                    clearButton.addEventListener("click", removeHeading)
                }
                addClearButton()
            }
            console.log(num1.valueAsNumber + num2.valueAsNumber)
            return addHeading()
        }

        function substract() {
            function subHeading() {
                var subResultH = document.createElement("h1");
                subResultH.textContent = num1.valueAsNumber - num2.valueAsNumber;
                sections.append(subResultH);

                function subClearButton() {
                    var clearButton = document.createElement("button");
                    clearButton.textContent = "Clear";
                    sections.append(clearButton);

                    function removeHeading() {
                        sections.removeChild(subResultH)
                        sections.removeChild(clearButton)
                    }
                    clearButton.addEventListener("click", removeHeading)
                }
                subClearButton()
            }
            console.log(num1.valueAsNumber - num2.valueAsNumber)
            return subHeading()
        }

        function multiply() {
            function mulHeading() {
                var mulResultH = document.createElement("h1");
                mulResultH.textContent = num1.valueAsNumber * num2.valueAsNumber;
                sections.append(mulResultH);

                function mulClearButton() {
                    var clearButton = document.createElement("button");
                    clearButton.textContent = "Clear";
                    sections.append(clearButton);

                    function removeHeading() {
                        sections.removeChild(mulResultH)
                        sections.removeChild(clearButton)
                    }
                    clearButton.addEventListener("click", removeHeading)
                }
                mulClearButton()
            }
            console.log(num1.valueAsNumber * num2.valueAsNumber)
            return mulHeading()
        }


        return (buttonOperation.textContent === "add" ? add() :
            buttonOperation.textContent === "substract" ? substract() :
            buttonOperation.textContent === "multiply" ? multiply() :
            function errorHeading() {
                var errorHeadingV = document.createElement("h2");
                errorHeadingV.textContent = "Error Heading";
                sections.append(errorHeadingV);
            })
    }
    buttonOperation.addEventListener("click", operationF)

});
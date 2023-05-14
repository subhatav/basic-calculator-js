const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialChars = ["%", "/", "*", "-", "+", "="];

let output = ""; // Start from a clear output display

const calculate = (buttonValue) => {

    display.focus();

    if (buttonValue === "=" && output !== "") {

        // Replace `%` with `/100` before evaluation
        output = eval(output.replace("%", "/100"));

    } else if (buttonValue === "AC") {

        output = ""; // Clear the output

    } else if (buttonValue === "DEL") {

        // Remove the last character from output
        output = output.toString().slice(0, -1);

    } else {

        // Return if the output is empty and the operators are pressed
        if (output === "" && specialChars.includes(buttonValue)) return;

        output += buttonValue; // Add the button value to the output
    }

    display.value = output; // Display the output value
};

buttons.forEach((button) => { // Attach button-click event listener to all buttons

    // Event Listener calls the `calculate()` with the dataset value as the argument
    button.addEventListener("click", (event) => calculate(event.target.dataset.value));
});
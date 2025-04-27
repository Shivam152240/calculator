const inputBox = document.getElementById("inputBox");
let currentInput = "";

// Function to handle button clicks
function handleButtonClick(value) {
    if (value === "AC") {
        // Clear the input
        currentInput = "";
    } else if (value === "DE") {
        // Delete the last character
        currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
        // Evaluate the expression
        try {
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = "Error";
        }
    } else if (value === "%") {
        // Calculate percentage
        try {
            currentInput = (eval(currentInput) / 100).toString();
        } catch (error) {
            currentInput = "Error";
        }
    } else {
        // Append the clicked button value
        currentInput += value;
    }

    // Update the input box
    inputBox.value = currentInput;
}

// Add event listeners to all buttons
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button.textContent));
});
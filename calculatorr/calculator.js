document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('input[type="text"]');
    const buttons = document.querySelectorAll('.num, .clear, .sin, .equals');
    let expression = '';

    // Function to update display with current expression
    function updateDisplay() {
        display.value = expression;
    }

    // Function to handle button clicks
    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;

        if (buttonValue === 'C') {
            // Clear the last entry
            expression = expression.slice(0, -1);
        } else if (buttonValue === 'AC') {
            // Clear all
            expression = '';
        } else if (buttonValue === '=') {
            // Evaluate the expression
            try {
                expression = eval(expression);
            } catch (error) {
                expression = 'Error';
            }
        } else {
            // Append the button value to the expression
            expression += buttonValue;
        }

        updateDisplay();
    }

    // Add event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});

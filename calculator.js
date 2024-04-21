let input = document.getElementById('calc');

// document.getElementById = a reference to the HTML element with a specified id attribute
//This line selects the HTML element with the id 'inputbox' and assigns it to the variable input. This element is presumably an input field where the calculator display is shown.
let buttons = document.querySelectorAll('button');

let string = ""; //This line initializes an empty string variable called string. This variable will be used to store the input expression.
let arr = Array.from(buttons); //  This line converts the NodeList (result of querySelectorAll) into an array and assigns it to the variable arr. This allows you to use array methods on the buttons.

arr.forEach(button => { //This line iterates over each button in the array using the forEach method. The code inside the curly braces is the callback function that will be executed for each button.
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
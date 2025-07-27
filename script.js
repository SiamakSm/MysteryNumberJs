
let mysteryNumber;
let message = document.getElementById("message");
let message2 = document.getElementById("message2");
let buttonGuess = document.getElementById("buttonGuess");
let buttonStart = document.getElementById("buttonStart");
let input = document.getElementById("input");
disable(true);


function disable(status) {
    if (status == true) {           //in case that the game is off
        buttonGuess.disabled = true;
        input.disabled = true;
        message2.textContent = "Please Start the Game!";

    } else {                       //in case that the game is on
        mysteryNumber = 1 + (Math.floor(Math.random() * 10));
        input.value = "A Number PLZ!";
        buttonGuess.disabled = false;
        input.disabled = false;
        message2.textContent = "";
        message.textContent = "Make a Guess!";
    };
};

buttonStart.addEventListener("click", function () { // Game Start Button
    disable(false);
});

buttonGuess.addEventListener("click", function () { // Button to guess the mystery number
    const inputValue = Number(input.value);
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 10) {
        message.textContent = "Please guess a number between 1 and 10!";
        return;
    };
    guess(mysteryNumber, inputValue);
});

function guess(mysteryNumber, inputValue) { // To compare our number with the mystery number
    if (inputValue == mysteryNumber) {
        message.textContent = "Yeeees !!! You Won !";
        disable(true);
    } else if (inputValue > mysteryNumber) {
        message.textContent = "Noo !!! Try A Smaller One !";
    } else {
        message.textContent = "Noo !!! Try A Bigger One !";
    };
};
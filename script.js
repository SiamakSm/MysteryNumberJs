
let mysteryNumber = 111;
disable(true);

function disable(status) {
    if (status == true) {
        document.getElementById("buttonGuess").disabled = true;
        document.getElementById("input").disabled = true;
        document.getElementById("message2").textContent = "Please Start the Game!";

    } else {
        mysteryNumber = 1 + (Math.floor(Math.random() * 10));
        document.getElementById("input").value = "A Number PLZ!";
        document.getElementById("buttonGuess").disabled = false;
        document.getElementById("input").disabled = false;
        document.getElementById("message2").textContent = "";
        document.getElementById("message").textContent = "Make a Guess!";
    };
};
console
document.getElementById("buttonStart").addEventListener("click", function () {
    disable(false);
});

document.getElementById("buttonGuess").addEventListener("click", function () {
    const inputValue = Number(document.getElementById("input").value);
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 10) {
        document.getElementById("message").textContent = "Please enter a number between 1 and 10!";
        return;
    };
    guess(mysteryNumber, inputValue);
});

function guess(mysteryNumber, inputValue) {
    if (inputValue == mysteryNumber) {
        document.getElementById("message").textContent = "Yeeees !!! You Won !";
        disable(true);
    } else if (inputValue > mysteryNumber) {
        document.getElementById("message").textContent = "Noo !!! Try A Smaller One !";
    } else {
        document.getElementById("message").textContent = "Noo !!! Try A Bigger One !";
    };
};





// Defining variables.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];
// var alphabet = "abcdefghijklmnopqrstuvwxyz";




// Function to create random letter choices.
function randomlettr() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length )];

}
// Function to reset the game to original settings.
function resetgame() {

    guessesLeft = 9;
    lettersGuessed = [];
    randomlettr();
}


// function letGuess(){

// }

// Defined variables to hold text to push to the html.
var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var leftGues = document.getElementById("Guesses Left");
var guesses = document.getElementById("Guesses so far");


document.onkeyup = function (event) {

    var userGuess = event.key;
    // console.log (userGuess);

    if
        (computerChoices.includes(userGuess) && lettersGuessed.includes(userGuess) === false){
            lettersGuessed.push(userGuess);
            guessesLeft--;


        // (alphabet.includes(userGuess)) {

        if
            (computerGuess === userGuess) {
            wins++;
            resetgame();
        }

        // else {
            // guessesLeft--;
            // lettersGuessed.push(" " + userGuess);
        // }

        else if
            (guessesLeft === 0) {
            losses++;
            resetgame()
        }
    }




    winsText.textContent = wins;
    guesses.textContent = lettersGuessed;
    lossesText.textContent = losses;
    leftGues.textContent = guessesLeft;



}








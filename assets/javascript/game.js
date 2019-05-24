





var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var lettersGuessed = [];
var computerGuess = [];





function randomnum(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length-1)];
    // console.log(computerGuess);

}
console.log(computerGuess);
function resetgame() {

    guessesLeft = 5;
    lettersGuessed = [];
    randomnum();

}

var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var leftGues = document.getElementById("Guesses Left");
var guesses = document.getElementById("Guesses so far");


document.onkeyup = function (event) {

    var userGuess = event.key;





    if
        (computerGuess === userGuess) {
        wins++;
        // console.log(computerGuess);
        resetgame();

    }
    else {


        guessesLeft--;
        lettersGuessed.push(" " + userGuess);
    }

    if 
    (guessesLeft === 0){
        losses++;
        resetgame()

    }

    winsText.textContent = wins;
    guesses.textContent = lettersGuessed;
    lossesText.textContent = losses;
    leftGues.textContent = guessesLeft;



}








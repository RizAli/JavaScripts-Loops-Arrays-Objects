var upper = 3;
var randomNumber = getRandomNumber(upper);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper){
  return Math.floor( Math.random() * upper ) + 1;
}

do {
  guess  = prompt("I am thinking of a number between 1 and " + upper + " What is it?" )
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess)

document.write(" <p> You Guessed the number! <p>")
document.write("It took you " +  guessCount + " try/tries to guess the number: " + randomNumber );

# JavaScripts-Loops-Arrays-Objects

While Loop and do while loop:
-----------------------------

A while loop checks condition at the very begining of the loop. if a condition is true then a loop runs and if a condition is not true then loop is not going to run.

While on the other hand do while loop doesn't check the condition until the block has run once. Then, if the condition is tru, it runs again and again until the condition is no longer true.

for example if you want to get user email address, and if user enters wrong email address, you want to keep prompting the window and ask for the email address.



```
function randomNumbers(upper){
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;
while (counter < 100000) {
  var randNum = randomNumbers(20);
  document.write(randNum + " ");
  counter += 1;
}
```

Closer look to while loop:
--------------------------

Computer guessing the number.

```
var upper = 10;
var randomNumber = getRandomNumber(upper);
var attempts = 0;
var guess;


function getRandomNumber(upper){
  return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts +=1;
}

document.write("<p> The random number was: " +  randomNumber + "<p>")
document.write("<p> It took the computer " + attempts + " attempts to get it right. </p>")

```

do while loop:
---------------

Basic number guessing game, that puts the user against the computer.

```
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
```



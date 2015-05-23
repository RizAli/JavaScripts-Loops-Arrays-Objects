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

# JavaScripts-Loops-Arrays-Objects

While Loop:
-----------


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





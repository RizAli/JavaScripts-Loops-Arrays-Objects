function randomNumbers(upper){
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;
while (counter < 10) {
  var randNum = randomNumbers(20);
  document.write(randNum + " ");
  counter += 1;
}


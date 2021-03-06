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
for loop:
---------------

for (var counter =0; counter <10;  counter+=1 ) {
  document.write( counter );
}

commonly used variable for for loops are i and j. see example below

for (var i =1;  i <=10; i+=1) {
  document.write(i);
}

```
var html = '';

for ( var i = 1; i <= 10; i += 1) {
  html += '<div>' + i + '</div>';
}

document.write(html);

```


```
var html = '';
var red;
var green;
var blue;
var rgbColor;

function getRGB( red, green, blue ) {
  return Math.floor(Math.random() * 256 );
}


for (i = 0; i < 105; i += 1) {
  red = getRGB();
  green = getRGB();
  blue = getRGB();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
```
![alt tag](https://raw.githubusercontent.com/RizAli/JavaScripts-Loops-Arrays-Objects/master/images/forloopColors.png)


Array:
------
Array is a common data structure for holding multiple pieces of information.

reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

```
Simple array example and indices

players = ['riz', 'ainy', 'eeshal','anabia']
console.log(0);
```
Adding and Removing items from an array

```
Adding items:

var numbers = [1,2,3,4,5,6]
numbers.push(7,8,9);  // add an item at the end of the array
numbers.unshift(0); //Add an item at the beginning

Removing Items:

nums.shift(); // removes the first item.
nums.pop();   // removes the last item.
```

Array and loop:

```
students = ["A", "B", "C", "D"];

for (var i= 0;  i < students.length; i+=1) {
  console.log(students[i]);
}


A function that turns array into a HTML list


var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i=0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playList);


```

Some Useful Array methods
--------------------------

.join(',');
```
var daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

var daysString = daysInWeek.join(',');

console.log( daysString );
It returns
Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
```
concat();

```
var currentStudents = ["Anabia", "Bash", "Cathy"];
var newStudents = ["Dan", "Eva", "Fiona"];

var allStudents = currentStudents.concat( newStudents );

```
indexOf();

```
var fruit = ['Apple', 'Orange', 'Grapefruit'];
var position = fruit.indexOf('Grapefruit');

it will return position 2.
if the item is not in the list the value would be -1
```

### Search the store:


```
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while ("quit"){
  search = prompt("Search for a product in our store. Type 'list' to show all  items, type 'quit' to exit")
  search = search.tolowerCase();

  if( search === 'quit' ){
    break;
  } else if ( search === 'list' ) {

    print(inStock.join(', '));

  } else {
    if ( inStock.indexOf( search ) > -1 ) {
      print('Yes we have ' + search + ' in the store');
    } else {
      print( search + ' is not in stock. ');
    }
  }
}
```

Two Dimensional Arrays:
------------------------


```
var playList = [
  ['I Did it My Way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Imagine','John Lennon'],
  ['Born to Run','Bruce Springsteen'],
  ['Louie Louie','The Kingsmen'],
  ['Maybellene','Chuck Berry']
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>'
  print(listHTML);
}

printSongs(playList);
```
![alt tag](https://raw.githubusercontent.com/RizAli/JavaScripts-Loops-Arrays-Objects/master/images/playList2DArray.png)



Objects:
---------

Java script is an object based or object oriented programing.
Functions, arrays, strings, numbers, boolean are either objects or can be treated as objects.

- Object is something that has properties and methods.
- A property is like a variable that belongs to the object.
- A method is something that object can do or that can be done to the object.

Store and Access data:
variable can store single value.
Array can store list of values.

JS Objec allows us to store data in key value pairs or property value pairs.

The curly braces allows us to create an object.
```
var student = {
  name: "Riz",
  country : "UK",
  makersAcademyStudent: true,
  skills: ['Ruby', 'JavaScript', 'CSS']
};

alert(student.name);

Assig new value:

student.name = 'Ainy';

Create new property:

student.grade = 'A *';
```

Accessing Object properties using " for in "
---------------------------------------------
console
When using for in loop, one has to use [] notation to access the value

```
var person = {
  name: 'Riz',
  country: 'UK',
  age: 50,
  MAstudent: true
};

for ( var prop in person ){
  console.log( prop, ': ', person[prop]);
}

```

Students Search app :
--------------------
students.html file
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Students</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<h1> Students </h1>

<p> Good project to demonstrate an undrstanding of loops, arrays and objects </p>
<hr>
Student object will hold the following properties and there should be at least 5 student objects. <br><br>
<ol>
  <li> Name </li>
  <li> Track (e.g IOS, Web Design, Front End Development, Etc) </li>
  <li> Achievement (will hold a number value) </li>
  <li> Points (Holds the number of points a student has earned) </li>
</ol>

Secondly Print out each student record in an array, It should print out each property.
<div id="output">

</div>
<hr>
<script src="students.js"></script>
<script src="students_report.js"></script>
</body>
</html>

```
![alt tag](https://raw.githubusercontent.com/RizAli/JavaScripts-Loops-Arrays-Objects/master/images/studentsSearch.png)

students_report.js

```
// Access students record
var message = '';
var students;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML =  message;
}


function getStudentReport ( student ) {
  var report = ( "<h2> Student: " +  student.name + "</h2>" );
  report += ( "<h2> Track: " +  student.track + "</h2>" );
  report += ( "<h2> Achievement: " +  student.achievement + "</h2>" );
  report += ( "<h2> Points: " +  student.points + "</h2>" );
  return report;
}


while (true) {
  search = prompt('Search student record: Type a name [Riz] (or type quit to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for ( i = 0; i < students.length; i += 1 ) {
  student = students[i];
  if (student.name === search ) {
    message = getStudentReport( student );
    print(message);
  }
 }
}

```
students.js file
```
// create data structure
var students = [
  {
    name: "Riz",
    track: "Web Design",
    achievement: '5',
    points: '110'
  },
  {
    name: "Ainy",
    track: "Web Design",
    achievement: '5',
    points: '110'
  },
  {
    name: "Eeshal",
    track: "Web Design",
    achievement: '5',
    points: '110'
  },
  {
    name: "Anabia",
    track: "Web Design",
    achievement: '5',
    points: '110'
  },
  {
    name: "Shakir",
    track: "Web Design",
    achievement: '5',
    points: '110'
  }
];
```





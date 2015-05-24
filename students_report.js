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

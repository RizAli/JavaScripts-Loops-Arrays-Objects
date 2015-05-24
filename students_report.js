// Access students record
var message = '';
var students;

for ( i = 0; i < students.length; i += 1 ) {
  message += ( "<h2> Student: " +  students[i].name + "</h2>" );
  message += ( "<h2> Track: " +  students[i].track + "</h2>" );
  message += ( "<h2> Achievement: " +  students[i].achievement + "</h2>" );
  message += ( "<h2> Points: " +  students[i].points + "</h2>" );
  message += "<hr>"
}

document.write(message);
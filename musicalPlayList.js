var playList = [
  'I Did It My way',
  'Respec',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellen'
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>'
  print(listHTML);
}

printList(playList);
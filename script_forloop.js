var html = '';
var red;
var green;
var blue;
var rgbColor;

function getRGB( red, green, blue ) {
  return Math.floor(Math.random() * 256 )
}


for (i=0; i<10; i+=1) {
  red = getRGB();
  green = getRGB();
  blue = getRGB();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
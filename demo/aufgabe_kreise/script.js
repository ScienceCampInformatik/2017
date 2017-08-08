
function zufallszahl(number) {
  return Math.floor(Math.random()*number);
}

function maleKreise() {
  var canvas = document.getElementById('kreise');
  var context = canvas.getContext('2d');
  var breite = canvas.width;
  var hoehe = canvas.height;

  var farben = ["#f4d442", "#e04ebe", "#67b3ea"];
  context.clearRect(0, 0, breite, hoehe);

  for (var i = 0; i < 100; i++) {
    context.beginPath();
    context.fillStyle = farben[zufallszahl(3)];

    context.arc(zufallszahl(breite), zufallszahl(hoehe), zufallszahl(50), 0, 2 * Math.PI);
    context.fill();
  }
}
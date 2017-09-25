function celciusToFahrenheit(cdegrees) {
  c = cdegrees;
  f = c * (9 / 5) + 32;

  //console.log(f + "°F");
}

for (var i = 200; i > 0; i--) {
  var f = celciusToFahrenheit(i);

  if (i === f) {
    console.log(i + " celius equal to fahrenheit!");
    return true;
  }
}

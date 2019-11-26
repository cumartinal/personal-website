// Based from: https://www.w3schools.com/howto/howto_js_typewriter.asp
var currentCar = 0;

function typeWriter(txt) {
  var speed = 75;  // The speed/duration of the effect in milliseconds per character
  // We use Unicode carachter for displaying IPA characters and í
  var txt = "Hi, I'm Mart\u{00ED}n [ma\u{027E}'tin]";
  if (currentCar < txt.length) {
    document.getElementById("typewritten").innerHTML += txt.charAt(currentCar);
    currentCar++;
    setTimeout(typeWriter, speed);
  }
}
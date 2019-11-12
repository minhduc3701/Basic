var slides = document.getElementsByClassName("slide");
var index = 0;
function goleft() {
  if (index === 0) index = slides.length - 1;
  else index--;

  slides[0].style.marginLeft = "-" + index * 1125 + "px";
}
function goright() {
  if (index === slides.length - 1) index = 0;
  else index++;

  slides[0].style.marginLeft = "-" + index * 1125 + "px";
}

setInterval(goright, 5000);

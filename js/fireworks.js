function firework(event) {
  var x;
  var y;

  if (event.touches) {
    // 手机端触摸事件处理
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
  } else {
    // PC端点击事件处理
    x = event.clientX;
    y = event.clientY;
  }

  var size = Math.random() * 20 + 10;
  var hue = Math.floor(Math.random() * 360);
  var saturation = "70%";
  var lightness = "50%";

  var particle = document.createElement("span");
  particle.style.left = x + "px";
  particle.style.top = y + "px";
  particle.style.width = size + "px";
  particle.style.height = size + "px";
  particle.style.background = "hsl(" + hue + ", " + saturation + ", " + lightness + ")";

  particle.classList.add("firework");

  document.body.appendChild(particle);

  setTimeout(function () {
    particle.parentNode.removeChild(particle);
  }, 1000);
}

document.addEventListener("click", firework);
document.addEventListener("touchstart", firework);